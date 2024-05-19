import { UUID } from "crypto";


export enum roles{
    ADMIN=1 ,
    DOCTOR,
    PATIENT,
    UNVERIFIED,
    VERIFIED,
    LAB //lab technician
}

export interface sessionType{

  errorMessage: null | string,
  id: UUID | null,
  name: string | null,
  username: string | null,
  gender: string | null,
  dob: string | null,
  address: string | null,
  email: string | null,
  role: { id: Number , roles: string } | null,
  isAuthenticated: boolean ,
  verified: boolean | null

}

export interface signupReturn{
  status:number
  message:string
  email:string
}

export interface roleType{
  role: { id: Number , roles: string }
}