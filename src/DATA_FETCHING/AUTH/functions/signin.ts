import toast from "react-hot-toast"
import { BASE_URL } from "../../utills/constants"
import { redirect } from "next/navigation"
import { sessionType } from "@/TYPES/AuthTypes/AuthTypes"
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse"


export interface signinData{
    username:String
    password:String
}



export async function signin( incomingData:signinData):Promise<sessionType | undefined> {


    try {
        const res = await fetch(`${BASE_URL}/auth/signin`,{

            credentials:'include',
            headers:{
                //"X-XSRF-TOKEN":csrf,
                "Content-Type": "application/json",
            },
            method:"POST",
            body:JSON.stringify(incomingData)
    
        })
    
        //returns 401 and error message incase of wrong password OR user data
        const data:sessionType | requestResponse  = await res.json()

        
        if("status"  in data) {
            //conflict
            if(data.status == 401) toast.error( data.message)
            return 
        }

        return data;
        

    } catch (error) {
        toast.error("error signing in, please try again later")
        console.log(error);
    }
    
}