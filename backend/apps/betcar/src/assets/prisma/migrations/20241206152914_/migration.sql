-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "running_engine_mechanical_air_conditioner" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "running_engine_mechanical_air_conditioner_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "running_engine_mechanical_engine_operation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "running_engine_mechanical_engine_operation_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "running_engine_mechanical_gear_shifting" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "running_engine_mechanical_gear_shifting_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "running_engine_mechanical_interior_heater" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "running_engine_mechanical_interior_heater_comment" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "running_engine_mechanical_power_steering" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "running_engine_mechanical_power_steering_comment" TEXT NOT NULL DEFAULT '';
