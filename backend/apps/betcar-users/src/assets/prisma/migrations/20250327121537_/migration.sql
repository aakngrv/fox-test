/*
  Warnings:

  - The `auto_model` column on the `turnkey_selections` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `auto_model` column on the `turnkey_selections_manually` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "turnkey_selections" DROP COLUMN "auto_model",
ADD COLUMN     "auto_model" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "turnkey_selections_manually" DROP COLUMN "auto_model",
ADD COLUMN     "auto_model" TEXT[] DEFAULT ARRAY['']::TEXT[];
