import { useQuery } from "@tanstack/react-query";
import { getMedicalHistory } from "../functions/getMedicalHistory";


export function useGetMedicalHistory(patientID:number){

    const query = useQuery({
        queryKey:["medHistory"],
        queryFn: () => getMedicalHistory(patientID)
    })

    return query;
}