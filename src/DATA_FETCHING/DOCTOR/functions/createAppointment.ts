import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { createAppointmentReq, createAppointmentType } from "@/TYPES/Doctor/doctorTypes";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";
import { isAThirtyDayMonth, isAThirtyOneDayMonth, isFebuary, Months } from "../helper/checkMonths";


export async function createAppointmentFN(data:createAppointmentType){

    try {
        
        validateTime(data)
        const numOfDays = calculateNumberOfDays(data)
        //console.log(numOfDays);

    
        if(numOfDays > 6){
            toast.error("can not create bulk appointments for more than 6 days")
            throw new Error("too many days chosen to create an appointment")
        }

        const appointmentArray = generateArrayOfAppointments(data, numOfDays)
 


        const csrf = getCookie("XSRF-TOKEN")
        if(csrf == "" ||  !csrf) throw new Error("bad user")

        const res = await fetch(`${BASE_URL}/doctor/appointment`,{
            credentials:"include",
            headers:{

                "X-XSRF-TOKEN": `${csrf}`,
                "Content-Type": "application/json", 
            },
            body:JSON.stringify(appointmentArray),
            method:"POST"
            
        })

        const resData:requestResponse = await res.json()



        if(resData.status == 201) toast.success(resData.message)
        else toast.error(resData.message)

        console.log(resData);

        return resData


    } catch (error) {
        console.log(error);
    }

}


function generateArrayOfAppointments(data:createAppointmentType, numOfDays:number){


    let appointments:createAppointmentReq[] = []



    let startMonth = Number(data.startMonth)
    let endMonth = Number(data.endMonth)
    let startYear = Number(data.startYear)
    const endYear = Number(data.endYear)

    let inc = 0
    let startDay = Number(data.startDay)


    for( let i = 0 ; i < numOfDays; i++){

        startDay = startDay + inc
        inc = 0 //resetting it, so it does increment thesame as "i" in the for loop, i will increase it back after this for loop
       
        //if we are at the end of febuary, start counting back from 1
        if(    startDay > 28 && isFebuary(startMonth) && startYear % 4 == 0 
            || startDay > 29  && isFebuary(startMonth) && startYear % 4 !== 0 ){

                startDay = 1

                //will not check if we are in the last month of the year, because the last month of the year does not have 28/29 days
           
        }


        //if we are the end of a 30/31 day month, start counting back at 1
        if(startDay > 30 && isAThirtyDayMonth(startMonth) || startDay > 31 && isAThirtyOneDayMonth(startMonth) ){

            startDay = 1 

            if(startMonth == 12){

                startYear = startYear + 1
            }
          
        }


        const appointmentObj = {
            startYear : startYear,
            startMonth : startMonth,
            startDayNumber : startDay,//each appointment starts ion a new day and end on that that day
           
            endYear : endYear,
            endMonth : endMonth,
            endDayNumber : startDay,//each appointment starts ion a new day and end on that that day
           
            time_from_hour : Number(data.openHour),
            time_from_min : Number(data.openMin),
           
            time_to_hour : Number(data.closeHour),
            time_to_min : Number(data.closeMin)
             
        }


        appointments.push(appointmentObj)

        inc = inc + 1;

    }


    return appointments;


}



function calculateNumberOfDays(data:createAppointmentType){
    let numOfDays = 0;

        // adding plus to each so the days are counted exclusive instead of inclusive e.g 29jan-03 feb = 6 days NOT 5days
    if(Number(data.startMonth) == Number(data.endMonth) && Number(data.startYear) == Number(data.endYear)){
        //if the appointment date falls in thesame month and thesame year
     numOfDays = (Number(data.endDay) - Number(data.startDay) ) + 1
     
    }else if( Number(data.startMonth) !== Number(data.endMonth) && Number(data.startYear) == Number(data.endYear) ) {
        // if the appointment date falls in thesame year  but different years

        const days30 = isAThirtyDayMonth(Number(data.startMonth))
        const days31 = isAThirtyOneDayMonth(Number(data.startMonth))
        
        const leapYear = Number(data.startYear) % 4 == 0

        if(days30){
            //if the initial day of the month falls in a 30day month, e.g 28 september to 03 octorber will give 6 days
            //28 to 30 september = 3days + 3days from start of october = 6days
            numOfDays =( 30 - Number(data.startDay) + Number(data.endDay))+1
           
        }

        if(days31){
            //if the initial day of the month falls in a 31day month, e.g 28 september to 03 octorber will give 7 days
            //28 to 31 september = 4days + 3days from start of october = 7days
            numOfDays = (31 - Number(data.startDay) + Number(data.endDay))+1
            
           
        }

        if(leapYear && Number(data.startMonth) == 2){
            numOfDays = (29 - Number(data.startDay) + Number(data.endDay))+1
            
        }

        if(!leapYear && Number(data.startMonth) == 2){
            numOfDays = (28 - Number(data.startDay) + Number(data.endDay))+1
            
        }

    

  
    }else if( Number(data.startYear) !== Number(data.endYear)){
        //appointment will obviously run from decemeber to january here
        numOfDays = (31 - Number(data.startDay) + Number(data.endDay))+1
        
    }

    return numOfDays;

}





function validateTime(data:createAppointmentType){
    
        //enforcing 24hr time format
        if(data.endPeriod == "pm"){
            if(Number(data.closeHour) < 13 || Number(data.closeHour) > 23){
                toast.error("use the 24 hour time format on closing time, check if am or pm is correct")
                throw new Error("wrong time format used")
            }
        }

        //enforcing 24hr time format
        if(data.endPeriod == "am"){
            if(Number(data.closeHour) > 13 || Number(data.closeHour) < 0){
                toast.error("use the 24 hour time format on closing time, check if am or pm is correct")
                throw new Error("wrong time format used")
            }
        }

        //enforcing 24hr time format
        if(data.openPeriod == "am"){
            if(Number(data.openHour) < 0 || Number(data.openHour) > 12){
                toast.error("use the 24 hour time format on opening time ,check if am or pm is correct")
                throw new Error("wrong time format used")
            }
        }


        //enforcing 24hr time format
        if(data.openPeriod == "pm"){
            if(Number(data.openHour) < 13 || Number(data.openHour) > 0){
                toast.error("use the 24 hour time format on opening time ,check if am or pm is correct")
                throw new Error("wrong time format used")
            }
        }


        //enforcing valid date format
        if(Number(data.startMonth) == Number(data.endMonth) && Number(data.startYear) == Number(data.endYear)){
            
            if(Number(data.startDay ) > Number( data.endDay) || Number(data.startMonth) > Number(data.endMonth)){
                toast.error("start day can not be greater than end day in thesame month")
                throw new Error("wrong date format used")
            }
            
        }


        if( Number(data.startYear) == Number(data.endYear)){
            
            if(Number(data.startMonth) > Number(data.endMonth)){
                toast.error("start Month can not be greater than end Month in thesame month")
                throw new Error("wrong date format used")
            }
            
        }



        
        if(Number(data.startMonth) !== Number(data.endMonth) ){

            const presentMonth = Months[Number(data.startMonth)]
            const nextMonth = Months[Number(data.startMonth) + 1]

            /**
             *  when the appointment runs for 2 different months e.g 28 september to 03 october
             * i want to make sure the next month is directly after the previous month e.g september and october 
             * september and november will not be valid, because the appointments will run for more than 6days
             */
            
            if(nextMonth !== Months[Number(data.endMonth)] && presentMonth !== "December" ){

                toast.error("can not create bulk appointments for more than 6 days")
                throw new Error("too many days chosen to create an appointment")
            }
            else if(presentMonth == "December" && Months[Number(data.endMonth)] !== "January" ) {
                toast.error("can not create bulk appointments for more than 6 days")       
                throw new Error("too many days chosen to create an appointment")
            }
            
        }


        if(Number(data.startYear) !== Number(data.endYear)){

            const presentMonth = Months[Number(data.startMonth)]
            const nextMonth = Months[Number(data.startMonth) + 1]

              /**
             * e.g 02-12-2024 to 04-01-2026, is invalid because that is obviously more than 6 days
             */

            if(Number(data.startYear) + 1 !== Number(data.endYear)){
                toast.error("can not create bulk appointments for more than 6 days")       
                throw new Error("too many days chosen to create an appointment")
            }

            /**
             * enforcing the previous if block(startmonth not equal to endmonth block), because in scenarios where the next month is directly after 
             * the previous month, but fall in different years, the above if block will not throw the error, but it should throw an error because an 
             * appointment running for two different years is obviously morethan 6 days
            */

            if(presentMonth !== "December" || presentMonth == "December" && Months[Number(data.endMonth)] !== "January" ) {
                toast.error("can not create bulk appointments for more than 6 days")       
                throw new Error("too many days chosen to create an appointment")
            }
        }

        

}