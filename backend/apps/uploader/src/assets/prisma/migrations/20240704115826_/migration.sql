-- AlterTable
ALTER TABLE "frame_numbers" ADD COLUMN     "comment" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "state_numbers" ADD COLUMN     "comment" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "vin_body_numbers" ADD COLUMN     "comment" TEXT NOT NULL DEFAULT '';
