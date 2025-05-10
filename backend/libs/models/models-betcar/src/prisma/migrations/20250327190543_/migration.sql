-- AlterTable
ALTER TABLE "turnkey_selections_manually" ALTER COLUMN "auto_model" SET NOT NULL,
ALTER COLUMN "auto_model" SET DEFAULT '',
ALTER COLUMN "auto_model" SET DATA TYPE TEXT;
