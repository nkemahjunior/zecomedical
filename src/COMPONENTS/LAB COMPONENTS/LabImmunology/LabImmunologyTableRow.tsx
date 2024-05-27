import { LabContextTypes, LabModalContext } from "@/app/(LAB)/lab/LabModalProvider"
import { labRequestType } from "@/TYPES/Lab/laboratories"
import { useContext, useState } from "react"
import LabTableModalDetailsImmunology from "./LabTableModalDetailsImmunology"
import { extractDate } from "@/helpers/extractDate"




export default function LabImmunologyTableRow({data}:{data:labRequestType}) {

    const {setOpen , setContent} = useContext(LabModalContext) as LabContextTypes

    function openModal(){
        setOpen(true)
        setContent(<LabTableModalDetailsImmunology el={data}/>)
    }

    

    
   

    const {year,month,day,hour,min} = extractDate(data?.creationTimestamp)
    const period = Number(hour) >= 0 && Number(hour) <= 12 ? 'AM' : 'PM'

    

    

    // {appointmentReq.patient_id.patientID.name.replace("_"," ").length > 13 ? 
    //             `${appointmentReq.patient_id.patientID.name.replace("_"," ").slice(0,13)}...` : appointmentReq.patient_id.patientID.name.replace("_"," ") }

    return (
        // ${disable ? 'text-[#808080] pointer-events-none cursor-not-allowed' : ''}
        <tr  className={` odd:bg-white even:bg-[#e6e8e9] cursor-pointer `} 
            onClick={openModal}
        >

            <td className=" border-stone-300 border-solid border-2 pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">{day}-{month}-{year}, {hour}:{min}&nbsp;{period} </td>

            <td className=" border-stone-300 border-solid border-2 pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] capitalize whitespace-nowrap "
             
            >

                {data.patientName.replace("_"," ").length > 13 ? 
                                 `${data.patientName.replace("_"," ").slice(0,13)}...` : data.patientName.replace("_"," ") }
                                

            </td>

            <td className=" border-stone-300 border-solid border-2 pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] uppercase">{data.labTestRequest}</td>






        </tr>
    );
}