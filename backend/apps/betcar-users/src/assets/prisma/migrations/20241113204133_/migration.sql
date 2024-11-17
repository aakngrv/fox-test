/*
  Warnings:

  - A unique constraint covering the columns `[vin_number]` on the table `reports` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "reports_vin_number_key" ON "reports"("vin_number");
