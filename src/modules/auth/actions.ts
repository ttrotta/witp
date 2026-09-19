"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/infrastructure/db/prisma";
import { createSession, deleteSession } from "@/infrastructure/auth/session";
import { hashPassword, verifyPassword } from "@/infrastructure/auth/password";
import { allowAuthAttempt } from "@/infrastructure/auth/rate-limit";
import { authSchema } from "./schemas";

export async function authenticate(input: unknown) {
  const parsed = authSchema.safeParse(input);
  if (!parsed.success) return { error: "invalid" as const };
  const { email, password, username, mode } = parsed.data;
  if (!allowAuthAttempt(email)) return { error: "rateLimited" as const };
  try {
    let user;
    if (mode === "register") {
      user = await prisma.user.create({
        data: {
          email,
          username: username!,
          passwordHash: await hashPassword(password),
        },
      });
    } else {
      user = await prisma.user.findUnique({ where: { email } });
      // Run the same KDF for unknown accounts to avoid an account-existence timing signal.
      const hash =
        user?.passwordHash ?? `scrypt:${"0".repeat(32)}:${"0".repeat(128)}`;
      const valid = await verifyPassword(password, hash);
      if (!valid || !user || user.status !== "ACTIVE")
        return { error: "credentials" as const };
    }
    await createSession(user.id);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    )
      return { error: "unavailable" as const };
    return { error: "connection" as const };
  }
  revalidatePath("/", "layout");
  return { success: true as const };
}

export async function signOut() {
  await deleteSession();
  revalidatePath("/", "layout");
}
