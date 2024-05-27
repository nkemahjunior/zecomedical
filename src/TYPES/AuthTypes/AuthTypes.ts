import { UUID } from "crypto";


export enum roles{
    ADMIN=1 ,
    DOCTOR,
    PATIENT,
    UNVERIFIED,
    VERIFIED,
    LAB //lab technician
}

export enum labDepartments{
  MICROBIOLOGY = 1,
  PARASITOLOGY,
  IMMUNOLOGY,
  BLOODBANK
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
  profilePhotoUrl:string

}


export interface labTechnicianType{
  id: number,
  userID: {
      id: number
      name: string
      username: string
      gender:string
      dob: string
      address: string
      email: string
      password: string
      role: {
          id: roles.LAB,
          roles: string
      },
      isAuthenticated: boolean
      verified:boolean
      profilePhotoUrl: string
  },
  labDepartment: {
      id: number
      name: string
  }
}

export interface signupReturn{
  status:number
  message:string
  email:string
}

export interface roleType{
  role: { id: Number , roles: string }
}