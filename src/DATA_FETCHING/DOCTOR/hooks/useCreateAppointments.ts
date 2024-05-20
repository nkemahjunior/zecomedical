import { useMutation } from "@tanstack/react-query";
import { createAppointmentFN } from "../functions/createAppointment";
import { createAppointmentType } from "@/TYPES/Doctor/doctorTypes";


export function useCreateAppointments(){

    const mutation = useMutation({
        mutationFn : (data:createAppointmentType) => createAppointmentFN(data)
    })

    return mutation;
}