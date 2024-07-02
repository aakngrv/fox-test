-- CreateTable
CREATE TABLE "add_elements_electrical" (
    "add_element_electrical_id" SERIAL NOT NULL,
    "runningEngineId" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "is_check" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "add_elements_electrical_pkey" PRIMARY KEY ("add_element_electrical_id")
);

-- CreateTable
CREATE TABLE "add_elements_mechanical" (
    "add_element_mechanical_id" SERIAL NOT NULL,
    "runningEngineId" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "is_check" BOOLEAN NOT NULL DEFAULT false,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "add_elements_mechanical_pkey" PRIMARY KEY ("add_element_mechanical_id")
);

-- AddForeignKey
ALTER TABLE "add_elements_electrical" ADD CONSTRAINT "add_elements_electrical_runningEngineId_fkey" FOREIGN KEY ("runningEngineId") REFERENCES "running_engines"("running_engine_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "add_elements_mechanical" ADD CONSTRAINT "add_elements_mechanical_runningEngineId_fkey" FOREIGN KEY ("runningEngineId") REFERENCES "running_engines"("running_engine_id") ON DELETE CASCADE ON UPDATE CASCADE;
