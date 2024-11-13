/*
  Warnings:

  - You are about to drop the `interior_photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "interior_photos" DROP CONSTRAINT "interior_photos_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "interior_photo_add_photo" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "interior_photo_back_left_seats_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_back_right_seats_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_dashboard_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_driver_seat_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_front_seats_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_left_back_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_left_front_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_passenger_seat_photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_right_back_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_right_front_door" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interior_photo_steering_wheel_photo" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "interior_photos";
