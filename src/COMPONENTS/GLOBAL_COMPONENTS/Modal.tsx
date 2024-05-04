"use client"
import { contextTypes, ModalContext } from "@/app/ModalProvider";
import { useContext } from "react";
import { textStylesBody } from "../GENERAL_STYLES/general";

 
 
export default function Modal() {

    const {showModal , setShowModal,modalContent,setModalContent}  = useContext(ModalContext) as contextTypes

    function closeModal(){

        setShowModal(false)
        setModalContent(null)
        // allModalContent.upcomingAppointmentsModalContent(false)
        // allModalContent.previousSessionModalContent(false)
        // allModalContent.availbleDoctorModalContent(false)
    }


    return (
        <>
            <div className={` ${showModal ? 'fixed':'hidden'}
            border-4 border-solid border-red-700 h-[100dvh] w-screen  
              top-[4rem] sm:top-[6rem] z-10 backdrop-blur-sm flex justify-center items-center`}
            >


                <div className={`h-[85%]  w-[95%]  sm:h-[70%] sm:w-[85%] md:h-[55%] lg:h-[70%] xl:w-[70%] 2xl:w-[50%] 2xl:h-[75%]   
                bg-white shadow-2xl pb-4 pt-6 overflow-y-auto border-0 border-solid border-pink-700`}>

                     <button className={`block mr-8 rounded-[50%] h-[3.5rem] w-[3.5rem] float-right  bg-[#00171F] ${textStylesBody} text-white `} 
                        onClick={ closeModal  }
                    >
                        X
                    </button> 

                    {modalContent}

                    {/*children*/}


                    {/* <div className="flex justify-center mt-[4rem]">
                        <button className={`py-2 w-[12rem] rounded-lg bg-[#00171F] ${textStylesBody} text-white `} 
                            onClick={ closeModal  }
                        >
                            close
                        </button>
                    </div> */}


                </div>


            </div>
        </>
    );
}