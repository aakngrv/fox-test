/*
  Warnings:

  - Added the required column `report_id` to the `sellers_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "title" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "executor_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "sellers_details" ADD COLUMN     "report_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sellers_details" ADD CONSTRAINT "sellers_details_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
