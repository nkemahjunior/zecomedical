import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAvailableDoctors } from "../functions/getAvailableDoctors";


export function useGetAvailableDoctors(page:number){

    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey:["avlDoc",page],
        queryFn: () => getAvailableDoctors(page)
    })


    //prefetch the next paginated page
    queryClient.prefetchQuery({
        queryKey:[page + 1]
    })

    return query;
}