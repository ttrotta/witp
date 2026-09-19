"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/infrastructure/db/prisma";
import { getSessionUser } from "@/infrastructure/auth/session";
import { painRecordSchema, type PainEntry } from "./schemas";

export async function createPainRecord(input: unknown) {
  const parsed = painRecordSchema.safeParse(input);
  if (!parsed.success) return { error: "invalid" as const };
  try {
    const user = await getSessionUser();
    if (!user) return { error: "unauthorized" as const };
    const { meshId, intensity, notes, recordedAt } = parsed.data;
    const bodyPart = await prisma.bodyPart.findUnique({
      where: { meshId },
      select: { id: true },
    });
    if (!bodyPart) return { error: "missingRegion" as const };
    await prisma.painRecord.create({
      data: {
        userId: user.id,
        bodyPartId: bodyPart.id,
        intensity,
        notes: notes || null,
        recordedAt: new Date(recordedAt),
      },
    });
  } catch {
    return { error: "connection" as const };
  }
  revalidatePath("/", "layout");
  return { success: true as const };
}

export async function getPainHistory(): Promise<{
  entries: PainEntry[];
  error?: "connection";
}> {
  try {
    const user = await getSessionUser();
    if (!user) return { entries: [] };
    const entries = await prisma.painRecord.findMany({
      where: { userId: user.id },
      orderBy: [{ recordedAt: "desc" }, { createdAt: "desc" }],
      take: 20,
      select: {
        id: true,
        intensity: true,
        notes: true,
        recordedAt: true,
        bodyPart: { select: { meshId: true } },
      },
    });
    return {
      entries: entries.map(({ bodyPart, recordedAt, ...entry }) => ({
        ...entry,
        meshId: bodyPart.meshId,
        recordedAt: recordedAt.toISOString().slice(0, 10),
      })),
    };
  } catch {
    return { entries: [], error: "connection" };
  }
}
