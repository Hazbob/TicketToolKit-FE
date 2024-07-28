export interface TicketDTO {
    eventName: string
    eventDate: Date
    purchaseDate:  Date
    purchasePrice: number
    viagogoLink?: string
    quantity: number
    isSold: boolean
}


export type Ticket = {
    TicketId: string;
    EventName: string;
    EventDate: Date | null;
    PurchaseDate: Date;
    PurchasePrice: number;
    Quantity: number;
    ViagogoLink: string | null;
    isSold: boolean;
    PricePerTicket: number;
}
