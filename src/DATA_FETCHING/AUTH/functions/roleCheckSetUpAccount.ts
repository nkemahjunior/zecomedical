import { roles } from "@/TYPES/AuthTypes/AuthTypes"
import { getUser } from "./getUser"
import { redirect } from "next/navigation"


export async function roleCheckSetUpAccount(){
    const user = await getUser()

    //page is only for Verified users who dont yet have a role of either: patient, doctor or labTech
    if( !user || user?.role?.id !== roles.VERIFIED) redirect("/auth/signin")
}