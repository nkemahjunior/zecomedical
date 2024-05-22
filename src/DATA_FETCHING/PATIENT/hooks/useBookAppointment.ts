import { BookAppointmentType } from "@/TYPES/Patient/PatientTypes";
import { useMutation } from "@tanstack/react-query";
import { bookAppointment } from "../functions/bookAppointment";


export function useBookAppointment(){

    const mutation = useMutation({
        mutationFn: (data:BookAppointmentType) => bookAppointment(data)
    })

    return mutation
}