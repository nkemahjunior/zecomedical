import { useQuery } from "@tanstack/react-query";
import { getPatientInfo } from "../functions/getPatientInfo";


export function useGetPatientInfo(){


    const query = useQuery({
        queryKey:['patInfo'],
        queryFn:getPatientInfo
    })


    return query;
}