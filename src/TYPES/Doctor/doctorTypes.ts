import { UUID } from "crypto"
import { pageable, sort } from "../General/springBootPagination"
import { requestResponse } from "../RequestTypes/RequestResponse"


export interface createAppointmentType {
    startDay:number
    startMonth:number
    startYear:number
  
    openHour:number
    openMin:number 
  
    openPeriod: "am" | "pm"
    endPeriod: "am" | "pm"
  
    closeHour:number
    closeMin:number
  
    endDay:number
    endMonth:number
    endYear:number
  
    
}




 export interface createAppointmentReq{
    startYear : number
    startMonth : number
    startDayNumber : number
   
    endYear : number
    endMonth : number
    endDayNumber : number
   
    time_from_hour : number
    time_from_min : number
   
    time_to_hour : number
    time_to_min : number
     
 }



 export interface appointmentReqType{
   
        id: number,
        status: string,
        reason: string,
        complain_notes:string,
        rende_vouz: null,
       // doctorID: null,
        patient_id: {
            patientID: {
                name: string
            },
            id: number
        },
        //appointment_id: null,
        dateTime: string
    
 }


 export interface appointmentReqPaginated{
   
        content: appointmentReqType[]
        pageable : pageable

        totalPages: number,
        totalElements: number,
        last: boolean,
        first: boolean,
        size: number,
        number: number,
    
        sort:sort,
    
        numberOfElements: number,
        empty: boolean
    
 }

 export interface startConsultationResponseType extends requestResponse{
    consultationID:number
 }


 export interface changeAppointmentType{
    appointmentId:number
    status:string
}

export interface pauseConsultationType{
    consultationID:number,
    diagnosisNotes:string | null
    prescribedDrugs:string | null
}


export interface pauseConsultationResponseType{
    status:number
    message:string
    id:number
    patientID:number
    patientName:string
    diagnosisNotes:string
    labResultsBloodBank:string
 
    labResultsImmunology:string
 
    labResultsMicrobiology:string
 
    labResultsParasitology:string
 
    // private Boolean sessionFinished;
 
    medicinePrescribed:string
 
    // private String status;
}


export interface sendToLabType{

 labName:string
 patientID:number
 patientName:string
 labTestRequest:string[]

}

export interface sendToLabResponse{
    status:number
    message:string
    consultationID:string
}



export interface checkLabResultsType{

    status?: number
    message?:string
    id:number
    completed:boolean
    waiting:boolean
    patientID:number
    doctorID:number
    labName:string
    dateTime:string
    consultationID:string

}

export interface savePendingLabReqType{
    labName:string
    patientID:number
    consultationID:string
}


export interface consultationType{

    diagnosisNotes: string | null,
    comeForCheckup: string | null,
    checkupDate: string | null,
    sessionFinished: boolean
    medicinePrescribed: string | null
    labResultsBloodBank: string | null 
    labResultsMicrobiology: string | null 
    labResultsImmunology: string | null 
    labResultsParasitology: string | null 
    id: number,
    timestamp: string

}




export interface resumeConsultationType extends consultationType  {

    status:number
    message:string
    patientID:number,
    patientName:string
}



export interface finishConsultationType{
    patientID:number
    diagnosisNotes:string
    comeForCheckup:boolean
    checkupYear:number | null
    checkupMonth:number | null
    checkupDay:number | null
    checkupHour:number | null
    checkupMin:number | null
    medicinePrescribed:string
}



export interface availableLabTestResults{
    
    
    id: number,
    consultation:consultationType
    patientName: string
    patientID: {
        patientID: {
            name: string
        },
        id: number
    },
    
    labTestRequest: string
    result: boolean
    completed: boolean
    creationTimestamp: string
    notes: string
    labDepartment: {
        id: number,
        name: string
    }


}