import { labRequestType } from "../Lab/laboratories"


export interface medicalHistoryResponseType {
    doctorID: {
        speciality: string,
        doctor_id: number,
        uuid: {
            gender: string,
            profilePhotoUrl: string
            name: string
        }
    },
    diagnosisNotes: string | null,
    comeForCheckup: string | null,
    checkupDate: string | null,
    sessionFinished: boolean
    medicinePrescribed: string
    labResultsBloodBank: labRequestType[] | null 
    labResultsMicrobiology: labRequestType[] | null 
    labResultsImmunology: labRequestType[] | null 
    labResultsParasitology: labRequestType[] | null 
    id: number,
    timestamp: string
} 

/**add doctor id to this types */