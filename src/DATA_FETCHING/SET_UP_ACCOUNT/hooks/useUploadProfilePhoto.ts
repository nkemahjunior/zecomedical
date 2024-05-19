import { useMutation } from "@tanstack/react-query";
import { uploadProfilePhoto } from "../functions/setUpAccount";


export function useUploadProfilePhoto(){

    const mutation = useMutation({
        mutationFn : (data:FormData) => uploadProfilePhoto(data)
    })

    return mutation;
}