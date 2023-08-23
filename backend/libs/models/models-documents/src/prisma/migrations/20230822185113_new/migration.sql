-- CreateTable
CREATE TABLE "cars_models" (
    "car_id" SERIAL NOT NULL,
    "car_model" TEXT NOT NULL DEFAULT '',
    "executor_id" TEXT,

    CONSTRAINT "cars_models_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "sellers_details" (
    "seller_details_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "car_cost" TEXT NOT NULL DEFAULT '',
    "role" BOOLEAN NOT NULL DEFAULT true,
    "comment" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publish_at" TIMESTAMP(3) NOT NULL,
    "car_id" INTEGER,

    CONSTRAINT "sellers_details_pkey" PRIMARY KEY ("seller_details_id")
);
