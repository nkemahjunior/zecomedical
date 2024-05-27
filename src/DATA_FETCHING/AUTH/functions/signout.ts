import { BASE_URL } from "@/DATA_FETCHING/utills/constants";


export async function signout(){

    try {

       const res = await fetch(`${BASE_URL}/auth/signout`,{
        credentials:"include",
        method:"POST"
       }) 

       const resData = res.json()

       return resData;

       
    } catch (error) {
        console.log(error);
    }
}