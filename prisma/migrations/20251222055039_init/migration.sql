-- CreateTable
CREATE TABLE "Inquiry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "country" TEXT,
    "message" TEXT NOT NULL,
    "vehicle" TEXT
);

-- CreateTable
CREATE TABLE "VehicleCatalog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "VehicleCatalog_modelName_key" ON "VehicleCatalog"("modelName");
