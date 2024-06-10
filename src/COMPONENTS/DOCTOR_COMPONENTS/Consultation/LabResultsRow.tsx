 "use client"

import { doctorContextTypes, DoctorModalContext } from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import { availableLabTestResults } from "@/TYPES/Doctor/doctorTypes";
import { useContext } from "react";
import LabResultsTableModalDetails from "./LabResultsTableModalDetails";

 
export default function LabResultsRow({data}:{data:availableLabTestResults}) {


    const {setOpen, setContent} = useContext(DoctorModalContext) as doctorContextTypes

    function openTableModal( ){

        setOpen(true)
        setContent(<LabResultsTableModalDetails data={data}/>)
    }


    return (
        <tr  className={` odd:bg-white even:bg-[#e6e8e9] cursor-pointer`} 
        onClick={openTableModal}
         >

            <td className="border-2 border-solid border-stone-400 ">{data.labTestRequest}</td>

            <td className="border-2 border-solid border-stone-400  capitalize whitespace-nowrap " >{data.labDepartment.name}</td>

            <td className="border-2 border-solid border-stone-400  uppercase">{data?.result === true ? 'Positive' : 'Negative'}</td>

            <td className="border-2 border-solid border-stone-400 capitalize">{
                 data.notes
            }</td>

        </tr>
    );
}