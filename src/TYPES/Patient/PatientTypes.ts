import { pageable, sort } from "../General/springBootPagination"


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
