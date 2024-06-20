'use client'
import { doctorContextTypes, DoctorModalContext } from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import { extractDate } from "@/helpers/extractDate";
import { appointmentReqType } from "@/TYPES/Doctor/doctorTypes";
import { MouseEvent, useContext } from "react";
import TableModalDetails from "../Modal/TableModalDetails";
import { useStartConsultation } from "@/DATA_FETCHING/DOCTOR/hooks/useStartConsultation";
import { useRouter } from "next/navigation";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useDeleteUpcomingRequest } from "@/DATA_FETCHING/DOCTOR/hooks/useDeleteUpcomingRequest";
import toast from "react-hot-toast";

interface propsType{
    data:appointmentReqType,
}
 
 
export default function UpcomingAppointmentTableRow({data}:propsType) {

    
    const {setOpen, setContent} = useContext(DoctorModalContext) as doctorContextTypes
    const router = useRouter()


    const {year,month,day,hour,min} = extractDate(data.dateTime)
    const period = Number(hour) >= 0 && Number(hour) <= 12 ? 'AM' : 'PM'

    function openTableModal( ){

        setOpen(true)
        setContent(<TableModalDetails data={data}/>)
    }

    const mutation = useStartConsultation()
    const mutationDelete = useDeleteUpcomingRequest()

    async function startConsultationH(e:MouseEvent<HTMLButtonElement>,patientID:number, patientName:string){
        e.stopPropagation()

        const res = await mutation.mutateAsync(patientID)

        if(res?.status == 201){
          const res2 =  await mutationDelete.mutateAsync(data.id)

          if ( res2 &&  res2.status == 200){

            toast.success(res.message)
            router.push(`/doctor/consultation/start/${res.consultationID}/${patientID}/${patientName}`)

          } 
        }

    }

    

    return (
        <tr  className={` odd:bg-white even:bg-[#e6e8e9]`} 
        onClick={openTableModal}
    
        >

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">{day}/{month}/{year},&nbsp;{hour}:{min}&nbsp;{period}</td>

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] capitalize whitespace-nowrap "
             
            >

                {data.patient_id.patientID.name.replace("_"," ").length > 13 ? 
                `${data.patient_id.patientID.name.replace("_"," ").slice(0,13)}...` : data.patient_id.patientID.name.replace("_"," ") }

            </td>

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] uppercase">{data.reason}</td>

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] whitespace-nowrap"
                

            >
                
                {data.complain_notes.length > 48 ? `${data.complain_notes.slice(0,48)}...` : data.complain_notes }
            </td>

            <td   className=" px-[2rem]  py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">{data.status}</td>


            {/* madam does not want this feature */}
            {/* <td className=" px-[2rem]  py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] ">

                <button  className={` transition-all delay-75 duration-75
                xl:hover:scale-95   py-2 px-4 rounded-lg shadow-2xl bg-green-400 xl:bg-green-500 flex items-baseline justify-center`}
                onClick={ (e:MouseEvent<HTMLButtonElement>) => startConsultationH(e,Number(data.patient_id.id), data.patient_id.patientID.name)}
                > 
                    Consult&nbsp;Patient&nbsp;{mutation.isPending && <ButtonSpinner/> }
                </button>


            
            </td> */}



        </tr>
    );
}