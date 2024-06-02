 'use client'

import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useSignout } from "@/DATA_FETCHING/AUTH/hooks/useSignout";

 
export default function LogoutLi() {



    const mutation = useSignout()

    function signout(){
        mutation.mutate()
    }

    return (
        <ul onClick={signout}>
            signout&nbsp;{mutation.isPending && <ButtonSpinner/>}
        </ul>
    );
}