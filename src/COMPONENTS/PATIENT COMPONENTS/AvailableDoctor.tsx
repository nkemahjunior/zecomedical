"use client"

import Image from "next/image";
import { textStylesBody } from "../GENERAL_STYLES/general";
import { useContext } from "react";
import { contextTypes, ModalContext } from "@/app/ModalProvider";
import AvailableDoctorModalDetails from "./AvailableDoctorModalDetails";


 
export default function AvailableDoctor() {

    const {setShowModal,setModalContent} = useContext(ModalContext) as contextTypes


    function openModalContent(){
        setShowModal(true)
        setModalContent(<AvailableDoctorModalDetails/>)

    }

    return (
        <>
        <div className="flex justify-evenly  text-white  border-0 border-solid border-white pt-8 lg:pt-16 " >

            <div className="border-0 border-solid border-red-600">

                <div className="h-[7rem] w-[7rem] lg:w-[9.8rem] lg:h-[9.8rem] xl:w-[11.4rem] xl:h-[11.4rem] rounded-[50%]  border-0 border-solid border-red-600 relative overflow-hidden">  

                    <Image className="block"  src={"/doctor.jpg"} alt="logo" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                
                </div>
            </div>


            <div className="border-0 border-solid border-red-600 space-y-[0.2rem] lg:space-y-[0.7rem] xl:space-y-[1.4rem] ">
                <p className={`text-[1.44rem] lg:text-[1.94rem] ${textStylesBody} text-white`}>April 02, 2024</p>
                <p className={`text-[1.44rem] lg:text-[1.94rem] ${textStylesBody} text-white`}>Dr.Zekoinas Petrovic</p>
                <p className={`text-[1.44rem] lg:text-[1.94rem] ${textStylesBody} text-white`}>Dentist</p>
            </div>

            <div className="border-0 border-solid border-red-600 mt-[3.8rem] lg:mt-[6.2rem] xl:mt-[7.5rem]">

                <button 
                onClick={ openModalContent }
                className={` h-fit w-fit px-8  py-2 sm:px-[10rem] md:px-[4.5rem] 2xl:px-[12rem]    bg-white ${textStylesBody}  text-[#003459] rounded-lg`}>
                    Book
                </button>

            </div>

        </div>
            
    </>
    );
}