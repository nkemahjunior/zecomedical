import { useMutation } from "@tanstack/react-query";
import { deleteUpcomingRequest } from "../functions/deleteUpcomingRequest";


export function useDeleteUpcomingRequest(){


    const mutation = useMutation({
        mutationFn: (id:number) => deleteUpcomingRequest(id)
    })

    return mutation;
}