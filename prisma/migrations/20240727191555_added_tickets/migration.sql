-- CreateTable
CREATE TABLE "Ticket" (
    "TicketId" TEXT NOT NULL,
    "EventName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "EventDate" TIMESTAMP(3),
    "PurchaseDate" TIMESTAMP(3) NOT NULL,
    "PurchasePrice" INTEGER NOT NULL,
    "ViagogoLink" TEXT,
    "PricePerTicket" INTEGER NOT NULL,
    "Quantity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_TicketId_key" ON "Ticket"("TicketId");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
