/*
  Warnings:

  - You are about to drop the `add_elements_electrical` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `add_elements_mechanical` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `running_engines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_elements_electrical" DROP CONSTRAINT "add_elements_electrical_runningEngineId_fkey";

-- DropForeignKey
ALTER TABLE "add_elements_mechanical" DROP CONSTRAINT "add_elements_mechanical_runningEngineId_fkey";

-- DropForeignKey
ALTER TABLE "running_engines" DROP CONSTRAINT "running_engines_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "all_system_ok_electric" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "all_system_ok_mechanical" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "engine_not_start" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "engine_video" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineComment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineElectricalCommentOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineElectricalCommentThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineElectricalCommentTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineElectricalIsCheckOne" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "runningEngineElectricalIsCheckThree" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "runningEngineElectricalIsCheckTwo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "runningEngineElectricalNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineElectricalNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineElectricalNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineMechanicalCommentOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineMechanicalCommentThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineMechanicalCommentTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineMechanicalIsCheckOne" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "runningEngineMechanicalIsCheckThree" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "runningEngineMechanicalIsCheckTwo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "runningEngineMechanicalNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineMechanicalNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "runningEngineMechanicalNameTwo" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "add_elements_electrical";

-- DropTable
DROP TABLE "add_elements_mechanical";

-- DropTable
DROP TABLE "running_engines";
