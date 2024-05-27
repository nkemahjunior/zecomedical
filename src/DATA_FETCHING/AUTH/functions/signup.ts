
import { signupReturn } from "@/TYPES/AuthTypes/AuthTypes"
import { BASE_URL } from "../../utills/constants"
import toast from "react-hot-toast"





export interface signupData{
    
    firstName: String
    lastName: String
    username: String
    email: String
    gender: String
    dob: String
    address: String
    password: String
    
}



export async function signup(incomingData:signupData):Promise<signupReturn | undefined>{

    try{
        //const value = cookies().get('name')?.value

        const dataToSend = {

            name:       incomingData.firstName.replaceAll(" ","_") +"_"+incomingData.lastName.replaceAll(" ","_"),
            username:   incomingData.username,
            gender:     incomingData.gender,
            year:       Number(incomingData.dob.substring(0,4)),
            month:      Number(incomingData.dob.substring(5,7)),
            day:        Number(incomingData.dob.slice(8)),
            address:    incomingData.address,
            email:      incomingData.email,
            password:   incomingData.password,
            //role:       {id: roles.UNVERIFIED}, backend will handle this
        
        }

    

        const res = await fetch(`${BASE_URL}/auth/signup`,{

            credentials:'include',
            headers:{
                //"X-XSRF-TOKEN":csrf,
                "Content-Type": "application/json",
            },
            method:"POST",
            body:JSON.stringify(dataToSend)

        })

        const data:signupReturn = await res.json()

        //status code conflict
        if(data.status == 409) toast.error(data.message)

        //status code created
        if(data.status == 201) toast.success(data.message)

        return data;

    }catch(error){
        toast.error("error happened, please try again later")
        console.log(error);
    }
}