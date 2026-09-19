CREATE TABLE "Session" (
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" UUID NOT NULL,
    CONSTRAINT "Session_pkey" PRIMARY KEY ("tokenHash")
);
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "PainRecord" ADD COLUMN "recordedAt" DATE;
UPDATE "PainRecord" SET "recordedAt" = "createdAt"::date;
ALTER TABLE "PainRecord" ALTER COLUMN "recordedAt" SET NOT NULL;
ALTER TABLE "PainRecord" ALTER COLUMN "recordedAt" SET DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "PainRecord" ADD CONSTRAINT "PainRecord_intensity_check" CHECK ("intensity" BETWEEN 1 AND 10) NOT VALID;
ALTER TABLE "PainRecord" VALIDATE CONSTRAINT "PainRecord_intensity_check";
