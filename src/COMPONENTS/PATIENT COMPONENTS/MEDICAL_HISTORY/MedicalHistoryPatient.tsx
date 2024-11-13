//MedicalHistoryPatient

import { contextTypes, ModalContext } from "@/app/ModalProvider"
import { useGetMedicalHistoryPatients } from "@/DATA_FETCHING/PATIENT/hooks/useGetMedicalHistoryPatient"
import { useContext } from "react"
import LoadingSpinnerPatient from "../LoadingSpinnerPatient"
import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general"
import { IoClose } from "react-icons/io5"
import MedicalHistoryChildPatient from "./MedicalHistroyChildPatient"


 
 
export default function MedicalHistoryPatient() {

    const {setModalContent, setShowModal} = useContext(ModalContext) as contextTypes

    function close(){
        setModalContent(null)
        setShowModal(false)
    }


    const query = useGetMedicalHistoryPatients()

    if(query.isLoading) return <LoadingSpinnerPatient/>

   
    //console.log(query.data);

    return (
      <div
        className={`  border-0 border-solid border-red-700 ${textStylesBody} text-black  w-full
        px-4  sm:px-[6rem]  md:px-[8rem] lg:px-[10rem]
        `}
      >
        <div className="flex  justify-between items-center mb-2 md:mb-6">
          <h1 className={`${textStylesH3} text-black `}>
            {" "}
            Your Medical History
          </h1>
        </div>

        {query.data && query.data.length > 1 && (
          <div className=" space-y-8 divide-y-2 divide-stone-300 divide-solid">
            {query.data.map((el, i) => (
              <MedicalHistoryChildPatient data={el} key={i} />
            ))}
          </div>
        )}
        {!query.data || query.data.length < 1 && (

            <div className="flex flex-col h-[40rem] items-center justify-center    border-solid border-0 border-red-600 ">
              <p className="text-4xl">No medical history yet! 😊 </p>
              <p className=" text-2xl">Book an appointment</p>
            </div>
     
        )}
      </div>
    );
}