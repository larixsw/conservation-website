-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_About" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" JSONB NOT NULL
);
INSERT INTO "new_About" ("content", "id") SELECT "content", "id" FROM "About";
DROP TABLE "About";
ALTER TABLE "new_About" RENAME TO "About";
CREATE TABLE "new_Burial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image_id" TEXT,
    "image_extension" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "content" JSONB NOT NULL
);
INSERT INTO "new_Burial" ("content", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width") SELECT "content", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width" FROM "Burial";
DROP TABLE "Burial";
ALTER TABLE "new_Burial" RENAME TO "Burial";
CREATE TABLE "new_Disclaimer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" JSONB NOT NULL
);
INSERT INTO "new_Disclaimer" ("content", "id") SELECT "content", "id" FROM "Disclaimer";
DROP TABLE "Disclaimer";
ALTER TABLE "new_Disclaimer" RENAME TO "Disclaimer";
CREATE TABLE "new_EcosystemPage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" JSONB NOT NULL
);
INSERT INTO "new_EcosystemPage" ("content", "id") SELECT "content", "id" FROM "EcosystemPage";
DROP TABLE "EcosystemPage";
ALTER TABLE "new_EcosystemPage" RENAME TO "EcosystemPage";
CREATE TABLE "new_Feedback" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image_id" TEXT,
    "image_extension" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "content" JSONB NOT NULL
);
INSERT INTO "new_Feedback" ("content", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width") SELECT "content", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width" FROM "Feedback";
DROP TABLE "Feedback";
ALTER TABLE "new_Feedback" RENAME TO "Feedback";
CREATE TABLE "new_Organism" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "scientificName" TEXT NOT NULL DEFAULT '',
    "urlId" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL,
    "conservationStatus" TEXT NOT NULL DEFAULT 'Unclassified',
    "image_id" TEXT,
    "image_extension" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "description" JSONB NOT NULL
);
INSERT INTO "new_Organism" ("conservationStatus", "description", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "name", "scientificName", "type", "urlId") SELECT "conservationStatus", "description", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "name", "scientificName", "type", "urlId" FROM "Organism";
DROP TABLE "Organism";
ALTER TABLE "new_Organism" RENAME TO "Organism";
CREATE TABLE "new_Privacy" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" JSONB NOT NULL
);
INSERT INTO "new_Privacy" ("content", "id") SELECT "content", "id" FROM "Privacy";
DROP TABLE "Privacy";
ALTER TABLE "new_Privacy" RENAME TO "Privacy";
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "urlId" TEXT NOT NULL DEFAULT '',
    "image_id" TEXT,
    "image_extension" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "isService" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT NOT NULL DEFAULT '',
    "description" JSONB NOT NULL
);
INSERT INTO "new_Product" ("description", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "isService", "source", "title", "urlId") SELECT "description", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "isService", "source", "title", "urlId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_ProductsServicesPage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" JSONB NOT NULL
);
INSERT INTO "new_ProductsServicesPage" ("content", "id") SELECT "content", "id" FROM "ProductsServicesPage";
DROP TABLE "ProductsServicesPage";
ALTER TABLE "new_ProductsServicesPage" RENAME TO "ProductsServicesPage";
CREATE TABLE "new_Trail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "image_id" TEXT,
    "image_extension" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "length" REAL NOT NULL,
    "elevationGain" REAL NOT NULL,
    "difficulty" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "trailCoords" TEXT NOT NULL DEFAULT '',
    "colour" TEXT NOT NULL DEFAULT '#3b82f6'
);
INSERT INTO "new_Trail" ("colour", "description", "difficulty", "elevationGain", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "length", "name", "trailCoords") SELECT "colour", "description", "difficulty", "elevationGain", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "length", "name", "trailCoords" FROM "Trail";
DROP TABLE "Trail";
ALTER TABLE "new_Trail" RENAME TO "Trail";
CREATE TABLE "new_TrailPage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" JSONB NOT NULL
);
INSERT INTO "new_TrailPage" ("content", "id") SELECT "content", "id" FROM "TrailPage";
DROP TABLE "TrailPage";
ALTER TABLE "new_TrailPage" RENAME TO "TrailPage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

