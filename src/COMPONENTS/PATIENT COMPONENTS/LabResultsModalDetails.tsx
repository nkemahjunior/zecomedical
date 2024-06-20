"use client"

import { useState } from "react";
import { TbMicroscope } from "react-icons/tb";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import { IoIosArrowDown } from "react-icons/io";
import LabResultsPatientRow from "./LabResultsPatientRow";
import { useGetLabResultsPatient } from "@/DATA_FETCHING/PATIENT/hooks/useGetLabResultssPatient";
import LoadingSpinner from "../DOCTOR_COMPONENTS/LoadingSpinner";



export default function LabResultsModalDetails() {

    const query = useGetLabResultsPatient()
    if(query.isLoading) return <LoadingSpinner/>

    

    return (
        <div className="w-full  border-0 border-solid border-red-600 px-4 sm:px-16 mt-20">

        <div className={`space-y-8 lg:space-y-10  p-4 lg:p-8 ${textStylesBody}
            border-[1px] border-solid border-black rounded-lg 
           `}
        >

            <h1 className={`${textStylesH3} text-center`}>Lab Results</h1>


            <table className=" table-auto w-full " >

                    <thead>
                        <tr className="bg-[#e6e8e9] border-b-2 border-solid border-stone-400"> 
                            <th className="border-2 border-solid border-stone-400  ">Test</th>
                            <th className="border-2 border-solid border-stone-400 ">Lab</th>
                            <th className="border-2 border-solid border-stone-400 ">Results</th>
                            <th className="border-2 border-solid border-stone-400 ">Notes</th>
                            <th className="border-2 border-solid border-stone-400 ">Date</th>
                        </tr>
                    </thead>

                    <tbody >
                    

                        {
                            query.data?.map((el,i) => <LabResultsPatientRow key={i} data={el}/>)
                        }


                    
                    </tbody>
            </table>
        </div>

    </div>

    );
}