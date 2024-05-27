"use client"


import { baseTextColor } from "../GENERAL_STYLES/general";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { roles } from "@/TYPES/AuthTypes/AuthTypes";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useSignin from "@/DATA_FETCHING/AUTH/hooks/useSignin";
import ButtonSpinner from "../GLOBAL_COMPONENTS/ButtonSpinner";
import Link from "next/link";




interface formInputTypes {
    username: string
    password: string
}
 
 
export default  function Signin() {

    const router = useRouter()

    const { register,formState:{errors}, handleSubmit, } = useForm<formInputTypes>()
    const[showPassword,setShowPassword] = useState(false)


    const mutation = useSignin();
    
    
    
    async function onSubmitForm(data:any){

        const res =  mutation.mutateAsync(data)
        const user = await res

        //console.log(user);

        if(user){
                        
            if(user.role?.id == roles.UNVERIFIED) router.push(`verifyEmail/${user.email}`) 
            if(user.role?.id == roles.VERIFIED) router.replace("/setUpAccount")
            if(user.role?.id == roles.PATIENT) router.replace("/patient/home")
            if(user.role?.id == roles.DOCTOR) router.replace("/doctor/home")
            if(user.role?.id == roles.LAB) router.replace("/lab")
        }

   
    }


    return (
        <>
            <div className={` text-[${baseTextColor.replaceAll('"'," ") }]  text-xl xl:text-2xl 2xl:text-3xl`}>


                <div className="h-[100dvh]  w-full flex justify-center items-center  ">

                    <div className=" w-full h-fit ">

                        {/* <h2 className={`-mt-[4rem] text-4xl xl:text-5xl 2xl:text-6xl font-medium  text-center font-sans 
                                    tracking-tight`}>
                                        Zecomedical
                        </h2> */}
                       
                        <div className=" space-y-4 md:space-y-8 mt-6 lg:mt-8">

                            <h2 className={` text-4xl xl:text-5xl 2xl:text-6xl font-medium  text-center font-sans 
                                 tracking-tight`}>
                                    Login 
                            </h2>

                            <p className="text-xl xl:text-2xl 2xl:text-3xl   text-center  ">welcome back</p>

                        </div>


                        <form action="" 
                            onSubmit={handleSubmit(onSubmitForm)}
                            className=" px-4 sm:px-52 md:px-56 lg:px-96 xl:px-[36rem] 2xl:px-[64rem] pb-12 lg:pb-16 space-y-6 lg:space-y-12  mt-12 lg:mt-14 2xl:mt-20 ">





                            <div className={` flex flex-col `}>
                                <label htmlFor="username">username</label>
                                <input 
                                    required type="text" 
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("username")}

                                />

                            </div>
                           

                        

                           <div className={` flex flex-col`}>
                                <label htmlFor="password">Password</label>
                                <input 
                                    required  type={showPassword ? "text":"password"} 
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("password")}
                                />
                           </div>


                           
                           <div className="flex gap-x-2"> 

                              <input onChange={ () => setShowPassword(v => !v) }   type="checkbox" name="" id="show" 
                              className=""
                              />
                              <label htmlFor="show">show password</label>
                           </div>



                            <div>
                                <button 
                                    aria-disabled={mutation.isPending}
                                    className={ ` 
                                    ${mutation.isPending ? "bg-[#666f6d] pointer-events-none cursor-not-allowed " : `bg-[#24312F]`}
                                    text-white text-center w-[100%] h-[3.8rem] md:h-[4.6rem] rounded-lg shadow-lg
                                    transition-all delay-75 duration-75
                                    xl:hover:scale-95
                                `}>
                                    Signin {mutation.isPending && <ButtonSpinner/>}
                                </button>
                            </div>


                        </form>



                        <p className="text-xl xl:text-2xl 2xl:text-3xl   text-center  ">Don&apos;t have an account ? <span className=" underline text-[rgb(36,49,47,0.7)]"><Link href={"/auth/signup"}>signup</Link></span></p>
                    </div>

                </div>
            </div>
        </>
    );
}