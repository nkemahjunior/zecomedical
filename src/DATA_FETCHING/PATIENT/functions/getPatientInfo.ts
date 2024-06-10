import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { patientInfoType } from "@/TYPES/Doctor/doctorTypes";


export async function getPatientInfo(){

    try {
        const res = await fetch(`${BASE_URL}/patient/info`,{
            credentials:"include"
        })

        const resData:patientInfoType = await res.json()

        
        return resData;

        
    } catch (error) {
        console.log(error);
    }
}