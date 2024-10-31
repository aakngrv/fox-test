/*
  Warnings:

  - Made the column `vin_number` on table `vin_body_numbers` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "reports_vin_number_key";

-- AlterTable
ALTER TABLE "vin_body_numbers" ALTER COLUMN "vin_number" SET NOT NULL;
