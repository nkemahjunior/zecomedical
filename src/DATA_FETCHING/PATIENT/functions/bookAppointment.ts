import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { BookAppointmentType } from "@/TYPES/Patient/PatientTypes";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";


export async function bookAppointment(data:BookAppointmentType) {

    try {
        

        const csrf = getCookie("XSRF-TOKEN")

        const res = await fetch(`${BASE_URL}/patient/book_appointment`,{
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
                "X-XSRF-TOKEN": `${csrf}`
            },
            body:JSON.stringify(data),
            method:"POST"
        })

        const resData: requestResponse = await res.json()

        if(resData.status == 201) toast.success(resData.message) 
        else toast.error(resData.message)

        return resData;



    } catch (error) {
        console.log(error);
    }
    
}