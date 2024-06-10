
import { redirect } from "next/navigation"
import { getUser } from "./getUser"
import { roles } from "@/TYPES/AuthTypes/AuthTypes"



export async function roleCheckPatient(){
    const user = await getUser()
   // console.log("PATIERNTTTTTTTTTTTTTTTTTTT");
    //console.log(user);

    

    
    if(!user || user?.role?.id !== roles.PATIENT) {
        redirect("/auth/signin")
    }
}