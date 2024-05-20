

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