
import { redirect } from "next/navigation"
import { getUser } from "./getUser"
import { roles } from "@/TYPES/AuthTypes/AuthTypes"



export async function roleCheckPatient(){
    const user = await getUser()
 //    console.log("PATIERNTTTTTTTTTTTTTTTTTTT");
 //     console.log(user);

    

    
    if(!user || user?.role?.id !== roles.PATIENT) {
        // not working in production, the getUser() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
        
        //redirect("/auth/signin")
    }
}