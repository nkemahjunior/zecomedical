import { useQuery } from "@tanstack/react-query";
import { getMedicalHistoryPatient } from "../functions/getMedicalHistoryPatient";


export function useGetMedicalHistoryPatients(){

    const query = useQuery({

        queryKey:["medHistPat"],
        queryFn:getMedicalHistoryPatient
    })

    return query;
}