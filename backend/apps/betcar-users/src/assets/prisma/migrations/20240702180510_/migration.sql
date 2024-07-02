/*
  Warnings:

  - You are about to drop the column `diagnostics_result` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `select_error` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `electrical_malfunction` on the `running_engines` table. All the data in the column will be lost.
  - You are about to drop the column `mechanical_malfunction` on the `running_engines` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "add_elements_test" ADD COLUMN     "comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "is_check" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "dashboards" DROP COLUMN "diagnostics_result",
DROP COLUMN "select_error",
ADD COLUMN     "diagnostics_comment" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "experts_opinions" ADD COLUMN     "history_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "history_file" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "running_engines" DROP COLUMN "electrical_malfunction",
DROP COLUMN "mechanical_malfunction";
