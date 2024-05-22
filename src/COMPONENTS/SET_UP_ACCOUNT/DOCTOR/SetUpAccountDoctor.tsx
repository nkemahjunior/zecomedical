'use client'
import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import LogoBlack from "@/COMPONENTS/GENERAL_STYLES/LogoBlack";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useSetUpAccountDoctor } from "@/DATA_FETCHING/SET_UP_ACCOUNT/hooks/useSetUpAccountDoctor";
import { doctorAccountType } from "@/TYPES/setUpAccountTypes/setUpAccountTypes";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";


 
 
export default function SetUpAccountDoctor() {

    const router = useRouter();
    const { register,formState:{errors}, handleSubmit, } = useForm<doctorAccountType>()


    const mutation = useSetUpAccountDoctor()

    async function onSubmitForm(data:doctorAccountType){

        const res = mutation.mutateAsync(data)
        const resData = await res
 
        if(resData?.status == 201) router.push("profilePhoto")
 
    }



    return (
        <div className={`w-screen h-screen  ${textStylesBody} text-black `}>
           <LogoBlack/>

           <div className=" h-[80%] w-full flex justify-center items-center">

                <div className="border-0 border-red-700 border-solid ">
                    <h1 className={`${textStylesH3} text-black mb-8`}>What&apos;s your speciality?</h1>

                    <form action="" className="space-y-6 lg:space-y-12">
                        

                        
                        <div>
                            <label htmlFor="speciality" 
                            >Speciality</label>
                            

                            <input type="text" id="speciality" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}
                            {...register("speciality")}
                            />
                        </div>

                    </form>


                    <div className="  mt-8 lg:mt-16">

                        <div 
                            onClick={handleSubmit(onSubmitForm)}
                            className=" w-full h-fit ">
                            <button className={`bg-[#24312F] text-white ${mutation.isPending && " cursor-not-allowed pointer-events-none"}
                            w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95`}>Save {mutation.isPending && <ButtonSpinner/>} </button>
                        </div>
                        
                    </div>




                </div>
           </div>
        </div>
    );
}