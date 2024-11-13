/*
  Warnings:

  - You are about to drop the `exterior_photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "exterior_photos" DROP CONSTRAINT "exterior_photos_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "add_photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "back_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "front_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "hood_open" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "left_back_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "left_front_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "left_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "right_back_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "right_front_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "right_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "trunk_open" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "exterior_photos";
