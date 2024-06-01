import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { checkLabResultsAvailable } from "../functions/checkLabResultsAvailable";


export function useCheckLabResultsAvailableFN(){

    const {pendingLabResults} = useContext(DoctorContext) as mainDoctorContextType


    const query = useQuery({
        queryKey:["checkAvlLabRslts",pendingLabResults],
        queryFn: () => checkLabResultsAvailable(pendingLabResults),
        refetchInterval:600000 // refetch every 10 minutes
    })

    return query;
}