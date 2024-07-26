import { auth } from "@/auth";
import { SignIn } from "../auth/SignIn-Button";
import { SignOut } from "../auth/SignOut-Button";

export default async function NavigationHeader(){
    "use server";
    const session = await auth()
    return (
        <nav className="w-full flex justify-between">
            <h1>Inventree</h1>
            <div className="flex">
               {session ? <SignOut/> : <SignIn/>}
            </div>
        </nav>
    )
}