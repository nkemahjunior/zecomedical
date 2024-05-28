import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { sendToLabResponse, sendToLabType } from "@/TYPES/Doctor/doctorTypes";
import toast from "react-hot-toast";


export async function sendToLab(data:sendToLabType){

    const csrf = getCookie("XSRF-TOKEN")

    const res = await fetch(`${BASE_URL}/consultation/sendToLab`,{
        credentials:"include",
        headers:{
            "X-XSRF-TOKEN":`${csrf}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        method:"POST"
    })

    const resData:sendToLabResponse = await res.json()

    if(resData.status == 201) toast.success(resData.message)
    else toast.error(resData.message)

    return resData
}