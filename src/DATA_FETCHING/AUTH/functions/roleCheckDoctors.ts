import { roles } from "@/TYPES/AuthTypes/AuthTypes";
import { getUser } from "./getUser";
import { redirect } from "next/navigation";


export async function roleCheckDoctors(){

    const user = await getUser();

    if(!user || user.role?.id !== roles.DOCTOR) redirect("/auth/signin")
}