import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import { doctorAccountType, labTechnicianAccountType, patientAccountType } from "@/TYPES/setUpAccountTypes/setUpAccountTypes";
import toast from "react-hot-toast";



export async function setUpAccountPatient(data:patientAccountType){

    //const cookieStore = cookies() can work only on server, so use custom method to get the cookie

   try{
        const csrf = getCookie("XSRF-TOKEN")

        if(csrf == "" ||  !csrf) throw new Error("bad user")

        const res = await fetch(`${BASE_URL}/account/activatePatientAccount`,{
            credentials:"include",
            headers:{

                "X-XSRF-TOKEN": `${csrf}`,
                "Content-Type": "application/json", 
            },
            body:JSON.stringify(data),
            method:"POST"
            
        })

        const resData:requestResponse = await res.json()
        
        //conflict
        if(resData.status == 409){
            toast.error(resData.message)
            return
        } 

        //created
        if(resData.status == 201) {
            toast.success(resData.message)
        }
        else {
            toast.error("error setting up patient account")
            return
        }
        
       // console.log(resData);

        return resData

    }catch(error){
    console.log(error)
   }

}



export async function setUpAccountDoctor(data:doctorAccountType){

    try{
        const csrf = getCookie("XSRF-TOKEN")

        if(csrf == "" ||  !csrf) throw new Error("bad user")

        const res = await fetch(`${BASE_URL}/account/activateDoctorAccount`,{
            credentials:"include",
            headers:{

                "X-XSRF-TOKEN": `${csrf}`,
                "Content-Type": "application/json", 
            },
            body:JSON.stringify(data),
            method:"POST"
            
        })

        const resData:requestResponse = await res.json()
        
        //conflict
        if(resData.status == 409){
            toast.error(resData.message)
            return
        } 

        //created
        if(resData.status == 201) {
            toast.success(resData.message)
        }
        else {
            toast.error("error setting up patient account")
            return
        }
        
       // console.log(resData);

        return resData

    }catch(error){
    console.log(error)
   }

}


export async function setUpAccountLabTechnician(data:labTechnicianAccountType){

    try{
        const csrf = getCookie("XSRF-TOKEN")

        if(csrf == "" ||  !csrf) throw new Error("bad user")

        const res = await fetch(`${BASE_URL}/account/activateLabTechnicianAccount`,{
            credentials:"include",
            headers:{

                "X-XSRF-TOKEN": `${csrf}`,
                "Content-Type": "application/json", 
            },
            body:JSON.stringify({labDepartment: Number(data.labDepartment)}),
            method:"POST"
            
        })

        const resData:requestResponse = await res.json()
        
        //conflict
        if(resData.status == 409){
            toast.error(resData.message)
            return
        } 

        //created
        if(resData.status == 201) {
            toast.success(resData.message)
        }
        else {
            toast.error("error setting up patient account")
            return
        }
        
       // console.log(resData);

        return resData

    }catch(error){
    console.log(error)
   }
   
}