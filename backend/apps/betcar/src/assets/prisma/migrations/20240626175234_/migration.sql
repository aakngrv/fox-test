-- AlterTable
ALTER TABLE "complectation_wheels" ADD COLUMN     "additional_disks_type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "additional_tires_seasonality" TEXT[] DEFAULT ARRAY['']::TEXT[];
