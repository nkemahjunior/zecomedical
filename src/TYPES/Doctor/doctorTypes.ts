import { pageable, sort } from "../General/springBootPagination"


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


 export interface changeAppointmentType{
    appointmentId:number
    status:string
}


export interface sendToLabType{

 labName:string
 patientID:number
 patientName:string
 labTestRequest:string[]

}
