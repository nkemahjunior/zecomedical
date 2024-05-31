import { doctorContextTypes, DoctorModalContext } from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import { availableLabTestResults } from "@/TYPES/Doctor/doctorTypes";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

 
 
export default function LabResultsTableModalDetails({data}:{data:availableLabTestResults}) {

    const {setOpen,setContent} = useContext(DoctorModalContext) as doctorContextTypes

    function close(){
        setContent(null)
        setOpen(false)
    }

    return (
        <div className=" bg-white border-0 border-solid border-red-700 shadow-2xl rounded-xl overflow-y-auto 
            h-[30rem] w-[30rem] lg:h-[38rem] lg:w-[38rem] relative px-8 py-4">
            
            <div className="absolute top-2 right-2 p-4 bg-stone-100 rounded-lg xl:hover:bg-stone-200 xl:hover:scale-95" onClick={close}><IoClose /></div>

            <dl className="mt-12 space-y-8">
                
                <div className="space-y-1">
                    <dt className=" font-semibold">Lab Name :</dt>
                    <dd className=" whitespace-nowrap capitalize">{data.labDepartment.name}</dd>
                </div>
                

                <div className="space-y-1">
                    <dt className=" font-semibold">Lab Test</dt>
                    <dd className=" whitespace-nowrap">{data.labTestRequest}  </dd>
                </div>

                <div className="space-y-1">
                    <dt className=" font-semibold">Lab Results</dt>
                    <dd>{data.result == true ? 'Positive' : 'Negative'}</dd>
                </div>


                <div className="space-y-1">
                    <dt className=" font-semibold">Notes</dt>
                    <dd>{data.notes}</dd>
                </div>


            </dl>


        </div>
    );
}