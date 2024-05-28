'use client'

import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import LabNotificationDetailElement from "./LabNotificationDetailsElement";
import { useContext } from "react";
import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";

 
 
export default function LabNotificationDetails() {

    const {completedResults} = useContext(DoctorContext) as mainDoctorContextType

    // console.log(completedResults);
    // console.log("arrrrrrrrr");

    


    return (
        <div className={`${textStylesBody}  px-4 sm:px-16 lg:px-4 xl:px-20 2xl:px-72`}>

            <h1 className={`${textStylesH3} text-center py-6`}>Lab Notifications</h1>

            <ul className=" space-y-6">
                {
                    completedResults.map(el => (
                        <LabNotificationDetailElement key={el.id} data={el}/>
                    ))
                }

            </ul>  
        </div>
    );
}