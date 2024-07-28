import { auth } from "@/auth";
import { SignIn } from "../auth/SignIn-Button";
import { SignOut } from "../auth/SignOut-Button";
import Link from "next/link";

export default async function NavigationHeader(){
    "use server";
    const session = await auth()
    return (
        <nav className="w-full flex justify-between items-center">
            <Link href={session ? "/dashboard" : "/"}>Inventree</Link>
            {session && <Link href="/inventory/create">Add Ticket</Link>}
            <div className="flex">
               {session ? <SignOut/> : <SignIn/>}
            </div>
        </nav>
    )
}