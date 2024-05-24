'use client'

import { appointmentReqType } from "@/TYPES/Doctor/doctorTypes";
import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import TableModalDetails from "../Modal/TableModalDetails";
import { doctorContextTypes, DoctorModalContext } from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import { MouseEvent, useContext, useOptimistic, useState, useTransition } from "react";
import { extractDate } from "@/helpers/extractDate";
import { useChangeAppointmentStatus } from "@/DATA_FETCHING/DOCTOR/hooks/useChangeAppointmentStatus";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useRouter } from "next/navigation";



interface propsType{
    data:appointmentReqType,
    current:number
    setDisable:(arg:boolean) => void
    disable:boolean
}
 
 
export default function AppointmentRequestTableRow({data, current,setDisable, disable}:propsType) {

    
    const [isPending, startTransition] = useTransition();

    //const [disable, setDisable] = useState(false)

    //appointmentReq = data & optimisticUpdateStatus = the callback function, currentState also = data
    const [appointmentReq, optimisticUpdateStatus] = useOptimistic(data, (currentState:appointmentReqType, optimisticStatus:string) => {
        return {
            //updating the the object with an optimistic status
            ...currentState,
            status: optimisticStatus,
            //pending : true
        }
    })

    const router = useRouter()

    const {setOpen, setContent} = useContext(DoctorModalContext) as doctorContextTypes

    const [loadingAccept, setLoadingAccept] = useState(false)
    const [loadingDeclined, setLoadingDeclined] = useState(false)

    const mutation = useChangeAppointmentStatus();

    const {year,month,day,hour,min} = extractDate(appointmentReq.dateTime)
    const period = Number(hour) >= 0 && Number(hour) <= 12 ? 'AM' : 'PM'

    function openTableModal( ){

        setOpen(true)
        setContent(<TableModalDetails data={appointmentReq}/>)
    }

    

    async function changeAppointmentStatus(e:MouseEvent<HTMLButtonElement>){
        e.stopPropagation()//stop event from reaching its parent

       

        const clickedButton = e.currentTarget.value

        
        

        if(clickedButton == "ACCEPTED"){

            //console.log(e.target);
            setDisable(true)
            
            

            setLoadingAccept(true)
            startTransition( () => {optimisticUpdateStatus("ACCEPTED")})// you either do optimistic updates in a form action or a transition
            
            const res = await mutation.mutateAsync({"appointmentId":appointmentReq.id, "status":"ACCEPTED"})

            //await wait10(10000000)
            if(res) {
                setLoadingAccept(false)
                setDisable(false)
            }
        }


        if(clickedButton == "DECLINED"){
            //if(e.currentTarget != e.t)

            setDisable(true)

            setLoadingDeclined(true)
            startTransition(() => {optimisticUpdateStatus("DECLINED")})// you either do optimistic updates in a form action or a transition
           const res = await mutation.mutateAsync({"appointmentId":appointmentReq.id, "status":"DECLINED"})

           //await wait10(10000000)
           if(res) {
            setLoadingDeclined(false)
            setDisable(false)
           }
        }

        
    }


    


    return (
        <tr  className={` odd:bg-white even:bg-[#e6e8e9] ${disable ? 'text-[#808080] pointer-events-none cursor-not-allowed' : ''}`} 
        onClick={openTableModal}
    
        >

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">{day}/{month}/{year},&nbsp;{hour}:{min}&nbsp;{period}</td>

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] capitalize whitespace-nowrap "
             
            >

                {appointmentReq.patient_id.patientID.name.replace("_"," ").length > 13 ? 
                `${appointmentReq.patient_id.patientID.name.replace("_"," ").slice(0,13)}...` : appointmentReq.patient_id.patientID.name.replace("_"," ") }

            </td>

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] uppercase">{appointmentReq.reason}</td>

            <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] whitespace-nowrap"
                

            >
                
                {appointmentReq.complain_notes.length > 48 ? `${appointmentReq.complain_notes.slice(0,48)}...` : appointmentReq.complain_notes }
            </td>

            <td   className=" px-[2rem]  py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">{appointmentReq.status}</td>

            <td className=" px-[2rem]  py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">

                <button onClick={changeAppointmentStatus} id={`${current}`} value={"ACCEPTED"} className={` transition-all delay-75 duration-75
                xl:hover:scale-95 flex items-baseline  p-2  rounded-lg shadow-2xl ${disable ? 'bg-green-400' : 'bg-green-600' }`}
                > 
                    <span><TiTick /></span> Accept&nbsp;<span className={`${loadingAccept ? 'opacity-100 ' : 'opacity-0'}`}><ButtonSpinner/></span>
                </button>

                <button onClick={changeAppointmentStatus} id={`${current}`} value={"DECLINED"} className={` transition-all delay-75 duration-75
                xl:hover:scale-95 flex items-baseline p-2  rounded-lg shadow-2xl ${disable ? 'bg-red-300' : 'bg-red-400'}`}
                > 
                    <span><IoClose /></span> Reject&nbsp;<span className={`${loadingDeclined ? ' opacity-100 ' : 'opacity-0'}`}><ButtonSpinner/></span>
                </button>

            
            </td>



        </tr>
    );
}