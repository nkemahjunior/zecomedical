import { useQuery } from "@tanstack/react-query";
import { getPatientInfo } from "../functions/getPatientInfo";



export function useGetPatientInfo(id:number){

    const query = useQuery({
        queryKey:["patientInfo"],
        queryFn: ()=> getPatientInfo(id)

    })

    return query;
}