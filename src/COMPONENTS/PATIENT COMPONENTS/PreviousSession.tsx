import Image from "next/image";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import { contextTypes, ModalContext } from "@/app/ModalProvider";
import { useContext } from "react";
import PreviousSessionModalDetails from "./PreviousSessionModalDetails";
import { useGetMedicalHistoryPatients } from "@/DATA_FETCHING/PATIENT/hooks/useGetMedicalHistoryPatient";
import LoadingPatientUpcoming from "./loading/LoadingPatientUpcoming";
import { extractDate } from "@/helpers/extractDate";


 
 
export default function PreviousSession() {

    const {setShowModal,setModalContent} = useContext(ModalContext) as contextTypes

    const query = useGetMedicalHistoryPatients()

    if(query.isLoading  )  return <LoadingPatientUpcoming/>
    const medHistory = query.data?.at(0)

    function openModalContent(){
        setShowModal(true)
        setModalContent(<PreviousSessionModalDetails data={medHistory}/>)
    }

    const {year,month,day,hour,min} = extractDate(medHistory?.timestamp!)
    const period = Number(hour) >= 0 && Number(hour) <= 12 ? "AM":"PM"
    const docName = medHistory?.doctorID.uuid.name

    return (
        <>
                <div>
                    <h3 className={`mt-6 lg:mt-12 ${textStylesH3} text-[#00171F]`}>Previous Session</h3>

                    <div className="p-[1.2rem] py-[1.6rem] sm:p-[3rem] md:px-[4rem] md:py-[6rem] lg:px-[2rem] lg:py-[6rem] xl:px-[6rem] xl:py-[7rem]  mt-8 lg:mt-12 
                    grid grid-cols-2 text-white bg-[#003459]
                    rounded-xl overflow-hidden shadow-xl" 
                    >

                        <div className="rounded-lg h-full w-[15rem] sm:w-[20rem] md:w-[22rem] lg:w-[19rem] xl:w-[21rem] 
                        2xl:w-[25rem]
                        border-0 border-solid border-red-600 relative overflow-hidden">  

                            <Image className="block"  src={medHistory?.doctorID.uuid.profilePhotoUrl || "/defaultProfile.jpg"} alt="The doctor's picture" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                        </div> 

                        <div className=" ">

                            <div className=" space-y-[0.2rem] lg:space-y-[0.7rem] xl:space-y-[1.4rem]">
                                {/* <p className= { `${textStylesBody} text-white` }>April 02, 2024</p> */}
                                <p className= { `${textStylesBody} text-white` }>{day}-{month}-{year}, {hour}:{min} {period}</p>

                                <p className= { `${textStylesBody} text-white` }> {medHistory?.diagnosisNotes && medHistory.diagnosisNotes.length > 21 ? `${medHistory.diagnosisNotes.slice(0,21)}...`: `${medHistory?.diagnosisNotes}`}</p>


                                <p className= { `${textStylesBody} text-white capitalize` }>Dr.{docName && docName.length > 21 ? 
                                `${docName.slice(0,18) }...`: docName}</p>


                                <p className= { `${textStylesBody} text-white capitalize` }>
                                    {medHistory?.medicinePrescribed && 
                                    medHistory?.medicinePrescribed.length > 21 ? 
                                    `${medHistory?.medicinePrescribed.slice(0,18)}...` :      medHistory?.medicinePrescribed}</p>
                            </div>

                            <button 
                            onClick={ openModalContent }
                            className={`mt-8  bg-white ${textStylesBody}  text-[#003459] rounded-lg w-full py-[1.2rem] lg:w-[80%] xl:w-[70%] `}>
                                View Details
                            </button>
                        </div>

                    </div>
                </div>   
        </>
    );
}