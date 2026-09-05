"use server";

import { z } from "zod";
import { prisma } from "@/infrastructure/db/prisma";
import { waitlistSchema } from "./schemas";

export async function subscribeToWaitlist(
  input: z.input<typeof waitlistSchema>,
): Promise<{ success: boolean; error?: string }> {
  const result = waitlistSchema.safeParse(input);

  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message };
  }

  try {
    await prisma.waitlistEmail.create({
      data: {
        email: result.data.email.toLowerCase(),
      },
    });
    return { success: true };
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return { success: false, error: "Email already registered" };
    }
    return { success: false, error: "Something went wrong" };
  }
}
