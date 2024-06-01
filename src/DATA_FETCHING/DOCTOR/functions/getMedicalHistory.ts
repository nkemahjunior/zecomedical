import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { medicalHistoryResponseType } from "@/TYPES/PatientAndDoctor/patientAndDoctorTypes";


export async function getMedicalHistory(id:number){

    try {
        const res = await fetch(`${BASE_URL}/medicalHistory/${id}`,{
            credentials:"include"
        })

        const resData:medicalHistoryResponseType[] = await res.json()

        return resData;
        
    } catch (error) {
        console.log(error);
    }
}