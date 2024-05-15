-- AlterTable
ALTER TABLE "exterior_photos" ADD COLUMN     "add_photo" TEXT[] DEFAULT ARRAY['']::TEXT[];

-- AlterTable
ALTER TABLE "interior_photos" ADD COLUMN     "add_photo" TEXT[] DEFAULT ARRAY['']::TEXT[];
