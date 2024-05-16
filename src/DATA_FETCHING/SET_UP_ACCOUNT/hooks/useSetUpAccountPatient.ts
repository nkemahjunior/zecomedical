import { patientAccountType } from "@/TYPES/setUpAccountTypes/setUpAccountTypes";
import { useMutation } from "@tanstack/react-query";
import { setUpAccountPatient } from "../functions/setUpAccount";



export function useSetUpAccountPatient(){

    const mutation = useMutation({
        mutationFn : (data:patientAccountType) => setUpAccountPatient(data),
    })

    return mutation;
}