/*
  Warnings:

  - The `photo` column on the `sts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "sts" DROP COLUMN "photo",
ADD COLUMN     "photo" TEXT[] DEFAULT ARRAY['']::TEXT[];
