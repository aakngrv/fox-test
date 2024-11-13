/*
  Warnings:

  - You are about to drop the `add_elements_dash` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dashboards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_elements_dash" DROP CONSTRAINT "add_elements_dash_dashboardId_fkey";

-- DropForeignKey
ALTER TABLE "dashboards" DROP CONSTRAINT "dashboards_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "dashboardCommentOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dashboardCommentThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dashboardCommentTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dashboardIsCheckOne" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dashboardIsCheckThree" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dashboardIsCheckTwo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dashboardNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dashboardNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dashboardNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dashboard_diagnostics_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dashboard_diagnostics_file" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "dashboard_is_no_mileage" BOOLEAN DEFAULT false,
ADD COLUMN     "dashboard_mileage_in_additional_blocks" TEXT DEFAULT '',
ADD COLUMN     "dashboard_mileage_in_the_engine_block" TEXT DEFAULT '',
ADD COLUMN     "dashboard_mileage_in_the_gearbox" TEXT DEFAULT '',
ADD COLUMN     "dashboard_mileage_on_dashboard" TEXT DEFAULT '',
ADD COLUMN     "dashboard_no_errors" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dashboard_total_comment" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "add_elements_dash";

-- DropTable
DROP TABLE "dashboards";
