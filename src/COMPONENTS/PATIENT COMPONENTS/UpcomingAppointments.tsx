'use client'

import Image from "next/image";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import { useContext } from "react";
import { contextTypes, ModalContext } from "@/app/ModalProvider";
import UpcomingAppointmentsModalDetails from "./UpcomingAppointmentsModalDetails";
import { useGetPatientUpcomingAppointments } from "@/DATA_FETCHING/PATIENT/hooks/useGetPatientUpcomingAppointments";
import LoadingPatientUpcoming from "./loading/LoadingPatientUpcoming";
import { extractDate } from "@/helpers/extractDate";

 interface parameters{
    openModal:(arg:boolean) => void
    showModalContent:(arg:boolean) => void

 }

//  {openModal,showModalContent}:parameters
 
export default function UpcomingAppointments() {

    const {setShowModal,setModalContent} = useContext(ModalContext) as contextTypes

    const query = useGetPatientUpcomingAppointments()
    
    if(query.isLoading  )  return <LoadingPatientUpcoming/>
    const appointment = query.data?.at(0)
    
    
    function openModalContent(){
        setShowModal(true)
        //openModal(true)
        setModalContent(<UpcomingAppointmentsModalDetails data={appointment}/>)
    }

    const {year,month,day,hour,min} = extractDate(appointment?.dateTime!)
    const period = Number(hour) >= 0 && Number(hour) <= 12 ? "AM":"PM"
    const docName = appointment?.doctorID.uuid.name

    return (
      <>
        <div>
          <h3
            className={`border-0 border-solid border-black pt-[1.5rem] lg:pt-0 lg:mt-12 ${textStylesH3}`}
          >
            Upcoming Appoinments
          </h3>
          {appointment && (
            <div
              className=" px-[1.2rem] py-[1.6rem] sm:p-[3rem] md:px-[4rem] md:py-[6rem] lg:px-[2rem] lg:py-[6rem] xl:px-[6rem] xl:py-[7rem] mt-8 lg:mt-12 
                    grid grid-cols-2 text-white bg-[#003459]
                    rounded-xl overflow-hidden shadow-xl
                    "
            >
              <div
                className="rounded-lg h-full w-[15rem] sm:w-[20rem] md:w-[22rem] lg:w-[19rem]  xl:w-[21rem] 
                         2xl:w-[25rem]
                        border-0 border-solid border-red-600 relative overflow-hidden"
              >
                <Image
                  className="block"
                  src={
                    appointment?.doctorID.uuid.profilePhotoUrl ||
                    "/defaultProfile.jpg"
                  }
                  alt="The doctor's picture"
                  fill={true}
                  quality={100}
                  priority={true}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </div>

              <div className=" ">
                <div className=" space-y-[0.2rem] lg:space-y-[0.7rem] xl:space-y-[1.4rem] ">
                  <p className={`${textStylesBody} text-white`}>
                    {day}-{month}-{year}, {hour}:{min} {period}
                  </p>

                  <p className={`${textStylesBody} text-white`}>
                    {appointment?.complain_notes &&
                    appointment.complain_notes.length > 21
                      ? `${appointment.complain_notes.slice(0, 21)}...`
                      : `${appointment?.complain_notes}`}
                  </p>

                  <p className={`${textStylesBody} text-white capitalize`}>
                    Dr.
                    {docName && docName.length > 21
                      ? `${docName.slice(0, 18)}...`
                      : docName}
                  </p>

                  <p className={`${textStylesBody} text-white`}>
                    {appointment?.status}
                  </p>
                </div>

                <button
                  onClick={openModalContent}
                  className={`mt-8  bg-white ${textStylesBody} text-[#003459] rounded-lg w-full lg:w-[80%] xl:w-[70%] py-[1.2rem]`}
                >
                  View Details
                </button>
              </div>
            </div>
          )}

          {!appointment && (
            <div
              className="  mt-8 lg:mt-12 
                     text-white bg-[#003459]
                    rounded-xl w-full h-60  sm:h-96 xl:h-[26.5rem] flex justify-center items-center   shadow-xl 
                    "
            >
              <div className="flex flex-col items-center justify-center">
                <p className="text-4xl">No Appointments yet! 😊 </p>
                <p className=" text-2xl">Book an appointment</p>
              </div>
            </div>
          )}
        </div>
      </>
    );
}