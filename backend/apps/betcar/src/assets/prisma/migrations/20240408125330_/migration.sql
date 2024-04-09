/*
  Warnings:

  - You are about to drop the column `frame_number` on the `cars_datas` table. All the data in the column will be lost.
  - You are about to drop the column `vin` on the `cars_datas` table. All the data in the column will be lost.
  - The `front_left_options` column on the `complectation_wheels` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `back_left_options` column on the `complectation_wheels` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `front_right_options` column on the `complectation_wheels` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `back_right_options` column on the `complectation_wheels` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cars_datas" DROP COLUMN "frame_number",
DROP COLUMN "vin";

-- AlterTable
ALTER TABLE "complectation_wheels" DROP COLUMN "front_left_options",
ADD COLUMN     "front_left_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "back_left_options",
ADD COLUMN     "back_left_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "front_right_options",
ADD COLUMN     "front_right_options" TEXT[] DEFAULT ARRAY['']::TEXT[],
DROP COLUMN "back_right_options",
ADD COLUMN     "back_right_options" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- CreateTable
CREATE TABLE "vin_body_numbers" (
    "vin_body_number" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "vin_number" TEXT NOT NULL DEFAULT '',
    "expert_confirm" BOOLEAN NOT NULL DEFAULT false,
    "number_state" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "vin_body_numbers_pkey" PRIMARY KEY ("vin_body_number")
);

-- AddForeignKey
ALTER TABLE "vin_body_numbers" ADD CONSTRAINT "vin_body_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;
