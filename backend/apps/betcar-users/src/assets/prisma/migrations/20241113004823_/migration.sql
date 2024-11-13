/*
  Warnings:

  - You are about to drop the `add_left_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `left_side_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_left_elements" DROP CONSTRAINT "add_left_elements_left_side_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "left_side_damages" DROP CONSTRAINT "left_side_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "leftSideDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "leftSideDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "leftSideDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "leftSideDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "leftSideDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "leftSideDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "left_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_mirror" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "left_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_left_elements";

-- DropTable
DROP TABLE "left_side_damages";
