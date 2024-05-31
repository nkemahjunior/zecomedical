"use client"

import { availableLabTestResults, checkLabResultsType, pauseConsultationResponseType, resumeConsultationType } from "@/TYPES/Doctor/doctorTypes"
import { createContext, useState } from "react"


export interface mainDoctorContextType{
    // pendingLabResultsCheck :boolean
    // setPendingLabResultsCheck :(arg:boolean) => void

    pendingLabResults :checkLabResultsType[]
    setPendingLabResults :(arg:checkLabResultsType[]) => void

    completedResults:availableLabTestResults[]
    setCompletedLabResults: (arg:availableLabTestResults[]) => void

    pausedConsultations: pauseConsultationResponseType[]
    setPausedConsultations:(arg:pauseConsultationResponseType[]) => void
}


export const DoctorContext = createContext<mainDoctorContextType | null>(null)


export function DoctorProvider({children}:{children:React.ReactNode}){

    //const [pendingLabResultsCheck, setPendingLabResultsCheck] = useState(false)
    const [pendingLabResults,setPendingLabResults] = useState<checkLabResultsType[] | []>([])
    const [completedResults, setCompletedLabResults] = useState<availableLabTestResults[] | []>([])
    const [pausedConsultations, setPausedConsultations] = useState<pauseConsultationResponseType[] | []>([])


    return(
        <DoctorContext.Provider value={{ pendingLabResults,setPendingLabResults, completedResults, setCompletedLabResults, pausedConsultations, setPausedConsultations}}>
            {children}
        </DoctorContext.Provider>
    )
}

