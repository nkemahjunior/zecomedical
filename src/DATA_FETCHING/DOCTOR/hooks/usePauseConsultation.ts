import { pauseConsultationType } from "@/TYPES/Doctor/doctorTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getPausedConsultations, pauseConsultation } from "../functions/pauseConsultation";


export function usePauseConsultation(){

    const mutation = useMutation({
        mutationFn: (data:pauseConsultationType) => pauseConsultation(data)
    })

    return mutation;
}


export function useGetPausedConsultations(){

    const query = useQuery({
        queryKey:["pausedClts"],
        queryFn:getPausedConsultations
    })

    return query;
}