

export enum roles{
    ADMIN=1,
    DOCTOR,
    PATIENT,
    UNVERIFIED,
    VERIFIED,
    LAB //lab technician
}

export interface Users{
    
    name:String
    username:String
    gender:String
    year:Number
    month:Number
    day:Number
    address:String
    email:String
    password:String
    //role:{id:roles}
    
         
}