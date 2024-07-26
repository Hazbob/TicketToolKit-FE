import { SignIn } from "@/Components/auth/SignIn-Button";
import { SignOut } from "@/Components/auth/SignOut-Button";

export default function LoginPage(){
    return (
        <div className="flex justify-between">
            <SignIn/>
            <SignOut/>
        </div>
    )
}