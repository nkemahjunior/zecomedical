import { useMutation } from "@tanstack/react-query"

import toast from "react-hot-toast"
import { signup, signupData } from "../functions/signup";

 
 
export default function  useSignup() {

   
    const mutation = useMutation({
        mutationFn:(data:signupData) => signup(data),
        onError: () => toast.error("error signing up"),
        
      })

    return mutation;
}