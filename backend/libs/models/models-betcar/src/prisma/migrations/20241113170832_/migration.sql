/*
  Warnings:

  - You are about to drop the `add_glass_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `glass_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_glass_elements" DROP CONSTRAINT "add_glass_elements_glass_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "glass_damages" DROP CONSTRAINT "glass_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "glassDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glassDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glassDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glassDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "glassDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "glassDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "glass_damage_all_glass_is_factory" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "glass_damage_left_front_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glass_damage_left_rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glass_damage_rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glass_damage_right_front_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glass_damage_right_rear_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glass_damage_windshield" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "glass_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_glass_elements";

-- DropTable
DROP TABLE "glass_damages";
