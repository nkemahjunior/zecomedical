"use client"

import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { useCheckLabResultsAvailableFN } from "@/DATA_FETCHING/DOCTOR/hooks/useCheckLabResultsAvailable";
import { useContext, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import AnimationPing from "./AnimationPing";

 
 
export default function LabNotification() {


    const {setCompletedLabResults,completedResults} = useContext(DoctorContext) as mainDoctorContextType

    const query = useCheckLabResultsAvailableFN()

    //console.log("tzeeet");
    
    useEffect( () => {
        if(!query.isLoading && query.data && query.data.length > 0){
            //console.log(query.data);
            //console.log("whyyyyyyyyyyyy");
            
            const hold = [...completedResults, ...query.data]
            setCompletedLabResults(hold)
        }

    },[completedResults, query.data, query.isLoading, setCompletedLabResults])


    return (
        <ul className="hover:bg-stone-200 transition-colors  py-1">
        <li className="ml-8 flex items-baseline gap-x-4">
            <span className="relative h-fit inline-block">

                {completedResults.length > 0  && <AnimationPing/>}

                <IoMdNotificationsOutline />
            </span>
            Lab Notifications
        </li>
    </ul>
    );
}