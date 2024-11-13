/*
  Warnings:

  - You are about to drop the `add_trunk_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trunks_damage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_trunk_elements" DROP CONSTRAINT "add_trunk_elements_trunk_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "trunks_damage" DROP CONSTRAINT "trunks_damage_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "trunkDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunkDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunkDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunkDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "trunkDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "trunkDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "trunk_damage_carpet_floor" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_cover_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_left_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_left_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_right_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_right_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_seat_back_trim" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_spare_wheel_well" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "trunk_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_trunk_elements";

-- DropTable
DROP TABLE "trunks_damage";
