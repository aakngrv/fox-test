/*
  Warnings:

  - You are about to drop the `cars_models` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `report_id` to the `cars_datas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars_datas" ADD COLUMN     "report_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "cars_models";

-- AddForeignKey
ALTER TABLE "cars_datas" ADD CONSTRAINT "cars_datas_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
