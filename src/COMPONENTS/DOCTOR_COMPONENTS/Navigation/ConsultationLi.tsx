 "use client"

import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider"
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner"
import { useGetPendingLabResults } from "@/DATA_FETCHING/DOCTOR/hooks/useLabResults"
import { useContext, useEffect } from "react"

 
export default function ConsultationLi() {


    const {setPendingLabResultsCheck, setPendingLabResults } = useContext(DoctorContext) as mainDoctorContextType

    const query = useGetPendingLabResults()


    useEffect( () => {

        if(!query.isLoading){
            if(query.data && query.data.length > 0){
    
                //setPendingLabResultsCheck(true)
                setPendingLabResults(query.data)
            }
        }
        
    },[query.data, query.isLoading, setPendingLabResults])




    return (
        <li className={` font-semibold `}>Consultations&nbsp;{query.isLoading && <ButtonSpinner/>}</li>
    );
}