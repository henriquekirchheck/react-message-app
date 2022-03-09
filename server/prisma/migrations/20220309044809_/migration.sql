-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "_GroupToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Group" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Message_id_key" ON "Message"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Group_id_key" ON "Group"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToUser_AB_unique" ON "_GroupToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToUser_B_index" ON "_GroupToUser"("B");
