/*
  Warnings:

  - You are about to drop the `add_right_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `right_side_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_right_elements" DROP CONSTRAINT "add_right_elements_right_side_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "right_side_damages" DROP CONSTRAINT "right_side_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "rightSideDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "rightSideDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "rightSideDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "rightSideDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "rightSideDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "rightSideDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "right_side_damage_right_center_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_front_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_front_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_front_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_mirror" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_rear_door" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_rear_fender" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_rear_pillar" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_right_threshold" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "right_side_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_right_elements";

-- DropTable
DROP TABLE "right_side_damages";
