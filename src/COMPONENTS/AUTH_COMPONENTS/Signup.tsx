'use client'

import Image from "next/image";
import { baseTextColor } from "../GENERAL_STYLES/general";
import Logo from "../HOMEPAGE/Logo";
import {  useForm } from "react-hook-form";
import { errorStyle } from "./FormErrorStyles";
import { useState } from "react";
import useSignup from "@/DATA_FETCHING/AUTH/hooks/useSignup";
import { useRouter } from "next/navigation";
import ButtonSpinner from "../GLOBAL_COMPONENTS/ButtonSpinner";






enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}


interface formInputTypes {
    firstName: string
    lastName: string
    username: string
    email: string
    gender: GenderEnum
    dob:Date
    address: string
    password: string
    cpassword: string
}
 
 
export default function Signup() {


    const router = useRouter()

    const { register,formState:{errors}, handleSubmit, } = useForm<formInputTypes>()
    const[showPassword,setShowPassword] = useState(false)


    const mutation =  useSignup();
    
    async function onSubmitForm(data:any){


        const res = mutation.mutateAsync(data)
        const resData = await res;

       if(resData) router.push(`verifyEmail/${resData.email}`)
 
    }

    

    return (
        <>
            <div className={`grid lg:grid-cols-[40fr,60fr] text-[${baseTextColor.replaceAll('"'," ") }]  text-xl xl:text-2xl 2xl:text-3xl`}>

                {/**grid 1 */}
                <div className="relative h-[30dvh] lg:h-full w-full  "> 
                    <Image alt="image of doctors" src={"/formimage.jpg"} fill style={{objectFit:"cover"}}/>

                    <div className="absolute z-20 ">
                        <Logo/>
                    </div>

                    <div className="absolute z-10 bg-[rgb(0,0,0,0.5)] h-full w-full flex justify-center items-center ">

                        <div className=" space-y-4">
                            <h1 className={`text-white text-4xl xl:text-5xl 2xl:text-6xl font-medium  text-center font-sans 
                                    tracking-tight`}>
                                        Get acess to quality doctors at your convinience
                            </h1>

                            <div className="w-full flex justify-center">
                                <p className="  text-white text-2xl lg:text-2xl   font-sans text-center lg:w-[60%] 2xl:w-[50%] tracking-tight font-medium">Book an appointment with the doctor you want at the time you are free ! </p>
                            </div>
                        </div>

                    </div>

                </div>

                    {/**grid 2 */}
                <div className="h-fit  w-full flex justify-center items-center  ">

                    <div className=" w-full ">
                       
                        <div className=" space-y-4 md:space-y-8 mt-6 lg:mt-8">

                            <h2 className={` text-4xl xl:text-5xl 2xl:text-6xl font-medium  text-center font-sans 
                                 tracking-tight`}>
                                Join Zecomedical
                            </h2>

                            <p className="text-xl xl:text-2xl 2xl:text-3xl   text-center  ">Already have an account ? <span className=" underline text-[rgb(36,49,47,0.7)]">signin</span></p>

                        </div>


                        <form action="" 
                            onSubmit={handleSubmit(onSubmitForm)}
                            className=" px-4 sm:px-52 2xl:px-[26rem] pb-12 lg:pb-16 space-y-6 lg:space-y-12  mt-12 lg:mt-14 2xl:mt-20 ">



                            <div className="flex gap-x-4 sm:gap-x-8 ">

                                <div className="flex flex-col  w-full transition-all duration-75">

                                    <label htmlFor="firstName">First name</label>
                                    <input 
                                        required type="text"  className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`} 

                                        {...register("firstName", { 
                                            required:true,
                                            pattern:/^[A-Za-z0-9\s]+$/i,
                                            max:35,
                                            min:1
                                        })}
                                        aria-invalid={errors.firstName ? "true" : "false"}
                                    />

                                    {errors.firstName?.type === "pattern" && (
                                        <p className={`${errorStyle}  `} role="alert">firstname should include only letters</p>
                                    )}

                                    {errors.firstName?.type === "min" && (
                                        <p className={`${errorStyle}`} role="alert">firstname should have atleast one letter</p>
                                    )}

                                    {errors.firstName?.type === "max" && (
                                        <p  className={`${errorStyle}`} role="alert">firstname should have atmost 35 letters</p>
                                    )}



                                </div>




                                <div className="flex flex-col  w-full">
                                    <label htmlFor="lastName">Last name</label>
                                    <input 
                                        required type="text" 
                                        className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                        {...register("lastName", { 
                                            required:true,
                                            pattern:/^[A-Za-z0-9/s]+$/i,
                                            max:35,
                                            min:1
                                        })}
                                        aria-invalid={errors.lastName ? "true" : "false"}
                                    />

                                    {errors.lastName?.type === "pattern" && (
                                        <p className={`${errorStyle}`} role="alert">lastname should include only letters</p>
                                    )}

                                    {errors.lastName?.type === "min" && (
                                        <p className={`${errorStyle}`} role="alert">lastname should have atleast one letter</p>
                                    )}

                                    {errors.lastName?.type === "max" && (
                                        <p  className={`${errorStyle}`} role="alert">lastname should have atmost 35 letters</p>
                                    )}

                                </div>


                            </div>




                            <div className={` flex flex-col `}>
                                <label htmlFor="username">username</label>
                                <input 
                                    required type="text" 
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("username", { 
                                        required:true,
                                        pattern:/^[^<>]+$/i,
                                        max:35,
                                        min:1
                                    })}
                                    aria-invalid={errors.username ? "true" : "false"}
                                />


                                {errors.username?.type === "pattern" && (
                                    <p className={`${errorStyle}`} role="alert">username should include only letters</p>
                                )}

                                {errors.username?.type === "min" && (
                                    <p className={`${errorStyle}`} role="alert">username should have atleast one letter</p>
                                )}

                                {errors.username?.type === "max" && (
                                    <p  className={`${errorStyle}`} role="alert">username should have atmost 35 letters</p>
                                )}

                            </div>





                            <div className={` flex flex-col`}>
                                <label htmlFor="email">Email</label>
                                <input 
                                    required type="email" 
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("email", { 
                                        required:true,
                                    })}
                                    aria-invalid={errors.email ? "true" : "false"}
                                    />
                            </div>




                            <div className={` flex flex-col`}>
                                <label htmlFor="gender">Gender</label>
                                <select id="gender"
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("gender")}
                                >

                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                    <option value="other">other</option>

                                </select>

                            </div>



                            <div className={` flex flex-col`}>
                                <label htmlFor="dob">Date of birth</label>
                                <input 
                                    required type="date" 
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("dob")}
                                />
                            </div>


                           

                           <div className={` flex flex-col`}>
                                <label htmlFor="address">Address</label>
                                <input 
                                    required type="text" 
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("address", { 
                                        required:true,
                                        pattern:/^[A-Za-z0-9/s]+$/i,
                                        max:35,
                                        min:1
                                    })}
                                    aria-invalid={errors.address ? "true" : "false"}  
                                />

                                {errors.address?.type === "pattern" && (
                                    <p className={`${errorStyle}`} role="alert">address should include only letters</p>
                                )}

                                {errors.address?.type === "min" && (
                                    <p className={`${errorStyle}`} role="alert">address should have atleast one letter</p>
                                )}

                                {errors.address?.type === "max" && (
                                    <p  className={`${errorStyle}`} role="alert">address should have atmost 35 letters</p>
                                )}    
                           </div>




                           <div className={` flex flex-col`}>
                                <label htmlFor="password">Password</label>
                                <input 
                                    required  type={showPassword ? "text":"password"} 
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}

                                    {...register("password", { 
                                        required:true,
                                        pattern:/^[^<>]+$/i,
                                        minLength:8
                                    })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                />

                                {errors.password?.type === "pattern" && (
                                    <p className={`${errorStyle}`} role="alert">password cannot include those characters</p>
                                )}

                                {errors.password?.type === "minLength" && (
                                    <p className={`${errorStyle}`} role="alert">password should be atleast 8 characters</p>
                                )}

                           </div>



                           

                           <div className="flex gap-x-2"> 

                              <input onChange={ () => setShowPassword(v => !v) }   type="checkbox" name="" id="" 
                              className=""
                              />
                              <label htmlFor="show">show password</label>
                           </div>



                            <div>
                                <button 
                                    aria-disabled={mutation.isPending}
                                    className={ ` 
                                    ${mutation.isPending ? "bg-[#666f6d] cursor-not-allowed " : `bg-[#24312F]`}
                                    text-white text-center w-[100%] h-[3.8rem] md:h-[4.6rem] rounded-lg shadow-lg
                                    transition-all delay-75 duration-75
                                    xl:hover:scale-95
                                `}>
                                    Signup && {mutation.isPending && <ButtonSpinner/>}
                                </button>
                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}