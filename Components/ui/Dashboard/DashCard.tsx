import { auth } from "@/auth";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  
} from "../card";  

interface Props {
    cardTitle: string;
    cardContent: string;
}

export default async function DashCard({ cardTitle, cardContent }: Props){
    const session = await auth()
    console.log(session)
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{cardContent}</p>
            </CardContent>
        </Card>

    )
}