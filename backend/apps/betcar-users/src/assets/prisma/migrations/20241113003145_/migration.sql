/*
  Warnings:

  - You are about to drop the `add_front_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `front_side_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_front_elements" DROP CONSTRAINT "add_front_elements_front_side_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "front_side_damages" DROP CONSTRAINT "front_side_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "frontSideDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "frontSideDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "frontSideDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "frontSideDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "frontSideDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "frontSideDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "front_side_damage_fog_lights" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_side_damage_front_bumper" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_side_damage_hood" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_side_damage_left_headlight" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_side_damage_radiator_grille" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_side_damage_right_headlight" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "front_side_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_front_elements";

-- DropTable
DROP TABLE "front_side_damages";
