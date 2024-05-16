import { doctorAccountType } from "@/TYPES/setUpAccountTypes/setUpAccountTypes";
import { useMutation } from "@tanstack/react-query";
import { setUpAccountDoctor } from "../functions/setUpAccount";


export function useSetUpAccountDoctor(){
    const mutation = useMutation({
        mutationFn : (data:doctorAccountType) => setUpAccountDoctor(data),
    })

    return mutation;
}