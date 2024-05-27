import { useMutation } from "@tanstack/react-query";
import { startConsultation } from "../functions/startConsultation";


export function useStartConsultation(){

    const mutation = useMutation({
        mutationFn: (patientID:number) => startConsultation(patientID)
    })

    return mutation;
}