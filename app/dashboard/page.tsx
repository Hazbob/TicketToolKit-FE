import { auth } from "@/auth";
import DashCard from "@/Components/ui/Dashboard/DashCard";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await auth()
    if(!session){
        redirect("/")
    }
    return (
        <div>
            <header className="flex gap-2 w-2/3">
                <DashCard cardTitle="Total Income" cardContent=""/>
                <DashCard cardTitle="Unsold Inventory" cardContent=""/>
                <DashCard cardTitle="Inventory Value" cardContent=""/>
            </header>

        </div>
    )
}