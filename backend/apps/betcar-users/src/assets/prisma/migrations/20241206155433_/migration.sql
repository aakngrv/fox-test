/*
  Warnings:

  - You are about to drop the column `test_drive_malfunctions` on the `reports` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reports" DROP COLUMN "test_drive_malfunctions",
ADD COLUMN     "test_drive_brake_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_brake_system_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "test_drive_engine" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_engine_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "test_drive_exhaust_system" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_exhaust_system_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "test_drive_parking_brake" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_parking_brake_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "test_drive_steering" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_steering_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "test_drive_suspension" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_suspension_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "test_drive_transmission" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_transmission_comment" TEXT NOT NULL DEFAULT '';
