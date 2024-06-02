 'use client'

import { contextTypes, ModalContext } from "@/app/ModalProvider";
import { useContext } from "react";
import MedicalHistoryPatient from "../MEDICAL_HISTORY/MedicalHistoryPatient";

 
export default function PatientMedicalHistoryLi() {


    const {setShowModal,setModalContent} = useContext(ModalContext) as contextTypes


    function showMedicalHistoryModal(){
        setModalContent(<MedicalHistoryPatient/>)
        setShowModal(true)
    }



    return (
        <ul onClick={showMedicalHistoryModal} className=" cursor-pointer">
            Medical History   
        </ul>
    );
}