import { labTechnicianAccountType } from "@/TYPES/setUpAccountTypes/setUpAccountTypes";
import { useMutation } from "@tanstack/react-query";
import { setUpAccountLabTechnician } from "../functions/setUpAccount";

export function useSetUpAccountLabTech(){
    
    const mutation = useMutation({
        mutationFn : (data:labTechnicianAccountType) => setUpAccountLabTechnician(data),
    })

    return mutation;
}