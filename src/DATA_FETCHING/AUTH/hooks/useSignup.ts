import { useMutation } from "@tanstack/react-query"
import { signup, signupData } from '../functions/signup';
import toast from "react-hot-toast"

 
 
export default function  useSignup() {
   
    const mutation = useMutation({
        mutationFn:(data:signupData) => signup(data),
        onError: () => toast.error("error signing up"),
      })

    return mutation;
}