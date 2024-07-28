import { columns } from "@/Components/ui/Inventory/columns"
import { DataTable } from "@/Components/ui/Inventory/data-table"
import { fetchAllTickets } from "@/ServerActions/tickets"
import { Ticket } from "@/Types/api"



export default async function Inventory(){

    const tickets: Ticket[] | undefined = await fetchAllTickets()

    console.log(tickets)
    return (

        <div>
            {tickets && <DataTable columns={columns} data={tickets || []} />}
        </div>
    )
}