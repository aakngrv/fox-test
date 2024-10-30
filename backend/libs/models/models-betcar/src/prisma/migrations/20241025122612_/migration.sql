/*
  Warnings:

  - A unique constraint covering the columns `[vin_number]` on the table `vin_body_numbers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "vin_body_numbers_vin_number_key" ON "vin_body_numbers"("vin_number");
