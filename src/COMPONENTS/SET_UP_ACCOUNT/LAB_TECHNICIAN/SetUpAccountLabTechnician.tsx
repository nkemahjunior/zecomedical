"use client"
import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import LogoBlack from "@/COMPONENTS/GENERAL_STYLES/LogoBlack";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useSetUpAccountLabTech } from "@/DATA_FETCHING/SET_UP_ACCOUNT/hooks/useSetUpAccountLabTech";
import { labDepts } from "@/TYPES/Lab/laboratories";
import { labTechnicianAccountType } from "@/TYPES/setUpAccountTypes/setUpAccountTypes";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

 
 
export default function SetUpAccountLabTechnician() {

    const router = useRouter();
    const { register,formState:{errors}, handleSubmit, } = useForm<labTechnicianAccountType>()

    const mutation = useSetUpAccountLabTech()

    async function onSubmitForm(data:labTechnicianAccountType){
        //console.log(data);
        
       const res = mutation.mutateAsync(data)
       const resData = await res

       if(resData?.status == 201) router.push("profilePhoto")

    }


    return (
        <div className={`w-screen h-screen  ${textStylesBody} text-black `}>
           <LogoBlack/>

           <div className=" h-[80%] w-full flex justify-center items-center">

                <div className="border-0 border-red-700 border-solid ">
                    <h1 className={`${textStylesH3} text-black mb-8`}>Select your lab department</h1>

                    <form action="" className="space-y-6 lg:space-y-12">
                        
                        <div>
                            <label htmlFor="labDept" >Department</label>
                            <select  id="labDept" 
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}
                                {...register("labDepartment")}
                            >
                                <option value={`${labDepts.MICROBIOLOGY}`}>Lab Microbiology</option>
                                <option value={`${labDepts.PARASITOLOGY}`}>Lab Parasitology</option>
                                <option value={`${labDepts.IMMUNOLOGY}`}>Lab Immunology</option>
                                <option value={`${labDepts.BLOODBANK}`}>Lab Bloodbank</option>
                            </select>

                        </div>

                    </form>


                    <div className="  mt-8 lg:mt-16">

                        <div className=" w-full h-fit ">
                            <button 
                                onClick={handleSubmit(onSubmitForm)}
                                className={`bg-[#24312F] text-white 
                            w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95`}>Save {mutation.isPending && <ButtonSpinner/> }</button>
                        </div>
                        
                    </div>




                </div>
           </div>
        </div>
    );
}