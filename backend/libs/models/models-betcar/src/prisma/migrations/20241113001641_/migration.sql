/*
  Warnings:

  - You are about to drop the `add_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `engine_compartments_damage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_elements" DROP CONSTRAINT "add_elements_engine_compartment_damage_id_fkey";

-- DropForeignKey
ALTER TABLE "engine_compartments_damage" DROP CONSTRAINT "engine_compartments_damage_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "engineCompartmentDamageAddInfTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engineCompartmentDamageAddInfoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engineCompartmentDamageAddInfoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engineCompartmentDamageAddNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "engineCompartmentDamageAddNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "engineCompartmentDamageAddNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "engine_compartment_damage_hood_hinges" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engine_compartment_damage_left_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engine_compartment_damage_left_side_member" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engine_compartment_damage_motor_shield" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engine_compartment_damage_right_glass" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engine_compartment_damage_right_side_member" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engine_compartment_damage_televisor" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "engine_compartment_damage_without_damage" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "add_elements";

-- DropTable
DROP TABLE "engine_compartments_damage";
