"use client"

import { doctorContextTypes, DoctorModalContext} from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import { useContext } from "react";
import { textStylesBody } from "../../GENERAL_STYLES/general";
import TableModalDetails from "./TableModalDetails";


/**
 * This is the modal parent for the doctor section i.e the black blur on the screen
 * The modal content work is just to display the content , and the content comes from the tables
 * the content has the close button, and the table rows trigger this modal to open 
 * 
 * AppointmentRequestTableRow.tsx sets the content in the openTableModal function
 */

 
 
export default function DoctorModalParent() {

    
    const {open,setOpen,content,setContent} = useContext(DoctorModalContext) as doctorContextTypes

    return (
        <div className= {` ${open ? '' : 'hidden'}   border-2 border-solid border-black  absolute top-0 bg-[rgb(0,0,0,0.3)]
        h-full w-full  z-50 ${textStylesBody}   flex justify-center items-center `}
        >
            

        {
            content
        }          

            
        </div>
    );
}