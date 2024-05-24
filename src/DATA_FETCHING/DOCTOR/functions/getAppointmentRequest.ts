import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { appointmentReqPaginated } from "@/TYPES/Doctor/doctorTypes";


export async function getAppointmentRequests( page:number){
    try {
        
        const res = await fetch(`${BASE_URL}/doctor/appointments?page=${page}&size=10`,{

            credentials:"include"
        })

        const data:appointmentReqPaginated = await res.json()

        return data;

    } catch (error) {
        console.log(error);
    }
}


export async function getAcceptedAppointmentRequest(page:number){
    try {
        
        const res = await fetch(`${BASE_URL}/doctor/appointments/accepted?page=${page}&size=10`,{

            credentials:"include"
        })

        const data:appointmentReqPaginated = await res.json()

        return data;

    } catch (error) {
        console.log(error);
    }
}