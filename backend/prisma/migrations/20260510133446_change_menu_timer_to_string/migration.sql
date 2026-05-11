-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "discount" REAL,
    "type" TEXT NOT NULL DEFAULT 'ALL',
    "timer" TEXT,
    "image" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "restaurant_id" TEXT NOT NULL,
    CONSTRAINT "Menu_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Menu" ("created_at", "desc", "discount", "id", "image", "is_active", "name", "price", "restaurant_id", "status", "timer", "type", "updated_at") SELECT "created_at", "desc", "discount", "id", "image", "is_active", "name", "price", "restaurant_id", "status", "timer", "type", "updated_at" FROM "Menu";
DROP TABLE "Menu";
ALTER TABLE "new_Menu" RENAME TO "Menu";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
