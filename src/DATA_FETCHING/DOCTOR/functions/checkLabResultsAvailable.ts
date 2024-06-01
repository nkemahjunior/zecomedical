import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { availableLabTestResults, checkLabResultsType } from "@/TYPES/Doctor/doctorTypes";
import { useContext } from "react";


export async function checkLabResultsAvailable(pendingLabResults:checkLabResultsType[] | []){
  


   let pendingResult:availableLabTestResults[] = [] 



    /* bb = bloodBank, im=immunology, mb = microbiology, ps = parasitology */
    for( const el of pendingLabResults){
       
        if(el.labName == "bb"){
            
            const res = await fetch(`${BASE_URL}/consultation/labBloodBank/results/${el.consultationID}`,{
                credentials:"include"
            })

            const resData:availableLabTestResults[] = await res.json()
            pendingResult.push(...resData)


        }


        if(el.labName == "im"){
            
            const res = await fetch(`${BASE_URL}/consultation/labImmunology/results/${el.consultationID}`,{
                credentials:"include"
            })

            const resData = await res.json()
            pendingResult.push(...resData)

        }


        if(el.labName=="mb"){
            
            const res = await fetch(`${BASE_URL}/consultation/labMicrobiology/results/${el.consultationID}`,{
                credentials:"include"
            })

            const resData = await res.json()
            pendingResult.push(...resData)
        }


        if(el.labName == "ps"){
           

            const res = await fetch(`${BASE_URL}/consultation/labParasitology/results/${el.consultationID}`,{
                credentials:"include"
            })

            const resData = await res.json()
            pendingResult.push(...resData)

        }

    }

    return pendingResult;

}