import { doctorContextTypes, DoctorModalContext } from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { useGetMedicalHistory } from "@/DATA_FETCHING/DOCTOR/hooks/useGetMedicalHistory";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import MedicalHistoryChild from "./MedicalHistoryChild";
import LoadingSpinner from "../LoadingSpinner";


 
 
export default function MedicalHistory({patientID}:{patientID:number}) {

    const {setOpen,setContent} = useContext(DoctorModalContext) as doctorContextTypes

    function close(){
        setContent(null)
        setOpen(false)
    }


    const query = useGetMedicalHistory(patientID)

    if(query.isLoading) return <LoadingSpinner/>

   
    //console.log(query.data);

    return (
        <div className={`  border-0 border-solid border-red-700 ${textStylesBody} text-black px-4  
        sm:px-36 lg:px-80 xl:px-[34rem]  2xl:px-[56rem] w-full`}>
            
            <div className=" border-0 border-blue-800 border-solid overflow-y-auto  
            rounded-xl shadow-xl bg-white relative 
            h-[48rem] xl:h-[58rem] 
            px-4 sm:px-8 xl:px-10  
            py-4 lg:py-8 " >

              <div className="flex  justify-between items-center mb-2 md:mb-6">
                    <h1 className={`${textStylesH3} text-black `}> Patient&apos;s Medical History</h1>
                    <div className="  p-4 bg-stone-100 rounded-lg xl:hover:bg-stone-200 xl:hover:scale-95" onClick={close}><IoClose /></div>
                
              </div>

              <div className=" space-y-8 divide-y-2 divide-stone-300 divide-solid">

                {
                  query.data?.map((el,i) => <MedicalHistoryChild data={el} key={i}/> )
                  
                }

              </div>

            </div>
        </div>
    );
}