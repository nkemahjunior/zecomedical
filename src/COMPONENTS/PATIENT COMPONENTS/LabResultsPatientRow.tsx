import { extractDate } from "@/helpers/extractDate";
import { availableLabTestResults } from "@/TYPES/Doctor/doctorTypes";
import { labResultsPatient } from "@/TYPES/Patient/PatientTypes";



export default function LabResultsPatientRow({data}:{data:labResultsPatient}) { 


    const {year,month,day,hour,min} = extractDate(data.creationTimestamp)
 


    return (
        <tr  className={` odd:bg-white even:bg-[#e6e8e9] cursor-pointer`} 
         >

            <td className="border-2 border-solid border-stone-400 ">{data.labTestRequest}</td>

            <td className="border-2 border-solid border-stone-400  capitalize whitespace-nowrap " >{data.labDepartment.name}</td>

            <td className="border-2 border-solid border-stone-400  uppercase">{data?.result === true ? 'Positive' : 'Negative'}</td>

            <td className="border-2 border-solid border-stone-400 capitalize">{
                 data.notes
            }</td> 

            <td className="border-2 border-solid border-stone-400 capitalize">{
                `${day}-${month}-${year}`
            }</td>


        </tr>
    );
}