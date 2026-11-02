"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { prisma } from "@/infrastructure/db/prisma";
import { allowAttempt, waitlistLimit } from "@/infrastructure/auth/rate-limit";
import { waitlistSchema } from "./schemas";

export type WaitlistResult =
  | { success: true }
  | {
      success: false;
      error: "invalid" | "duplicate" | "rateLimited" | "connection";
    };

export async function subscribeToWaitlist(
  input: z.input<typeof waitlistSchema>,
): Promise<WaitlistResult> {
  const forwardedFor = (await headers()).get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  if (!allowAttempt(`waitlist:${ip}`, waitlistLimit))
    return { success: false, error: "rateLimited" };

  const result = waitlistSchema.safeParse(input);

  if (!result.success) {
    return { success: false, error: "invalid" };
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
      return { success: false, error: "duplicate" };
    }
    return { success: false, error: "connection" };
  }
}
