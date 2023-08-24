-- AlterTable
ALTER TABLE "complectation_salons" ADD COLUMN     "folding_rear_seat" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "front_center_armrest" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "luke" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "panoramic_view" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "power_seats" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seat_height_adjustment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seat_position_memory" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "seat_ventilation" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sports_front_seats" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "steering_wheel_heating" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "third_row_of_seats" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tinted_glass" BOOLEAN NOT NULL DEFAULT false;
