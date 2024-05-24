import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAcceptedAppointmentRequest, getAppointmentRequests } from "../functions/getAppointmentRequest";


export function useGetAppointmentRequests(page:number){

    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey:["appnReq",page],
        queryFn: () => getAppointmentRequests(page),
        
    })

        //prefetch the next paginated page
        queryClient.prefetchQuery({
            queryKey:[page + 1]
        })
    

    return query;
}



export function useGetAcceptedUpcomingRequests(page:number){

    const query = useQuery({
        queryKey:["appnReqAccepted"],
        queryFn: () => getAcceptedAppointmentRequest(page)
    })

    return query;
}