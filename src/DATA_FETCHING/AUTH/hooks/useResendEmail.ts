import { useMutation, useQuery } from "@tanstack/react-query";
import { resendEmail } from "../functions/resendEmail";


export function useResendEmail(){
    


    const mutation = useMutation({
        mutationFn: (email:string) => resendEmail(email)
    })

    return mutation;

}