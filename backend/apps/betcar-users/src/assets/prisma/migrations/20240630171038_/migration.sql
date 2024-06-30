/*
  Warnings:

  - You are about to drop the column `abs` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `airbag` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `battery` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `check_engine` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `control_light_comment` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `electronic_diagnostics` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `esp` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `oil_pressure` on the `dashboards` table. All the data in the column will be lost.
  - You are about to drop the column `tire_pressure` on the `dashboards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "dashboards" DROP COLUMN "abs",
DROP COLUMN "airbag",
DROP COLUMN "battery",
DROP COLUMN "check_engine",
DROP COLUMN "control_light_comment",
DROP COLUMN "electronic_diagnostics",
DROP COLUMN "esp",
DROP COLUMN "oil_pressure",
DROP COLUMN "tire_pressure";

-- CreateTable
CREATE TABLE "add_elements_dash" (
    "add_element_dash_id" SERIAL NOT NULL,
    "dashboardId" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "add_elements_dash_pkey" PRIMARY KEY ("add_element_dash_id")
);

-- AddForeignKey
ALTER TABLE "add_elements_dash" ADD CONSTRAINT "add_elements_dash_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "dashboards"("dashboard_id") ON DELETE CASCADE ON UPDATE CASCADE;
