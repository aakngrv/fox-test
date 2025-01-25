-- AlterTable
ALTER TABLE "reports" ADD COLUMN     "is_prime" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "user_bids" (
    "bid_id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_bids_pkey" PRIMARY KEY ("bid_id")
);

-- CreateTable
CREATE TABLE "organization_bids" (
    "bid_id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "organization_name" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organization_bids_pkey" PRIMARY KEY ("bid_id")
);

-- CreateTable
CREATE TABLE "user_profiles" (
    "user_profile_id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "age" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "driver_license" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "experience_with_transport" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "work_experience" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("user_profile_id")
);
