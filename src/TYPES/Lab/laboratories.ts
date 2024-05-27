import { pageable, sort } from "../General/springBootPagination"

export enum labDepts{
    MICROBIOLOGY=1,
    PARASITOLOGY,
    IMMUNOLOGY,
    BLOODBANK

}


export interface labRequestType{

    doctorID: {
        speciality: string,
        doctor_id: number,
        uuid: {
            gender: string,
            profilePhotoUrl: string
            name: string
        }
    },
    notes: string
    completed: boolean
    labTestRequest: string
    patientName: string
    creationTimestamp: string
    id: number
    result: boolean

}

export interface labRequestsPaginatedType{
    content:labRequestType[]
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


export interface testResults{
    
    id:number
    result :boolean
    completed : boolean
    notes:string
}