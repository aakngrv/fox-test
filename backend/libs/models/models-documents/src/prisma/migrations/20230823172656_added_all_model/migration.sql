/*
  Warnings:

  - The primary key for the `vehicles_datas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `vehicke_data_id` on the `vehicles_datas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "vehicles_datas" DROP CONSTRAINT "vehicles_datas_pkey",
DROP COLUMN "vehicke_data_id",
ADD COLUMN     "vehicle_data_id" SERIAL NOT NULL,
ADD CONSTRAINT "vehicles_datas_pkey" PRIMARY KEY ("vehicle_data_id");
