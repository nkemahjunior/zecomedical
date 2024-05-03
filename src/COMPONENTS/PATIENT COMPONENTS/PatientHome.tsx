"use client"

import AvailableDoctor from "./AvailableDoctor";
import UpcomingAppointments from "./UpcomingAppointments";
import PreviousSession from "./PreviousSession";
import Modal from "./Modal";
import { useState } from "react";
import UpcomingAppointmentsModalDetails from "./UpcomingAppointmentsModalDetails";
import PreviousSessionModalDetails from "./PreviousSessionModalDetails";
import AvailableDoctorModalDetails from "./AvailableDoctorModalDetails";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";

 
 
export default function PatientHome() {
{/* <div className="h-[7rem] w-[7rem] rounded-[50%]  border-2 border-solid border-red-600 relative overflow-hidden">  

<Image className="block"  src={"/dp.jpeg"} alt="logo" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
</div> */}
   
    const [showModal,setShowModal] = useState(false);
    const [modalContent1,setModalContent1] = useState(false)
    const [modalContent2,setModalContent2] = useState(false)
    const [modalContent3,setModalContent3] = useState(false)

    const allModalContents = {
        upcomingAppointmentsModalContent : setModalContent1,
        previousSessionModalContent :  setModalContent2,
        availbleDoctorModalContent : setModalContent3
    }


    return ( 
        
        <>
            <Modal show={showModal} setShowModal={setShowModal} allModalContent = {allModalContents} >
                
                {modalContent1 && <UpcomingAppointmentsModalDetails/>}
                {modalContent2 && <PreviousSessionModalDetails/>}
                {modalContent3 && <AvailableDoctorModalDetails/>}

            </Modal>
                                    
            
            {/* mt is thesame value as the height of the nav bar, don't change it boy */}
            <div className={`fixedl mt-[4rem] sm:mt-[6rem] lg:grid lg:grid-cols-2 lg:gap-x-12 2xl:gap-x-32 border-solid border-4 border-red-600 
                px-2 pb-4 sm:px-20 sm:pb-6  md:px-36 md:pb-8 lg:px-12 lg:pb-14 2xl:px-[18rem] 2xl:pb-24 
            `}>


                {/**grid 1 */}
                <div className=" border-0 border-solid border-pink-600 ">


                    <UpcomingAppointments openModal = {setShowModal} showModalContent={setModalContent1}  />  
                    <PreviousSession  openModal = {setShowModal}  showModalContent={setModalContent2}/>  

                </div>


                {/**grid 2 */}
                <div className=" border-0 border-solid border-pink-600 "> 

                    

                    <h3 className={`border-0 border-solid border-black mt-6 lg:mt-12 ${textStylesH3} text-[#00171F]`}>Available Doctors</h3>

                    <div className="h-full lg:h-[89.2%] bg-[#003459] 
                    py-[3rem]  md:py-[4rem]  lg:py-[1.6rem]  xl:py-[2.8rem] mt-8 lg:mt-12 
                    rounded-xl overflow-hidden shadow-xl
                    ">
                        
                        <div className="space-y-10 md:space-y-14 lg:space-y-32 
                        divide-y-2 divide-white divide">

                            <AvailableDoctor openModal = {setShowModal} showModalContent={setModalContent3}/>
                            <AvailableDoctor openModal = {setShowModal} showModalContent={setModalContent3}/>
                            <AvailableDoctor openModal = {setShowModal} showModalContent={setModalContent3}/>

                        </div>


                        <div className="flex justify-center mt-20 sm:mt-24 lg:mt-[4rem] xl:mt-[8rem]">
                            <button className={`bg-white  ${textStylesBody}  text-[#003459] rounded-lg w-[70%] py-[1rem] lg:w-[80%] xl:w-[70%]`}>
                                        See All
                            </button>
                        </div>


                    </div>

                    
                </div>
            
            </div>
        </>
    );
} 


//p-[1.2rem] sm:p-[3rem] md:px-[2rem] md:py-[4rem] lg:px-[2rem] lg:py-[6rem] xl:px-[6rem] xl:py-[7rem] 