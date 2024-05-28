"use client"

import { availableLabTestResults, checkLabResultsType } from "@/TYPES/Doctor/doctorTypes"
import { createContext, useState } from "react"


export interface mainDoctorContextType{
    pendingLabResultsCheck :boolean
    setPendingLabResultsCheck :(arg:boolean) => void

    pendingLabResults :checkLabResultsType[]
    setPendingLabResults :(arg:checkLabResultsType[]) => void

    completedResults:availableLabTestResults[]
    setCompletedLabResults: (arg:availableLabTestResults[]) => void
}


export const DoctorContext = createContext<mainDoctorContextType | null>(null)


export function DoctorProvider({children}:{children:React.ReactNode}){

    const [pendingLabResultsCheck, setPendingLabResultsCheck] = useState(false)
    const [pendingLabResults,setPendingLabResults] = useState<checkLabResultsType[] | []>([])
    const [completedResults, setCompletedLabResults] = useState<availableLabTestResults[] | []>([])


    return(
        <DoctorContext.Provider value={{pendingLabResultsCheck,setPendingLabResultsCheck, pendingLabResults,setPendingLabResults, completedResults, setCompletedLabResults}}>
            {children}
        </DoctorContext.Provider>
    )
}

