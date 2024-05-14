/*
  Warnings:

  - You are about to drop the column `frame_number` on the `cars_datas` table. All the data in the column will be lost.
  - The primary key for the `vin_body_numbers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `vin_body_number` on the `vin_body_numbers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cars_datas" DROP COLUMN "frame_number";

-- AlterTable
ALTER TABLE "vin_body_numbers" DROP CONSTRAINT "vin_body_numbers_pkey",
DROP COLUMN "vin_body_number",
ADD COLUMN     "vin_body_number_id" SERIAL NOT NULL,
ADD CONSTRAINT "vin_body_numbers_pkey" PRIMARY KEY ("vin_body_number_id");

-- CreateTable
CREATE TABLE "frame_numbers" (
    "frame_number_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "frame_number" TEXT NOT NULL DEFAULT '',
    "expert_confirm" BOOLEAN NOT NULL DEFAULT false,
    "number_state" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "photo" TEXT[] DEFAULT ARRAY['']::TEXT[],

    CONSTRAINT "frame_numbers_pkey" PRIMARY KEY ("frame_number_id")
);

-- AddForeignKey
ALTER TABLE "frame_numbers" ADD CONSTRAINT "frame_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;
