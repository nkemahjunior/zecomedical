 'use client'

import { contextTypes, ModalContext } from "@/app/ModalProvider";
import { useContext } from "react";
import LabResultsModalDetails from "../LabResultsModalDetails";


 
export default function LabResultsPatientLi() {


    const {setShowModal,setModalContent} = useContext(ModalContext) as contextTypes


    function showLabResultsPatient(){
        setModalContent(<LabResultsModalDetails/>)
        setShowModal(true)
    }



    return (
        <ul onClick={showLabResultsPatient} className=" cursor-pointer">
            Lab Results   
        </ul>
    );
}