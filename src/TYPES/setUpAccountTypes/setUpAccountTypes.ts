import { roles } from "../AuthTypes/AuthTypes"
import { requestResponse } from "../RequestTypes/RequestResponse"


export interface patientAccountType{
    weight:number | null,
    bloodGroup:string | null
    bloodPressure:string | null

}

export interface doctorAccountType{
    speciality:string
}

export interface labTechnicianAccountType{
    labDepartment:number
}

export interface fileUploadResponse extends requestResponse{
    role:{id:roles, roles:string}
}