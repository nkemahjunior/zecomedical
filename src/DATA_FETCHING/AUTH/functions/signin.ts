import toast from "react-hot-toast"
import { BASE_URL } from "../../utills/constants"


export interface signinData{
    username:String
    password:String
}

export async function signin( incomingData:signinData){

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
    
        const data = await res.json()
    
        //conflict
        if(data.status == 401) toast.error(data.message)

        console.log(data);

    } catch (error) {
        console.log(error);
    }
    
}