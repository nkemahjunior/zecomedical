import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { patientInfoType } from "@/TYPES/Doctor/doctorTypes";
import { useQuery } from "@tanstack/react-query";


export async function getPatientInfo(id:number){

    try {
        
        const res = await fetch(`${BASE_URL}/consultation/patientInfo/${id}`,{
            credentials: "include"
        })

        const resData:patientInfoType = await res.json()


        return resData;
        
    } catch (error) {
        console.log(error);
    }
}