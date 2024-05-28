import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { startConsultationResponseType } from "@/TYPES/Doctor/doctorTypes";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";


export async function startConsultation(patientID:number){
    try {
        const csrf = getCookie("XSRF-TOKEN")
        

        const res = await fetch(`${BASE_URL}/consultation/start/${patientID}`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`
            },
            method:"POST"
        })

        const resData:startConsultationResponseType = await res.json()

        if(resData.status == 201) toast.success(resData.message)
        else  toast.error(resData.message)
        

        return resData;

    } catch (error) {
        console.log(error);
    }
}