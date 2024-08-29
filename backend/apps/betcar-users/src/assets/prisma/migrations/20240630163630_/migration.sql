-- AlterTable
ALTER TABLE "complectation_wheels" ALTER COLUMN "seasonality" SET NOT NULL,
ALTER COLUMN "seasonality" SET DEFAULT '',
ALTER COLUMN "seasonality" SET DATA TYPE TEXT;
