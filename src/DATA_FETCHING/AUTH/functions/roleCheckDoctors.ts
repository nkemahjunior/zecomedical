import { roles } from "@/TYPES/AuthTypes/AuthTypes";
import { getUser } from "./getUser";
import { redirect } from "next/navigation";


export async function roleCheckDoctors(){

    const user = await getUser();

            // not working in production, the getUser() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
        

    //if(!user || user.role?.id !== roles.DOCTOR) redirect("/auth/signin")
}