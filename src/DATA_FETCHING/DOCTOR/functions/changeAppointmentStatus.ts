import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { changeAppointmentType } from "@/TYPES/Doctor/doctorTypes";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";



//use an object for the arguements because the mutationFn of react query does not accept morethan 1 parameter
export async function changeAppointmentStatus( data:changeAppointmentType){

    try {
        
        const csrf = getCookie("XSRF-TOKEN")

        //status = DECLINED | ACCEPT  ${id}/${status}
        const res = await fetch(`${BASE_URL}/doctor/appointment/status/${data.appointmentId}/${data.status}`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN": `${csrf}`
            },
            method:"PUT"
        })
    
        const resData:requestResponse = await res.json()
    
        if(resData.status == 200) toast.success(resData.message)
        else toast(resData.message)

        return resData;

    } catch (error) {
        console.log(error);
    }
}

