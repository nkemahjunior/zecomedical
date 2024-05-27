"use client"

import { LabContextTypes, LabModalContext } from "@/app/(LAB)/lab/LabModalProvider";
import { textStylesBody } from "@/COMPONENTS/GENERAL_STYLES/general";
import { useContext } from "react";





export default function LabModalParent() {

    
    const {open,setOpen,content,setContent} = useContext(LabModalContext) as LabContextTypes

    return (
        <div className= {` ${open ? '' : 'hidden'}   border-2 border-solid border-black  fixed top-0 bg-[rgb(0,0,0,0.3)]
        h-full w-full  z-50 ${textStylesBody}   flex justify-center items-center `}
        >
            

        {
            content
        }          

            
        </div>
    );
}