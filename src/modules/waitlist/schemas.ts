import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
