-- CreateTable
CREATE TABLE "Actors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "levels" TEXT NOT NULL,
    "super" BOOLEAN
);

-- CreateTable
CREATE TABLE "Plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Actors_email_key" ON "Actors"("email");
