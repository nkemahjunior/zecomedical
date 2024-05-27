import { sendToLabType } from "@/TYPES/Doctor/doctorTypes";
import { useMutation } from "@tanstack/react-query";
import { sendToLab } from "../functions/sendToLab";


export function useSendToLab(){

    const mutation  = useMutation({
        mutationFn:(data:sendToLabType) => sendToLab(data)
    })

    return mutation
}