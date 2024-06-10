-- AlterTable
ALTER TABLE "engine_compartments_damage" ADD COLUMN     "motor_shield" TEXT[] DEFAULT ARRAY['']::TEXT[];
