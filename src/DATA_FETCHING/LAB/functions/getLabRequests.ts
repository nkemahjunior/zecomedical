import { BASE_URL } from "@/DATA_FETCHING/utills/constants";
import { labRequestsPaginatedType } from "@/TYPES/Lab/laboratories";



export async function getLabMicrobiologyRequests(page:number, searchValue:string){

    try {

        let res;

        //console.log(searchValue + " we outside");

        if(searchValue.length >= 3){
           // console.log(searchValue);
            

            res = await fetch(`${BASE_URL}/lab/microbiology/request/${searchValue.replaceAll(" ","_")}?page=${page}&size=10`,{
                credentials:"include"
            })

        }else{
            

            res = await fetch(`${BASE_URL}/lab/microbiology/request?page=${page}&size=10`,{
                credentials:"include"
            })
        }


    
        const data:labRequestsPaginatedType = await res.json()

    
    
        return data;

    } catch (error) {
        console.log(error);
    }
}






export async function getLabBloodBankRequests(page:number, searchValue:string){

    try {

        let res;

        //console.log(searchValue + " we outside");

        if(searchValue.length >= 3){
           // console.log(searchValue);
            

            res = await fetch(`${BASE_URL}/lab/bloodBank/request/${searchValue.replaceAll(" ","_")}?page=${page}&size=10`,{
                credentials:"include"
            })

        }else{
            

            res = await fetch(`${BASE_URL}/lab/bloodBank/request?page=${page}&size=10`,{
                credentials:"include"
            })
        }


    
        const data:labRequestsPaginatedType = await res.json()

    
    
        return data;

    } catch (error) {
        console.log(error);
    }
}







export async function getLabImmunologyRequests(page:number, searchValue:string){

    try {

        let res;

        //console.log(searchValue + " we outside");

        if(searchValue.length >= 3){
           // console.log(searchValue);
            

            res = await fetch(`${BASE_URL}/lab/immunology/request/${searchValue.replaceAll(" ","_")}?page=${page}&size=10`,{
                credentials:"include"
            })

        }else{
            

            res = await fetch(`${BASE_URL}/lab/immunology/request?page=${page}&size=10`,{
                credentials:"include"
            })
        }


    
        const data:labRequestsPaginatedType = await res.json()

    
    
        return data;

    } catch (error) {
        console.log(error);
    }
}





export async function getLabParasitologyRequests(page:number, searchValue:string){

    try {

        let res;

        //console.log(searchValue + " we outside");

        if(searchValue.length >= 3){
           // console.log(searchValue);
            

            res = await fetch(`${BASE_URL}/lab/parasitology/request/${searchValue.replaceAll(" ","_")}?page=${page}&size=10`,{
                credentials:"include"
            })

        }else{
            

            res = await fetch(`${BASE_URL}/lab/parasitology/request?page=${page}&size=10`,{
                credentials:"include"
            })
        }


    
        const data:labRequestsPaginatedType = await res.json()

    
    
        return data;

    } catch (error) {
        console.log(error);
    }
}