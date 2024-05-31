import { finishConsultationType } from "@/TYPES/Doctor/doctorTypes";
import { useMutation } from "@tanstack/react-query";
import { finishConsultation } from "../functions/finishConsultation";


export function useFinishConsultation(){

    const mutation = useMutation({
        mutationFn: (data:finishConsultationType) => finishConsultation(data)
    })

    return mutation;
}