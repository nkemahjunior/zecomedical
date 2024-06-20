import { useQuery } from "@tanstack/react-query";
import { getLabResultsPatient } from "../functions/getLabResultsPatient";



export function useGetLabResultsPatient(){

    const query = useQuery({
        queryKey:["labRePa"],
        queryFn: getLabResultsPatient
    })


    return query;
}