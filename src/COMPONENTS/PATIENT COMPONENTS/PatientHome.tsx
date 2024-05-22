"use client"

import AvailableDoctor from "./AvailableDoctor";
import UpcomingAppointments from "./UpcomingAppointments";
import PreviousSession from "./PreviousSession";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import { useGetAvailableDoctors } from "@/DATA_FETCHING/PATIENT/hooks/useGetAvailableDoctors";
import DoctorsAvailableHome from "./DoctorsAvailableHome";


const colorStyles = {
    textColor:"text-white",
    buttonText:"text-[#003459]",
    buttonColor:"bg-white"
}


 
 
export default function PatientHome() {



    return ( 
        
        <>
                                    
            
            {/* mt is thesame value as the height of the nav bar, don't change it boy... ahhh i have transfered it to the Patient layout */}
            <div className={`  lg:grid lg:grid-cols-2 lg:gap-x-12 2xl:gap-x-32 border-solid border-0 border-red-600 
                px-2 pb-4 sm:px-20 sm:pb-6  md:px-36 md:pb-8 lg:px-12 lg:pb-14 2xl:px-[18rem] 2xl:pb-24 
            `}>


                {/**grid 1 */}
                <div className=" border-0 border-solid border-pink-600 ">

                    <UpcomingAppointments/>
                    <PreviousSession/>

                </div>


                {/**grid 2 */}
                <DoctorsAvailableHome/>
            </div>
        </>
    );
} 


//p-[1.2rem] sm:p-[3rem] md:px-[2rem] md:py-[4rem] lg:px-[2rem] lg:py-[6rem] xl:px-[6rem] xl:py-[7rem] 