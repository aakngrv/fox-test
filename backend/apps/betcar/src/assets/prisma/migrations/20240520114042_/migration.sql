-- CreateTable
CREATE TABLE "files" (
    "file_id" SERIAL NOT NULL,
    "original_filename" TEXT NOT NULL DEFAULT '',
    "hash_name" TEXT NOT NULL DEFAULT '',
    "mimetype" TEXT NOT NULL DEFAULT '',
    "path" TEXT NOT NULL DEFAULT '',
    "size" INTEGER NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("file_id")
);
