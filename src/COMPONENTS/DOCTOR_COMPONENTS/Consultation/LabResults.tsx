'use client'
import { textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { availableLabTestResults } from "@/TYPES/Doctor/doctorTypes";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbMicroscope } from "react-icons/tb";
import LabResultsRow from "./LabResultsRow";

 
 
export default function LabResults({labTest}:{labTest:availableLabTestResults[]}) {

    const [closeLabResults,setCloseLabResults] = useState(true)

    return (
        <div className="w-full  border-2 border-solid border-red-600 px-4 sm:px-16">

        <div className={`space-y-8 lg:space-y-10  p-4 lg:p-8 
            border-[1px] border-solid border-black rounded-lg 
            ${closeLabResults ? "close overflow-hidden" : "open overflow-y-auto"} `}
        >
            <div className="flex justify-between items-center mb-4">
                    <h4 className={`${textStylesH3} flex justify-center items-center `}><span><TbMicroscope /></span>&nbsp;Lab Results</h4>

                    <button 
                        type="button"
                        className={` p-4 bg-stone-200 rounded-lg xl:hover:bg-stone-300  
                        ${closeLabResults ? ' rotate-[360]' : 'rotate-180  '}`}
                        onClick={() => setCloseLabResults(v => !v)}
                    >
                        <IoIosArrowDown />
                    </button>

            </div>

            <table className=" table-auto w-full " >

                    <thead>
                        <tr className="bg-[#e6e8e9] border-b-2 border-solid border-stone-400"> 
                            <th className="border-2 border-solid border-stone-400  ">Test</th>
                            <th className="border-2 border-solid border-stone-400 ">Lab</th>
                            <th className="border-2 border-solid border-stone-400 ">Results</th>
                            <th className="border-2 border-solid border-stone-400 ">Notes</th>
                        </tr>
                    </thead>

                    <tbody >
                    

                    {
                        labTest.map((el,i) => (
                            <LabResultsRow data={el} key={i}/>
                        ))
                    }



                    
                    </tbody>
            </table>
        </div>

    </div>

    );
}