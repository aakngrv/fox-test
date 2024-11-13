/*
  Warnings:

  - You are about to drop the `complectation_salons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "complectation_salons" DROP CONSTRAINT "complectation_salons_report_id_fkey";

-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "complectation_salon_electrically_adjustable_seats" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_salon_folding_rear_seat" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_front_center_armrest" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_heated_seats" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_salon_interior_material" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_salon_leather_trimmed_gearshift_lever" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_luke" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_panoramic_view" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_seat_covers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_seat_height_adjustment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_salon_seat_massage" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_salon_seat_position_memory" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "complectation_salon_seat_ventilation" TEXT[] DEFAULT ARRAY['']::TEXT[],
ADD COLUMN     "complectation_salon_sports_front_seats" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_steering_wheel_heating" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_steering_wheel_leather_trim" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_third_row_of_seats" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "complectation_salon_tinted_glass" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "complectation_salons";
