-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Organism" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "scientificName" TEXT NOT NULL DEFAULT '',
    "urlId" TEXT NOT NULL DEFAULT '',
    "type" TEXT NOT NULL,
    "conservationStatus" TEXT NOT NULL DEFAULT 'NC',
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
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;


-- Existing rows used the old default, which is not a valid option
UPDATE "Organism" SET "conservationStatus" = 'NC' WHERE "conservationStatus" = 'Unclassified';
