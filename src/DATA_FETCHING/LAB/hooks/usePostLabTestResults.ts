import { testResults } from "@/TYPES/Lab/laboratories";
import { useMutation } from "@tanstack/react-query";
import { postLabBloodBankTestResults, postLabImmunologyTestResults, postLabMicrobiologyTestResults, postLabParasitologyTestResults } from "../functions/postLabTestResults";


export function usePostLabMicroiologyTestResults(){

    const mutation = useMutation({
        mutationFn: (data:testResults) => postLabMicrobiologyTestResults(data)
    })

    return mutation;
}



export function usePostLabBloodBankTestResults(){

    const mutation = useMutation({
        mutationFn: (data:testResults) => postLabBloodBankTestResults(data)
    })

    return mutation;
}


export function usePostLabImmunologyTestResults(){

    const mutation = useMutation({
        mutationFn: (data:testResults) => postLabImmunologyTestResults(data)
    })

    return mutation;
}



export function usePostLabParasitologyTestResults(){

    const mutation = useMutation({
        mutationFn: (data:testResults) => postLabParasitologyTestResults(data)
    })

    return mutation;
}