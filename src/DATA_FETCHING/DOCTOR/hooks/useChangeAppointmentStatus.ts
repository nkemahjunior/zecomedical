
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeAppointmentStatus } from "../functions/changeAppointmentStatus";
import { changeAppointmentType } from "@/TYPES/Doctor/doctorTypes";
import { useRouter } from "next/navigation";

//appnReq is the key for get appointment requests
export function useChangeAppointmentStatus(){

    const router = useRouter()



    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:( data:changeAppointmentType) => changeAppointmentStatus(data),
        onSettled : () => {
            queryClient.invalidateQueries({
            queryKey:["appnReq"]
        })

        //router.refresh()
        
    }
    })

    return mutation
}

