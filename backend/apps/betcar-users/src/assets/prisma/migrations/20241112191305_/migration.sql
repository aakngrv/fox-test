/*
  Warnings:

  - You are about to drop the `sellers_details` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sellers_details" DROP CONSTRAINT "sellers_details_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "car_cost" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "link_to_ad" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "refusal_of_inspection" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sellerDetailsComment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sellerDetailsName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sellerDetailsPhone" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sellerDetailsRole" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "sellers_details";
