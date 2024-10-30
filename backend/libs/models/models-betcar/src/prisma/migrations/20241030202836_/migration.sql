-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "vin_number" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "vin_body_numbers" ALTER COLUMN "vin_number" DROP NOT NULL;
