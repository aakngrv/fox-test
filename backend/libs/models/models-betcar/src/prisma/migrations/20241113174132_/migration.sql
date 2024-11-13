/*
  Warnings:

  - You are about to drop the `add_interior_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `interior_damages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_interior_elements" DROP CONSTRAINT "add_interior_elements_interior_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "interior_damages" DROP CONSTRAINT "interior_damages_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "interiorDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interiorDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interiorDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interiorDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interiorDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interiorDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_damage_back_left_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_back_right_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_back_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_ceiling" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_drivers_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_front_left_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_front_right_door_card" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_passenger_seat" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_salon_carpet" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_sleeping_compartment" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_torpedo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_interior_elements";

-- DropTable
DROP TABLE "interior_damages";
