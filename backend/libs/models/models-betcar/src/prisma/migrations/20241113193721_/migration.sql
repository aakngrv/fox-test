/*
  Warnings:

  - You are about to drop the `add_elements_test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `experts_opinions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tests_drive` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "add_elements_test" DROP CONSTRAINT "add_elements_test_testDriveId_fkey";

-- DropForeignKey
ALTER TABLE "experts_opinions" DROP CONSTRAINT "experts_opinions_report_id_fkey";

-- DropForeignKey
ALTER TABLE "tests_drive" DROP CONSTRAINT "tests_drive_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "expert_opinion_history_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "expert_opinion_history_file" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "expert_opinion_minus_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "expert_opinion_plus_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "expert_opinion_total_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "testDriveCommentOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "testDriveCommentThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "testDriveCommentTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "testDriveIsCheckOne" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "testDriveIsCheckThree" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "testDriveIsCheckTwo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "testDriveNameOne" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "testDriveNameThree" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "testDriveNameTwo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "test_drive_all_system_ok" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "test_drive_malfunctions" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- DropTable
DROP TABLE "add_elements_test";

-- DropTable
DROP TABLE "experts_opinions";

-- DropTable
DROP TABLE "tests_drive";
