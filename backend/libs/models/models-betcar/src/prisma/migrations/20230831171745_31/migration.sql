/*
  Warnings:

  - You are about to drop the `extetior_photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "extetior_photos";

-- CreateTable
CREATE TABLE "exterior_photos" (
    "exterior_photo_id" SERIAL NOT NULL,
    "right_front_photo" TEXT NOT NULL DEFAULT '',
    "right_front_video" TEXT NOT NULL DEFAULT '',
    "front_photo" TEXT NOT NULL DEFAULT '',
    "front_video" TEXT NOT NULL DEFAULT '',
    "left_front_photo" TEXT NOT NULL DEFAULT '',
    "left_front_video" TEXT NOT NULL DEFAULT '',
    "right_back_photo" TEXT NOT NULL DEFAULT '',
    "right_back_video" TEXT NOT NULL DEFAULT '',
    "back_photo" TEXT NOT NULL DEFAULT '',
    "back_video" TEXT NOT NULL DEFAULT '',
    "left_back_photo" TEXT NOT NULL DEFAULT '',
    "left_back_video" TEXT NOT NULL DEFAULT '',
    "left_photo" TEXT NOT NULL DEFAULT '',
    "left_video" TEXT NOT NULL DEFAULT '',
    "right_photo" TEXT NOT NULL DEFAULT '',
    "right_video" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "exterior_photos_pkey" PRIMARY KEY ("exterior_photo_id")
);
