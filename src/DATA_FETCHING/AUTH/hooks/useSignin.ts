import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin, signinData } from "../functions/signin";
import toast from "react-hot-toast";


export default  function  useSignin() {

    const queryClient  = useQueryClient();
   
    const mutation = useMutation({
        mutationFn:(data:signinData) => signin(data),
        onError: () => toast.error("error signing in"),
        onSuccess :() =>  queryClient.invalidateQueries({queryKey:["session"]})
      })

    return mutation;
}