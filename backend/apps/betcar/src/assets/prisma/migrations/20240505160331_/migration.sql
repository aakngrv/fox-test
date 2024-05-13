-- CreateTable
CREATE TABLE "refresh_tokens" (
    "refresh_token_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_in" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("refresh_token_id")
);
