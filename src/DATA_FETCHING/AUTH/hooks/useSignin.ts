import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { signin, signinData } from "../functions/signin";


export default  function  useSignin() {

    const queryClient  = useQueryClient();
   
    const mutation = useMutation({
        mutationFn:(data:signinData) => signin(data),

        onError: () => toast.error("error signing in"),
        //onSuccess :() =>  queryClient.invalidateQueries({queryKey:["session"]})
      })

    return mutation;
}