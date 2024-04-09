/*
  Warnings:

  - You are about to drop the column `state_number` on the `cars_datas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cars_datas" DROP COLUMN "state_number";

-- CreateTable
CREATE TABLE "state_numbers" (
    "state_number_id" SERIAL NOT NULL,
    "car_data_id" INTEGER NOT NULL,
    "absent" BOOLEAN NOT NULL DEFAULT false,
    "foreign" BOOLEAN NOT NULL DEFAULT false,
    "state_number" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "state_numbers_pkey" PRIMARY KEY ("state_number_id")
);

-- AddForeignKey
ALTER TABLE "state_numbers" ADD CONSTRAINT "state_numbers_car_data_id_fkey" FOREIGN KEY ("car_data_id") REFERENCES "cars_datas"("car_data_id") ON DELETE CASCADE ON UPDATE CASCADE;
