/*
  Warnings:

  - You are about to drop the column `fail` on the `additional_documents` table. All the data in the column will be lost.
  - You are about to drop the column `fail` on the `sts` table. All the data in the column will be lost.
  - You are about to drop the column `fail` on the `tcp` table. All the data in the column will be lost.
  - Added the required column `report_id` to the `additional_documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "additional_documents" DROP COLUMN "fail",
ADD COLUMN     "file" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "report_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sts" DROP COLUMN "fail",
ADD COLUMN     "file" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "tcp" DROP COLUMN "fail",
ADD COLUMN     "file" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "additional_documents" ADD CONSTRAINT "additional_documents_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
