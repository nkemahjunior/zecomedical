import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { DoctorsAvailablePaginated } from "@/TYPES/Patient/PatientTypes";
import { cookies } from "next/headers";



export async function getAvailableDoctors(page:number){

    try {

        //console.log("yessssssssssss this is my page :" + page);
        
        const res = await fetch(`${BASE_URL}/patient/available_doctors?page=${page}&size=10`,{

            credentials:"include",

        })

        //console.log(res);

       const data:DoctorsAvailablePaginated = await res.json()

       //console.log(data);

        return data;
        
    } catch (error) {
        console.log(error);
    }
}




export async function getAvailableDoctorsHome(){

    try {
        
        // fetch 3 available doctors for the patient home page
        const res = await fetch(`${BASE_URL}/patient/available_doctors?page=0&size=3`,{

            next:{
                revalidate:600 // cache for 10 mins
                
            },
            credentials:"include",

        })

        //console.log(res);

       const data:DoctorsAvailablePaginated = await res.json()

       //console.log(data);

        return data;
        
    } catch (error) {
        console.log(error);
    }
}