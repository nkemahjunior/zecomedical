import { NextRequest } from "next/server";
import { BASE_URL } from "../../utills/constants";
import { cookies } from "next/headers";
import { sessionType } from "@/TYPES/AuthTypes/AuthTypes";


export async function getUser():Promise<sessionType | undefined>{

    const cookieStore = cookies();
    const session = cookieStore.get("SESSION");

    /*not working in production, server function can not read the cookie where the session id is, except i host the frontend and backend on thesame domain and that is not an option for now*/

    try {
        const res = await fetch(`${BASE_URL}/auth/session`,{

            //next:{revalidate:600}, //cache for 10mins, the cache wont work in middlewares, only normal functions like Page
            cache: 'no-store',
            credentials:'include',
            headers:{
                //"X-XSRF-TOKEN":csrf,
                "Cookie":`SESSION=${session?.value}`,
                //"Content-Type": "application/json", cors settings on backend server will not apply here coz this middleware does not run in the browser,but on the server
            },
            method:"GET",
    
        })

        const data:sessionType = await res.json();

        return data
    
    } catch (error) {
        console.log(error);
    }
}