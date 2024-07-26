import DashCard from "@/Components/ui/Dashboard/DashCard";

export default function Dashboard(){
    return (
        <div>
            <header className="flex gap-2 w-2/3">
                <DashCard cardTitle="Total Income"/>
                <DashCard cardTitle="Unsold Inventory"/>
                <DashCard cardTitle="Inventory Value"/>
            </header>

        </div>
    )
}