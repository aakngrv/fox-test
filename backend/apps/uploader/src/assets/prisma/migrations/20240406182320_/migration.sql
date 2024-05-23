/*
  Warnings:

  - The primary key for the `service_inspections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sercice_ispection_id` on the `service_inspections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "service_inspections" DROP CONSTRAINT "service_inspections_pkey",
DROP COLUMN "sercice_ispection_id",
ADD COLUMN     "service_inspection_id" SERIAL NOT NULL,
ADD CONSTRAINT "service_inspections_pkey" PRIMARY KEY ("service_inspection_id");
