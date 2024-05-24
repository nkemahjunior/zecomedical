'use client'
import { doctorContextTypes, DoctorModalContext } from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import { appointmentReqType } from "@/TYPES/Doctor/doctorTypes";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

 
 
export default function TableModalDetails({data}:{data:appointmentReqType}) {

    const {open,setOpen,content,setContent} = useContext(DoctorModalContext) as doctorContextTypes

    function close(){
        setContent(null)
        setOpen(false)
    }


        //2024-05-22T08:30:00
        const year = data.dateTime.slice(0,4)
        const month = data.dateTime.slice(5,7)
        const day = data.dateTime.slice(8,10)
        const hour = data.dateTime.slice(11,13)
        const min = data.dateTime.slice(14,16)
    
        const period = Number(hour) >= 0 && Number(hour) <= 12 ? 'AM' : 'PM'

    return (
        <div className=" bg-white border-0 border-solid border-red-700 shadow-2xl rounded-xl overflow-y-auto 
            h-[30rem] w-[30rem] lg:h-[38rem] lg:w-[38rem] relative px-8 py-4">
            
            <div className="absolute top-2 right-2 p-4 bg-stone-100 rounded-lg xl:hover:bg-stone-200 xl:hover:scale-95" onClick={close}><IoClose /></div>

            <dl className="mt-12 space-y-8">
                
                <div className="space-y-1">
                    <dt className=" font-semibold">Patient Name :</dt>
                    <dd className=" whitespace-nowrap ">{data.patient_id.patientID.name.replaceAll("_"," ")}</dd>
                </div>

                <div className="space-y-1">
                    <dt className=" font-semibold">Status</dt>
                    <dd>{data.status}</dd>
                </div>

                <div className="space-y-1">
                    <dt className=" font-semibold">Date</dt>
                    <dd className=" whitespace-nowrap">{day}/{month}/{year},&nbsp;{hour}:{min}&nbsp;{period}  </dd>
                </div>

                <div className="space-y-1">
                    <dt className=" font-semibold">Reason</dt>
                    <dd>{data.reason}</dd>
                </div>

                <div className="space-y-1">
                    <dt className=" font-semibold">Consultation Notes</dt>
                    <dd>{data.complain_notes}</dd>
                </div>

            </dl>


        </div>
    );
}