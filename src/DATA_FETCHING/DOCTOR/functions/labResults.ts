import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { checkLabResultsType, savePendingLabReqType } from "@/TYPES/Doctor/doctorTypes";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";


export async function checkLabResults(){

    try {
        const res = await fetch(`${BASE_URL}/consultation/waitingResult`,{
            credentials:"include",
        })

        const data:checkLabResultsType[] = await res.json()

        return data;

    } catch (error) {
        console.log(error);
    }
}



export async function savePendingLabRequest(data:savePendingLabReqType){

    try {

        const csrf = getCookie("XSRF-TOKEN")

        const res = await fetch(`${BASE_URL}/consultation/waitingLabResult/save`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            method:"POST"
        })

        const resData:checkLabResultsType = await res.json()

        return resData;

    } catch (error) {
        console.log(error);
    }
}


export async function updatePendingLabRequestStatus(consultationID:string){
    try {

        ///waitingLabResult/complete/{consultationID}
        const csrf = getCookie("XSRF-TOKEN")
        const res = await fetch(`${BASE_URL}/consultation/waitingLabResult/complete/${consultationID}`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            method:"PUT"
        })

        const resData:requestResponse = await res.json()

        //i will handle success in the component using this fetch
        if(resData.status !== 200) toast.error(resData.message)
        

        return resData;

    } catch (error) {
        console.log(error);
    }
}