"use client"
import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import LogoBlack from "@/COMPONENTS/GENERAL_STYLES/LogoBlack";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useSetUpAccountPatient } from "@/DATA_FETCHING/SET_UP_ACCOUNT/hooks/useSetUpAccountPatient";
import { patientAccountType } from "@/TYPES/setUpAccountTypes/setUpAccountTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

/*
interface formInputTypes {
    weight: number
    bloodGroup: string
    bloodPressure: string

}*/
 
 
export default function SetUpAccountPatient() {

    const router = useRouter();
    const { register,formState:{errors}, handleSubmit, } = useForm<patientAccountType>()

    const [loadingSave,setLoadingSave] = useState(false)
    const [loadingSkip,setLoadingSkip] = useState(false)

 


    const mutation = useSetUpAccountPatient()

    async function onSubmitFormSave(data:patientAccountType){

       setLoadingSave(true)
       const res = mutation.mutateAsync(data)
       const resData = await res
       setLoadingSave(false)

       if(resData?.status == 201) router.push("profilePhoto")

    }

    async function onSubmitFormSkip(data:patientAccountType){

        const skipData = {weight: null, bloodGroup: null, bloodPressure: null}
  
        setLoadingSkip(true)
        const res = mutation.mutateAsync(skipData)
        const resData = await res
        setLoadingSkip(false)

        if(resData?.status == 201) router.push("profilePhoto")
    }




    return (
        <div className={`w-screen h-screen  ${textStylesBody} text-black `}>
           <LogoBlack/>

           <div className=" h-[80%] w-full flex justify-center items-center">

                <div className="border-0 border-red-700 border-solid ">
                    <h1 className={`${textStylesH3} text-black mb-8`}>Set up your account</h1>

                    <form action="" className="space-y-6 lg:space-y-12"
                    >
                        
                        <div>
                            <label htmlFor="weight" >weight</label>
                            <input type="number" id="weight" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}
                            {...register("weight")}
                            />
                        </div>

                        <div>
                            <label htmlFor="bloodGroup" id="bloodGroup ">Blood group</label>
                            <select  id="bloodGroup" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}
                            {...register("bloodGroup")}
                            >
                                <option value="A">A+</option>
                                <option value="A">A-</option>
                                <option value="B">B+</option>
                                <option value="B">B-</option>
                                <option value="AB">AB+</option>
                                <option value="AB">AB-</option>
                                <option value="O">O+</option>
                                <option value="O">O-</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="bloodPressure" 
                            >Blood Pressure</label>

                            <input type="number" id="bloodPressure" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}
                            {...register("bloodPressure")}
                            />
                        </div>

                    </form>

                    <div className=" flex gap-x-[2rem] lg:gap-x-0 lg:justify-between mt-8 lg:mt-16">

                        <div className=" w-full h-fit ">
                            <button 
                            onClick={handleSubmit(onSubmitFormSave)}
                                className={`bg-[#24312F] text-white border-2 border-solid border-[#24312F]
                            w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95`}>Save {loadingSave && <ButtonSpinner/>}</button>
                        </div>


                        <div className=" w-full h-fit ">
                            <button
                                onClick={ handleSubmit(onSubmitFormSkip)}
                                className={`bg-white border-2 border-solid border-[#24312F] text-black ${mutation.isPending && " cursor-not-allowed pointer-events-none"}
                            w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95`}>Skip {loadingSkip && <ButtonSpinner/>}</button>
                        </div>

                    </div>

                   




                </div>
           </div>
        </div>
    );
}