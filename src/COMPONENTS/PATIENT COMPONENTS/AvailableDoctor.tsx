"use client"

import Image from "next/image";
import { textStylesBody } from "../GENERAL_STYLES/general";
import { useContext } from "react";
import { contextTypes, ModalContext } from "@/app/ModalProvider";
import AvailableDoctorModalDetails from "./AvailableDoctorModalDetails";
import { DoctorsAvailableType } from "@/TYPES/Patient/PatientTypes";



interface parameters{
 colorStyles:{
    textColor:string
    buttonText:string
    buttonColor:string
 }
 data: DoctorsAvailableType

}

 
export default function AvailableDoctor({colorStyles,data}:parameters) {

    const {setShowModal,setModalContent} = useContext(ModalContext) as contextTypes


    //2024-05-22T08:30:00
    const year = data.timeFrom.slice(0,4)
    const month = data.timeFrom.slice(5,7)
    const day = data.timeFrom.slice(8,10)
    const hour = data.timeFrom.slice(11,13)
    const min = data.timeFrom.slice(14,16)

    const period = Number(hour) >= 0 && Number(hour) <= 12 ? 'AM' : 'PM'

   


    function openModalContent(){
        setShowModal(true)
        setModalContent(<AvailableDoctorModalDetails appointmentData={data}/>)

    }

    return (
        <>
        <div className={`flex justify-between  ${colorStyles.textColor}   border-0 border-solid border-black pt-8 lg:pt-16
         px-[1.2rem]  sm:px-[3rem] md:px-[8rem]  lg:px-[1.5rem]  xl:px-[4.5rem] 2xl:px-[3.4rem]         `} >

            <div className="border-0 border-solid border-red-600">

                <div className="h-[7rem] w-[7rem] lg:w-[9.8rem] lg:h-[9.8rem] xl:w-[11.4rem] xl:h-[11.4rem] rounded-[50%]  border-0 border-solid border-red-600 relative overflow-hidden">  

                    <Image className="block"  src={data.doctorID.uuid.profilePhotoUrl || "/defaultProfile.jpg"} alt="logo" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                
                </div>
            </div>


            <div className="border-0 border-solid border-red-600 space-y-[0.2rem] lg:space-y-[0.7rem] xl:space-y-[1.4rem] ">
                <p className={`text-[1.44rem] lg:text-[1.94rem] ${textStylesBody} ${colorStyles.textColor} `}>{day}/{month}/{year}, {hour}:{min} {period} </p>
                <p className={`text-[1.44rem] lg:text-[1.94rem] capitalize ${textStylesBody} ${colorStyles.textColor} `}>Dr.{data.doctorID.uuid.name}</p>
                <p className={`text-[1.44rem] lg:text-[1.94rem] capitalize ${textStylesBody} ${colorStyles.textColor} `}>{data.doctorID.speciality}</p>
            </div>

            <div className="border-0 border-solid border-red-600 mt-[3.8rem] lg:mt-[6.2rem] xl:mt-[7.5rem]">

                <button 
                onClick={ openModalContent }
                className={` h-fit w-fit px-8  py-2 sm:px-[10rem] md:px-[4.5rem] 2xl:px-[12rem]    ${colorStyles.buttonColor} ${textStylesBody}  ${colorStyles.buttonText} rounded-lg`}>
                    Book
                </button>

            </div>

        </div>
            
    </>
    );
}