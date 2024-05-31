import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { pauseConsultationResponseType, pauseConsultationType, resumeConsultationType } from "@/TYPES/Doctor/doctorTypes";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";


export async function pauseConsultation(data:pauseConsultationType) {
    
    try {

        const csrf = getCookie("XSRF-TOKEN")
        
        const res = await fetch(`${BASE_URL}/consultation/pause`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            method: "PUT"

        })

        const resData:pauseConsultationResponseType = await res.json()

        // console.log("--------------------");
        // console.log(resData);

        if(resData.status == 200) toast.success(resData.message)
        else toast.error(resData.message)

        return resData;

    } catch (error) {
        console.log(error);
    }
}


export async function getPausedConsultations(){
    try {
        
        const res = await fetch(`${BASE_URL}/consultation/resume`,{
            credentials:"include"
        })

        const resData:pauseConsultationResponseType [] = await res.json()

        return resData;
        
    } catch (error) {
        console.log(error);
    }
}