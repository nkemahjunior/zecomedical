 'use client'

import { resumeConsultationType } from "@/TYPES/Doctor/doctorTypes";
import Link from "next/link";

 
export default function PausedConsultationDetail({data}:{data:resumeConsultationType}) {

   


    return (
        <ul className=" sm:flex sm:justify-between  bg-white py-8 px-4 sm:px-6 2xl:px-12 rounded-lg shadow-xl"> 
        <li>Continue your consultation with {data.patientName.replaceAll("_"," ")}   </li>
        
        <li className=" flex justify-end">
            <Link href={`/doctor/consultation/resume/${data.id}/${data.patientID}/${data.patientName}`} 
            className="block px-4 py-4 mt-4  sm:mt-0 rounded-lg bg-[#00171F] text-white xl:hover:scale-95"
            >
                Resume&nbsp;Consultation
            </Link>
        </li>
    </ul>
    );
}