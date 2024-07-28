"use server"

import { auth, prisma } from "@/auth";
import { TicketDTO } from "@/Types/api";

export async function createTicket(ticketBody: TicketDTO){
    const session = await auth()
    const user = session?.user?.id
    const {
        eventDate,
        eventName,
        purchaseDate,
        purchasePrice,
        quantity,
        viagogoLink,
        isSold
    } = ticketBody
    try{
        if(user){
            await prisma.ticket.create({
                data: {
                    EventName: eventName,
                    EventDate: eventDate,
                    PurchasePrice: purchasePrice,
                    PurchaseDate: purchaseDate,
                    Quantity: quantity,
                    ViagogoLink: viagogoLink,
                    PricePerTicket: (purchasePrice / quantity),
                    userId: user,
                    isSold: isSold 
                }
            });
        }else{
            return;
        }
    }catch(e){
        console.log(e)
    }
       
}


export async function fetchAllTickets(){
    const session = await auth()
    const id = session?.user?.id
    try{
        if(id){
            const tickets = await prisma.ticket.findMany({
                where: {
                    userId: id
                }
            })
           return tickets
        }
        return []
    }catch(e){
        console.log(e)
    }
}