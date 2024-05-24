'use client'

import { createContext, useState } from "react"



export interface doctorContextTypes{
    open : boolean
    setOpen:(arg:boolean) => void

    content: React.ReactNode
    setContent: (arg:React.ReactNode) => void
}



export const DoctorModalContext = createContext<doctorContextTypes | null>(null)


 
export default function DoctorModalProvider({children}:{children:React.ReactNode}) {

    const [open,setOpen] = useState(false)
    const [content, setContent] = useState<React.ReactNode>(null)

    return (
        <DoctorModalContext.Provider value={{open, setOpen, content, setContent}}>
            {children}
        </DoctorModalContext.Provider>
    );
}