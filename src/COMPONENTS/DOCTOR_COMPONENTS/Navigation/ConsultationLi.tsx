 "use client"

import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider"
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner"
import { useGetPendingLabResults } from "@/DATA_FETCHING/DOCTOR/hooks/useLabResults"
import { usePathname } from "next/navigation"
import { useContext, useEffect } from "react"

 
export default function ConsultationLi() {


    const pathname = usePathname()

    const { setPendingLabResults } = useContext(DoctorContext) as mainDoctorContextType

    const query = useGetPendingLabResults()


    useEffect( () => {

        /**When the application first loads , check if the doctor has any pending lab request which the results are not yet out
         * if the doctor has pending lab requests , add to the state of pending request for that doctor
        */
        if(!query.isLoading){
            if(query.data && query.data.length > 0){
    
                //setPendingLabResultsCheck(true)
                setPendingLabResults(query.data)
            }
        }
        
    },[query.data, query.isLoading, setPendingLabResults])




    return (
        <li className={` font-semibold  `}>Consultations&nbsp;{query.isLoading && <ButtonSpinner/>}</li>
    );
}