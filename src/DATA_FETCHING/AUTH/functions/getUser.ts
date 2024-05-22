import { NextRequest } from "next/server";
import { BASE_URL } from "../../utills/constants";
import { cookies } from "next/headers";
import { sessionType } from "@/TYPES/AuthTypes/AuthTypes";


export async function getUser():Promise<sessionType | undefined>{

    const cookieStore = cookies();
    const session = cookieStore.get("SESSION");

    try {
        const res = await fetch(`${BASE_URL}/auth/session`,{

            next:{revalidate:600}, //cache for 10mins, the cache wont work in middlewares, only normal functions like Page
            credentials:'include',
            headers:{
                //"X-XSRF-TOKEN":csrf,
                "Cookie":`SESSION=${session?.value}`,
                //"Content-Type": "application/json", cors settings on backend server will not apply here coz this middleware does not run in the browser,but on the server
            },
            method:"GET",
    
        })

        
        
        const data:sessionType = await res.json();
        //console.log(data);
        

        //console.log(data);
    
        return data
    
    } catch (error) {
        console.log(error);
    }
}