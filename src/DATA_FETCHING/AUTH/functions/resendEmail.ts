import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";


export async function resendEmail(email:string){

    const res = await fetch(`${BASE_URL}/auth/resendVerificationEmail?email=${email}`)
    const data:requestResponse = await res.json()

    if(data.status == 200){
        toast.success(data.message)
    }else{
        toast.error(data.message)
    }

    return data
}