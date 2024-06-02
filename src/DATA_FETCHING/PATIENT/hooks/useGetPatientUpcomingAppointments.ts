import { useQuery } from "@tanstack/react-query";
import { getPatientUpcomingAppointments } from "../functions/getPatientUpcomingAppointment";



export function useGetPatientUpcomingAppointments(){


    const query = useQuery({
        queryKey:["upcmxappt"],
        queryFn:getPatientUpcomingAppointments
    })


    return query
}