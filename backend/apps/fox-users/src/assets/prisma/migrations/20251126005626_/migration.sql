/*
  Warnings:

  - You are about to drop the column `author` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `executor` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "author" SET DEFAULT '',
ALTER COLUMN "author" SET DATA TYPE TEXT,
ALTER COLUMN "executor" SET DEFAULT '',
ALTER COLUMN "executor" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "author",
DROP COLUMN "executor";
