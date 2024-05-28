import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkLabResults, savePendingLabRequest, updatePendingLabRequestStatus } from "../functions/labResults";
import { savePendingLabReqType } from "@/TYPES/Doctor/doctorTypes";


export function useGetPendingLabResults(){

    const query = useQuery({
        queryKey:["avlLabRlts"],
        queryFn: checkLabResults
    })

    return query
}



export function useSavePendingLabReq(){

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:(data:savePendingLabReqType) => savePendingLabRequest(data),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey:['avlLabRlts']
        })
    })

    return mutation
}


export function useUpdatePendingLabRequestStatus(){

    const mutation = useMutation({
        mutationFn:(consultationID:string) => updatePendingLabRequestStatus(consultationID)
    })

    return mutation
}