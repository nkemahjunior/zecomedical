"use client"

import Modal from "@/COMPONENTS/GLOBAL_COMPONENTS/Modal";
import { createContext, useState } from "react";


export interface contextTypes{
    
    showModal : boolean
    setShowModal:(arg:boolean) => void

    modalContent:React.ReactNode
    setModalContent: (arg:React.ReactNode) => void
}

export const ModalContext = createContext<contextTypes | null>(null)

 


export default function ModalProvider({children}:{children:React.ReactNode}) {



    const [showModal, setShowModal] = useState(false)
    const [modalContent,setModalContent] = useState<React.ReactNode>(null)

    return (
        <ModalContext.Provider value={{showModal, setShowModal,modalContent,setModalContent}}>
        {children}
            
        </ModalContext.Provider>
    );
}