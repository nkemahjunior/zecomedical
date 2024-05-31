 "use client"

import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useContext } from "react";
import PausedConsultationDetail from "./PausedConsultationDetail";

 
export default function PausedConsultationsList() {

    const {pausedConsultations} = useContext(DoctorContext) as mainDoctorContextType

    return (

        <div className={`${textStylesBody}  px-4 sm:px-16 lg:px-4 xl:px-20 2xl:px-72`}>

            <h1 className={`${textStylesH3} text-center py-6`}>Paused Consultations</h1>


            <ul className=" space-y-6">
               {
                pausedConsultations.map(el => (
                    <PausedConsultationDetail key={el.id } data={el} />
                ))
               }
            </ul>


        </div>
);
}