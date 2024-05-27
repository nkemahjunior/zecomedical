import { useMutation } from "@tanstack/react-query";
import { signout } from "../functions/signout";
import { useRouter } from "next/navigation";


export function useSignout(){

    const router = useRouter()

    const mutation = useMutation({
        mutationFn: signout,
        onSuccess:() => router.replace("/auth/signin")
    })

    return mutation;
}