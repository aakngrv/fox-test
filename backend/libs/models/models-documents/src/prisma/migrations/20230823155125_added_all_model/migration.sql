-- AlterTable
ALTER TABLE "sellers_details" ALTER COLUMN "role" SET DEFAULT false;

-- CreateTable
CREATE TABLE "vehicles_datas" (
    "vehicke_data_id" SERIAL NOT NULL,
    "vin" TEXT NOT NULL DEFAULT '',
    "frame_number" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',
    "have_a_service_book" BOOLEAN NOT NULL DEFAULT false,
    "additionalDocuments" TEXT NOT NULL DEFAULT '',
    "sts" TEXT NOT NULL DEFAULT '',
    "tcp" TEXT NOT NULL DEFAULT '',
    "state_number" TEXT NOT NULL DEFAULT '',
    "car_type" TEXT NOT NULL DEFAULT '',
    "car_brand" TEXT NOT NULL DEFAULT '',
    "car_model" TEXT NOT NULL DEFAULT '',
    "manufacture_year" TEXT NOT NULL DEFAULT '',
    "body_type" TEXT NOT NULL DEFAULT '',
    "generation" TEXT NOT NULL DEFAULT '',
    "engines_type" TEXT NOT NULL DEFAULT '',
    "engines_modification" TEXT NOT NULL DEFAULT '',
    "engines_number" TEXT NOT NULL DEFAULT '',
    "drive_unit" TEXT NOT NULL DEFAULT '',
    "gearbox_type" TEXT NOT NULL DEFAULT '',
    "modification" TEXT NOT NULL DEFAULT '',
    "engine_capacity" TEXT NOT NULL DEFAULT '',
    "power" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '',
    "metallic" BOOLEAN NOT NULL DEFAULT false,
    "mileage" TEXT NOT NULL DEFAULT '',
    "not_installed" BOOLEAN NOT NULL DEFAULT false,
    "new_car" BOOLEAN NOT NULL DEFAULT false,
    "emergency" BOOLEAN NOT NULL DEFAULT false,
    "not_on_track" BOOLEAN NOT NULL DEFAULT false,
    "total_comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "vehicles_datas_pkey" PRIMARY KEY ("vehicke_data_id")
);

-- CreateTable
CREATE TABLE "additional_documents" (
    "additional_documents_id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "additional_documents_pkey" PRIMARY KEY ("additional_documents_id")
);

-- CreateTable
CREATE TABLE "tcp" (
    "tcp_id" SERIAL NOT NULL,
    "availability_tcp" TEXT NOT NULL DEFAULT '',
    "chassis" TEXT NOT NULL DEFAULT '',
    "series" TEXT NOT NULL DEFAULT '',
    "number" TEXT NOT NULL DEFAULT '',
    "date_of_issue" TEXT NOT NULL DEFAULT '',
    "number_of_owners" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "tcp_pkey" PRIMARY KEY ("tcp_id")
);

-- CreateTable
CREATE TABLE "sts" (
    "sts_id" SERIAL NOT NULL,
    "absent" BOOLEAN NOT NULL DEFAULT false,
    "series" TEXT NOT NULL DEFAULT '',
    "number" TEXT NOT NULL DEFAULT '',
    "date_of_issue" TEXT NOT NULL DEFAULT '',
    "issued_by" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "sts_pkey" PRIMARY KEY ("sts_id")
);

-- CreateTable
CREATE TABLE "locations" (
    "location_id" SERIAL NOT NULL,
    "country" TEXT NOT NULL DEFAULT '',
    "region" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "locations_pkey" PRIMARY KEY ("location_id")
);
