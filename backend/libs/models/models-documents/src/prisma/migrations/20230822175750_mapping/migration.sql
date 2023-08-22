/*
  Warnings:

  - You are about to drop the column `carId` on the `sellers_details` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sellers_details" DROP COLUMN "carId",
ADD COLUMN     "car_id" INTEGER;
