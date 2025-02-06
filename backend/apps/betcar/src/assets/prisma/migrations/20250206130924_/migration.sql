-- AlterTable
ALTER TABLE "reports" ALTER COLUMN "seller_details_link_to_ad" SET NOT NULL,
ALTER COLUMN "seller_details_link_to_ad" SET DEFAULT '',
ALTER COLUMN "seller_details_link_to_ad" SET DATA TYPE TEXT;
