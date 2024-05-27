import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { getCookie } from "@/DATA_FETCHING/utills/helpers";
import { testResults } from "@/TYPES/Lab/laboratories";
import { requestResponse } from "@/TYPES/RequestTypes/RequestResponse";
import toast from "react-hot-toast";


export async function postLabMicrobiologyTestResults(data:testResults ){
    try {
        
        const csrf = getCookie("XSRF-TOKEN")

        const res = await fetch(`${BASE_URL}/lab/microbiology/results`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            method:"POST"
        })

        const resData:requestResponse = await res.json()

        if(resData.status == 201) toast.success(resData.message)
        else toast.error(resData.message)

        return resData;

    } catch (error) {
        console.log("error");
    }
}








export async function postLabBloodBankTestResults(data:testResults ){
    try {
        
        const csrf = getCookie("XSRF-TOKEN")

        const res = await fetch(`${BASE_URL}/lab/bloodBank/results`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            method:"POST"
        })

        const resData:requestResponse = await res.json()

        if(resData.status == 201) toast.success(resData.message)
        else toast.error(resData.message)

        return resData;

    } catch (error) {
        console.log("error");
    }
}






export async function postLabImmunologyTestResults(data:testResults ){
    try {
        
        const csrf = getCookie("XSRF-TOKEN")

        const res = await fetch(`${BASE_URL}/lab/immunology/results`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            method:"POST"
        })

        const resData:requestResponse = await res.json()

        if(resData.status == 201) toast.success(resData.message)
        else toast.error(resData.message)

        return resData;

    } catch (error) {
        console.log("error");
    }
}





export async function postLabParasitologyTestResults(data:testResults ){
    try {
        
        const csrf = getCookie("XSRF-TOKEN")

        const res = await fetch(`${BASE_URL}/lab/parasitology/results`,{
            credentials:"include",
            headers:{
                "X-XSRF-TOKEN":`${csrf}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            method:"POST"
        })

        const resData:requestResponse = await res.json()

        if(resData.status == 201) toast.success(resData.message)
        else toast.error(resData.message)

        return resData;

    } catch (error) {
        console.log("error");
    }
}