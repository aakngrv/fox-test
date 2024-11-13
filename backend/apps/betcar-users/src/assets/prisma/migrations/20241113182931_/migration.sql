/*
  Warnings:

  - You are about to drop the `add_elements_stop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stopped_engines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_elements_stop" DROP CONSTRAINT "add_elements_stop_stoppedEngineId_fkey";

-- DropForeignKey
ALTER TABLE "stopped_engines" DROP CONSTRAINT "stopped_engines_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "brake_discs" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "brake_fluid_level" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "brake_pads" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "coolant_level" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "drive_belts" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "engine_oil_level" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "gearbox_oil_level" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "gur_liquid_level" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "is_emergency" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_fogging" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_new" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_not_go" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_understaffed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "stoppedEngineCommenTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stoppedEngineComment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stoppedEngineCommentOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stoppedEngineCommentThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stoppedEngineFoggingOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "stoppedEngineFoggingThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "stoppedEngineFoggingTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "stoppedEngineNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stoppedEngineNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stoppedEngineNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "stoppedEnginePhotoOne" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "stoppedEnginePhotoThree" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "stoppedEnginePhotoTwo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "technical_fluid_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "wear_comment" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "add_elements_stop";

-- DropTable
DROP TABLE "stopped_engines";
