/*
  Warnings:

  - You are about to drop the `add_back_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `back_side_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_back_elements" DROP CONSTRAINT "add_back_elements_back_side_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "back_side_damages" DROP CONSTRAINT "back_side_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "backSideDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "backSideDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "backSideDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "backSideDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "backSideDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "backSideDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "back_side_damage_left_lamp" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "back_side_damage_rear_bumper" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "back_side_damage_right_lamp" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "back_side_damage_tailgate" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "back_side_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_back_elements";

-- DropTable
DROP TABLE "back_side_damages";
