/*
  Warnings:

  - The `number_state` column on the `engine_numbers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `number_state` column on the `frame_numbers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `number_state` column on the `vin_body_numbers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "engine_numbers" DROP COLUMN "number_state",
ADD COLUMN     "number_state" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[];

-- AlterTable
ALTER TABLE "frame_numbers" DROP COLUMN "number_state",
ADD COLUMN     "number_state" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[];

-- AlterTable
ALTER TABLE "vin_body_numbers" DROP COLUMN "number_state",
ADD COLUMN     "number_state" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[];
