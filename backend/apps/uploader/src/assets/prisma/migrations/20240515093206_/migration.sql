/*
  Warnings:

  - You are about to drop the column `tes_drive` on the `tests_drive` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tests_drive" DROP COLUMN "tes_drive",
ADD COLUMN     "all_system_ok" BOOLEAN NOT NULL DEFAULT false;
