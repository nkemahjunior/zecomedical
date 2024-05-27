import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { labTechnicianType } from "@/TYPES/AuthTypes/AuthTypes";
import { cookies } from "next/headers";


export async function getLabTechnician(){


    const cookieStore = cookies();
    const session = cookieStore.get("SESSION");

    try {
        const res = await fetch(`${BASE_URL}/lab/department`,{

            next:{revalidate:600}, //cache for 10mins, the cache wont work in middlewares, only normal functions like Page
            credentials:'include',
            headers:{
                //"X-XSRF-TOKEN":csrf,
                "Cookie":`SESSION=${session?.value}`,
                //"Content-Type": "application/json", cors settings on backend server will not apply here coz this middleware does not run in the browser,but on the server
            },
            method:"GET",
    
        })

        
        
        const data:labTechnicianType = await res.json();
        //console.log(data);
        

        //console.log(data);
    
        return data
    
    } catch (error) {
        console.log(error);
    }
}