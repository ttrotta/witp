import { z } from "zod";
import { isMeshId } from "@/shared/anatomy";

export const painRecordSchema = z.object({
  meshId: z.string().refine(isMeshId),
  intensity: z.number().int().min(1).max(10),
  notes: z.string().trim().max(2000).default(""),
  recordedAt: z.iso
    .date()
    .refine((date) => Date.parse(date) <= Date.now() + 24 * 60 * 60 * 1000),
});

export type PainRecordInput = z.infer<typeof painRecordSchema>;
export type PainEntry = {
  id: string;
  meshId: string;
  intensity: number;
  notes: string | null;
  recordedAt: string;
};
