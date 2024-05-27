'use client'

import { createContext, useState } from "react"



export interface LabContextTypes{
    
    open : boolean
    setOpen:(arg:boolean) => void

    content: React.ReactNode
    setContent: (arg:React.ReactNode) => void
}



export const LabModalContext = createContext<LabContextTypes | null>(null)


 
export default function LabModalProvider({children}:{children:React.ReactNode}) {

    const [open,setOpen] = useState(false)
    const [content, setContent] = useState<React.ReactNode>(null)

    return (
        <LabModalContext.Provider value={{open, setOpen, content, setContent}}>
            {children}
        </LabModalContext.Provider>
    );
}