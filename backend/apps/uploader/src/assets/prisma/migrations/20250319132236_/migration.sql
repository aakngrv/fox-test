-- CreateTable
CREATE TABLE "experts_on_day" (
    "expert_on_day_id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "provision_date" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "experts_on_day_pkey" PRIMARY KEY ("expert_on_day_id")
);
