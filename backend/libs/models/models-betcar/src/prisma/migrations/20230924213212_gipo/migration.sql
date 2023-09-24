/*
  Warnings:

  - Added the required column `report_id` to the `sts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sts" ADD COLUMN     "report_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sts" ADD CONSTRAINT "sts_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
