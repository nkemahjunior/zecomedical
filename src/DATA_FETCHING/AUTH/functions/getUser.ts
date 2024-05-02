import { BASE_URL } from "../../utills/constants";


export async function getUser(){

    try {
        const res = await fetch(`${BASE_URL}/auth/session`,{

            credentials:'include',
            headers:{
                //"X-XSRF-TOKEN":csrf,
                "Content-Type": "application/json",
            },
            method:"GET",
    
        })

        
        const data = await res.json();
        
    
        return data
    
    } catch (error) {
        console.log(error);
    }
}