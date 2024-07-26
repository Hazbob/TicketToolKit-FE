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

export default function DashCard({ cardTitle, cardContent }: Props){
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