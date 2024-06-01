"use client"

import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { useCheckLabResultsAvailableFN } from "@/DATA_FETCHING/DOCTOR/hooks/useCheckLabResultsAvailable";
import { useContext, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import AnimationPing from "./AnimationPing";
import Link from "next/link";

 
 
export default function LabNotification() {


    const {setCompletedLabResults,completedResults, pendingLabResults} = useContext(DoctorContext) as mainDoctorContextType
 
    const query = useCheckLabResultsAvailableFN() // runs every 10mins
    

    /**
     * on load take all pending lab request from the pendingLabRequest state then go to the individual labs and check if the results are available, 
     * if they are available bring them and it in the completedLabResults state
     */
    useEffect( () => {
        if(!query.isLoading && query.data && query.data.length > 0){



            const hold = [/*...completedResults,*/ ...query.data]
            setCompletedLabResults(hold)
        }

    },[ query.data, query.isLoading, setCompletedLabResults])


    return (
        <Link href={"/doctor/consultation/notifications"} className="block">
            <ul className="hover:bg-stone-200 transition-colors  py-1">
                <li className="ml-8 flex items-baseline gap-x-4">
                    <span className="relative h-fit inline-block">

                        {completedResults.length > 0  && <AnimationPing/>}

                        <IoMdNotificationsOutline />
                    </span>
                    Lab Notifications
                </li>
            </ul>
        </Link>
    );
}