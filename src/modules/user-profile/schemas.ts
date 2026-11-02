import { z } from "zod";
import { locales } from "@/infrastructure/i18n/dictionaries";

export const usernameSchema = z
  .string()
  .trim()
  .min(3)
  .max(30)
  .regex(/^[\p{L}\p{N}_-]+$/u);

export const updateProfileSchema = z.object({
  description: z.string().trim().max(500).nullish(),
  location: z.string().trim().max(100).nullish(),
  website: z
    .url({ protocol: /^https?$/ })
    .max(200)
    .nullish(),
  birthDate: z.iso
    .date()
    .refine((date) => Date.parse(date) <= Date.now())
    .nullish(),
});

export const updateSettingsSchema = z.object({
  theme: z.enum(["system", "light", "dark"]).optional(),
  language: z.enum(locales).optional(),
  country: z
    .string()
    .regex(/^[A-Z]{2}$/)
    .nullish(),
});

export const followUserSchema = z.object({ userId: z.uuid() });

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
export type FollowUserInput = z.infer<typeof followUserSchema>;
