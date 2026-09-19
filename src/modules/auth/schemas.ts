import { z } from "zod";

export const authSchema = z
  .object({
    mode: z.enum(["login", "register"]),
    email: z
      .email()
      .max(254)
      .transform((email) => email.toLowerCase()),
    password: z.string().min(12).max(128),
    username: z
      .string()
      .trim()
      .min(3)
      .max(30)
      .regex(/^[\p{L}\p{N}_-]+$/u)
      .optional(),
  })
  .refine((value) => value.mode !== "register" || Boolean(value.username));
