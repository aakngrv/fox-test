/*
  Warnings:

  - You are about to drop the `locations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "locations" DROP CONSTRAINT "locations_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "location_address" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "location_city" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "location_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "location_country" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "location_region" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "locations";
