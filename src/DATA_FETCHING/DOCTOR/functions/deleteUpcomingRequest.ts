import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";


export async function deleteUpcomingRequest(id:number){

    try {
            
        const csrf = getCookie("XSRF-TOKEN")

        const res = await fetch(`${BASE_URL}/doctor/appointment/${id}`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN": `${csrf}`
            },
            method:"DELETE"
        })

        const resData:requestResponse = await res.json()

        return resData;


    } catch (error) {
        console.log(error);
    }
}