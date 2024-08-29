/*
  Warnings:

  - The `history_file` column on the `experts_opinions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "experts_opinions" DROP COLUMN "history_file",
ADD COLUMN     "history_file" TEXT[] DEFAULT ARRAY['']::TEXT[];
