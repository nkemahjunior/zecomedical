'use client'

import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useSignout } from "@/DATA_FETCHING/AUTH/hooks/useSignout";
import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

 
 
export default function LogoutLi() {

  

    const mutation = useSignout()
   

    //will navigate to the login page on success
   function signout(){
        mutation.mutate()
    }



    return (
                            
        <ul className="hover:bg-stone-200 transition-colors  py-1 cursor-pointer"
        onClick={signout}
        >
        <li className="ml-8 flex items-baseline gap-x-4"><span><BiLogOut /></span>Log out{mutation.isPending && <ButtonSpinner/>}</li>
    </ul>
    );
}