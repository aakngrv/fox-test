-- AlterTable
ALTER TABLE "sellers_details" ADD COLUMN     "is_bargain" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "role" SET DEFAULT '',
ALTER COLUMN "role" SET DATA TYPE TEXT;
