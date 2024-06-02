'use client'
import { textStylesBody } from "@/COMPONENTS/GENERAL_STYLES/general";
import PatientLogo from "@/COMPONENTS/PATIENT COMPONENTS/Navigation/PatientLogo";
import LabLogo from "./LabLogo";
import { useSignout } from "@/DATA_FETCHING/AUTH/hooks/useSignout";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";




export default function LabNavBar() {

    const mutation = useSignout()
   

    //will navigate to the login page on success
    function signout(){
        mutation.mutate()
    }
   
    

    


    return (
        <>
            {/**NAVIGATION BAR */}
             {/**if you eventually change the height of this nav bar, dont forget to visit the lab layout file */}
                <nav className={`fixed top-0 w-screen z-[100] h-[5.4rem]   
                sm:h-[6rem] 2xl:h-fit  max-w-[100%] 
                border-solid border-0 border-blue-900 bg-[#00171F]
                px-2  sm:px-4   2xl:py-6 ${textStylesBody} text-white
                `} >

            
                <div className={` flex justify-between items-center h-full w-full   pt-1     `   }>

                    <LabLogo/>

                    <button className=" py-2  px-4 rounded-lg text-[#00171F] bg-stone-50 xl:hover:scale-95"
                    onClick={signout}
                    >Logout&nbsp;{mutation.isPending &&  <ButtonSpinner/>} </button>
                </div>
                
            </nav> 

        </>
    );
}