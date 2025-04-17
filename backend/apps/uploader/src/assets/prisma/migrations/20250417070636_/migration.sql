-- CreateTable
CREATE TABLE "customers_reviews" (
    "customer_review_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL DEFAULT '',
    "user_name" TEXT NOT NULL DEFAULT '',
    "user_review" TEXT NOT NULL DEFAULT '',
    "our_answer" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_reviews_pkey" PRIMARY KEY ("customer_review_id")
);
