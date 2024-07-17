import { labDepartments } from "@/TYPES/AuthTypes/AuthTypes";
import { getLabTechnician } from "./getLabTechnician";
import { redirect } from "next/navigation";


export async function roleCheckLabBloodBank(){

    const user = await getLabTechnician()
   

            // not working in production, the getUser() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
        
    //if( user?.labDepartment?.id !== labDepartments.BLOODBANK ) redirect("/auth/signin")

    return user
}

export async function roleCheckParasitology(){

    const user = await getLabTechnician()

    // not working in production, the getUser() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
        
    //if( user?.labDepartment?.id !== labDepartments.PARASITOLOGY) redirect("/auth/signin")

    return user
}


export async function roleCheckLabMicroBiology(){

    const user = await getLabTechnician()

    

    // not working in production, the getUser() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
        
    //if( user?.labDepartment?.id !== labDepartments.MICROBIOLOGY ) redirect("/auth/signin")

    return user
}


export async function roleCheckLabImmunology(){

    const user = await getLabTechnician()


    // not working in production, the getUser() function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now
        
    //if( user?.labDepartment?.id !== labDepartments.IMMUNOLOGY ) redirect("/auth/signin")

    return user
}