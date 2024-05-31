'use client'
import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { useGetPausedConsultations } from "@/DATA_FETCHING/DOCTOR/hooks/usePauseConsultation";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { PiArrowLineDown } from "react-icons/pi";

 
 
export default function ResumeConsultationsLi() {

    const {pausedConsultations, setPausedConsultations} = useContext(DoctorContext) as mainDoctorContextType


    const query = useGetPausedConsultations()

    useEffect(() => {
        if(!query.isLoading && query.data && query.data.length > 0){

            // console.log("-----------------------------------------");
            // console.log(query.data);

            const hold = [ ...query.data]
            setPausedConsultations(hold)
        }
    },[query.data, query.isLoading, setPausedConsultations])

    return (
        <Link href={"/doctor/consultation/resume/pausedConsultations"} className="block">
            <ul className="hover:bg-stone-200 transition-colors  py-1">
                <li className="ml-8 flex items-baseline gap-x-4"><span><PiArrowLineDown /></span>Resume consultations</li>
            </ul>
        </Link>
    );
}