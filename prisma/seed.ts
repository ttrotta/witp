import "dotenv/config";
import { prisma } from "../src/infrastructure/db/prisma";
import { bodyParts } from "../src/shared/anatomy";
import anatomy from "../src/infrastructure/i18n/dictionaries/en/anatomy.json";

try {
  await prisma.$transaction(
    bodyParts.map(({ meshId }) =>
      prisma.bodyPart.upsert({
        where: { meshId },
        update: { name: anatomy.parts[meshId] },
        create: { meshId, name: anatomy.parts[meshId] },
      }),
    ),
  );
  console.log(`Seeded ${bodyParts.length} anatomical regions.`);
} finally {
  await prisma.$disconnect();
}
