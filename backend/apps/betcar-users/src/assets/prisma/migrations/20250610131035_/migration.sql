-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "is_activated_link" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "unique_link" TEXT NOT NULL DEFAULT '';
