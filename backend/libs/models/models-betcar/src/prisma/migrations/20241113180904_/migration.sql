/*
  Warnings:

  - You are about to drop the `round_view_videous` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "round_view_videous" DROP CONSTRAINT "round_view_videous_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "round_view_video_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "round_view_video_video" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "round_view_videous";
