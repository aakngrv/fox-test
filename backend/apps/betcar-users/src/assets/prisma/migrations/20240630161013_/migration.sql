/*
  Warnings:

  - You are about to drop the column `brake_system` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `engine` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `exhaust_system` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `parking_brake` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `steering` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `suspension` on the `tests_drive` table. All the data in the column will be lost.
  - You are about to drop the column `transmission` on the `tests_drive` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tests_drive" DROP COLUMN "brake_system",
DROP COLUMN "comment",
DROP COLUMN "engine",
DROP COLUMN "exhaust_system",
DROP COLUMN "parking_brake",
DROP COLUMN "steering",
DROP COLUMN "suspension",
DROP COLUMN "transmission",
ADD COLUMN     "malfunctions" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- CreateTable
CREATE TABLE "add_elements_test" (
    "add_element_test_id" SERIAL NOT NULL,
    "testDriveId" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "add_elements_test_pkey" PRIMARY KEY ("add_element_test_id")
);

-- AddForeignKey
ALTER TABLE "add_elements_test" ADD CONSTRAINT "add_elements_test_testDriveId_fkey" FOREIGN KEY ("testDriveId") REFERENCES "tests_drive"("test_drive_id") ON DELETE CASCADE ON UPDATE CASCADE;
