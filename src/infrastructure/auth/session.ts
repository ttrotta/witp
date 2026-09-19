import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { prisma } from "@/infrastructure/db/prisma";

const cookieName = "witp-session";
const tokenHash = (token: string) =>
  createHash("sha256").update(token).digest("hex");

export async function getSessionUser() {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
  const session = await prisma.session.findUnique({
    where: { tokenHash: tokenHash(token) },
    select: {
      expiresAt: true,
      user: { select: { id: true, username: true, status: true } },
    },
  });
  if (
    !session ||
    session.expiresAt <= new Date() ||
    session.user.status !== "ACTIVE"
  )
    return null;
  return session.user;
}

export async function createSession(userId: string) {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await prisma.session.deleteMany({
    where: { userId, expiresAt: { lt: new Date() } },
  });
  await prisma.session.create({
    data: { tokenHash: tokenHash(token), userId, expiresAt },
  });
  (await cookies()).set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function deleteSession() {
  const jar = await cookies();
  const token = jar.get(cookieName)?.value;
  if (token)
    await prisma.session.deleteMany({ where: { tokenHash: tokenHash(token) } });
  jar.delete(cookieName);
}
