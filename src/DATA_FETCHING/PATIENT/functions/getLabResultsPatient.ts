import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { labResultsPatient } from "@/TYPES/Patient/PatientTypes";



export async function getLabResultsPatient(){

    try {

        let res;

     
            res = await fetch(`${BASE_URL}/lab/bloodBank/results/patient`,{
                credentials:"include"
            })
        


    
        const data:labResultsPatient[] = await res.json()

        console.log(data);
    
    
        return data;

    } catch (error) {
        console.log(error);
    }
}