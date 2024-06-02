import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { patientUpcomingAppointments } from "@/TYPES/Patient/PatientTypes";


export async function getPatientUpcomingAppointments() {
    

    try {
        
        const res = await fetch(`${BASE_URL}/patient/appointments/ACCEPTED`,{
            credentials:"include"
            
        })

        const resData:patientUpcomingAppointments[] = await res.json()

       // console.log(resData);

        return resData;


    } catch (error) {
        console.log(error);
    }
}