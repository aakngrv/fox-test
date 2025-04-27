-- AlterTable
ALTER TABLE "turnkey_selections" ADD COLUMN     "is_premium" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "turnkey_selections_manually" ADD COLUMN     "is_premium" BOOLEAN NOT NULL DEFAULT false;
