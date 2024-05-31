import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { finishConsultationType } from "@/TYPES/Doctor/doctorTypes";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";


export async function finishConsultation(data:finishConsultationType){
    
    try {


        const csrf = getCookie("XSRF-TOKEN")
        
        const res = await fetch(`${BASE_URL}/consultation/finish`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            method:"PUT"
        })


        const resData:requestResponse = await res.json()
        

        //i will handle the success message in the finish consultation button
        if(resData.status !== 200) toast.error(resData.message)

        return resData;

    } catch (error) {
        console.log(error);
    }
}