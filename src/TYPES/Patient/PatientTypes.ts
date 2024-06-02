import { pageable, sort } from "../General/springBootPagination"



export interface patientInfoType{


    weight:number

    bloodGroup:string
    bloodPressure:string
    email:string

    name:string


    username:string

    gender:string

    dob:string

    address:string

    profilePhotoUrl:string



}

export interface DoctorsAvailableType {

    id:number,
    doctorID:{
        doctor_id:number,
        speciality:string
        uuid:{
            gender:string
            profilePhotoUrl:string 
            name:string
        }
    }
    timeFrom:string
    timeTo:string
}

export interface DoctorsAvailablePaginated{

    content : DoctorsAvailableType[],
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


export interface BookAppointmentType {
    reason :{
        checkup: string
        consultation:string
    }

    complain_notes: string
    doctor_id: number
    appointment_id: number
    startYear: number
    startMonth: number
    startDay: number
    
}



export interface patientUpcomingAppointments{

    id: 43,
    status: "PENDING" | "ACCEPTED" | "DECLINED"
    reason: "checkup" | "consultation",
    complain_notes:  string,
    doctorID: {
        speciality:  string,
        doctor_id: number,
        uuid: {
            gender:  string,
            profilePhotoUrl:  string,
            name:  string
        }
    },
    patient_id: string | null
    dateTime: string

}
