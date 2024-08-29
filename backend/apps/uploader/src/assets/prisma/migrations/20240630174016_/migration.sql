-- AlterTable
ALTER TABLE "dashboards" ADD COLUMN     "select_error" TEXT[] DEFAULT ARRAY['']::TEXT[];
