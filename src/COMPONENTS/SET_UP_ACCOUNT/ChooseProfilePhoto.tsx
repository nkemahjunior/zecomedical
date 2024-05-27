"use client"
import Image from "next/image";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import LogoBlack from "../GENERAL_STYLES/LogoBlack";
import {  FormEvent, useRef, useState } from "react";
import { uploadProfilePhoto } from "@/DATA_FETCHING/SET_UP_ACCOUNT/functions/setUpAccount";
import { useUploadProfilePhoto } from "@/DATA_FETCHING/SET_UP_ACCOUNT/hooks/useUploadProfilePhoto";
import { roles } from "@/TYPES/AuthTypes/AuthTypes";
import { useRouter } from "next/navigation";
import ButtonSpinner from "../GLOBAL_COMPONENTS/ButtonSpinner";
import toast from "react-hot-toast";

 
 
export default function ChooseProfilePhoto() {

    const router = useRouter()

    const [imagePreview,setImagePreview] = useState<string>("/defaultProfile.jpg")
    const imageInputRef = useRef<HTMLInputElement>(null)
   


    function getChosenImagePreviewData(){
        try{
            const files = imageInputRef.current?.files
            //console.log(files);
    
            if(files){
                const fileReader = new FileReader()
                fileReader.readAsDataURL(files[0])
                fileReader.addEventListener("load",function(){
                    //console.log(this.result);
                    //if(!this.result) return
                    setImagePreview(this.result!.toString())
                })
            }

        }catch(e){
            console.log(e);
        }
    }

    const mutation = useUploadProfilePhoto()

    async function uploadPhoto(e:FormEvent<HTMLFormElement>){
       e.preventDefault()

        //e.currentTarget tell us which element the event was attached to, while e.target tells where the event started
        const formData = new FormData(e.currentTarget);
        //console.log(Object.fromEntries(formData));

        const file = formData.get("incomingFile") as File

        if(file.name.length < 1) return toast.error("please select a picture")
       
        

        //1000,000 bytes = 1mb
        if(file.size > 1000000){
            toast.error("picture size should be less than 1mb")
            return;
        }

        const res = await mutation.mutateAsync(formData)

        
       
       if(res?.role.id == roles.PATIENT) router.replace("/patient/home")
       if(res?.role.id == roles.DOCTOR) router.replace("/doctor/home")
       if(res?.role.id == roles.LAB) router.replace("/lab")
                
    }



    return (
        <div className={`w-screen h-screen  ${textStylesBody} text-black `}>
           <LogoBlack/>

           <div className=" h-[80%] w-full flex justify-center items-center">

                <div className="border-0 border-red-700 border-solid ">

                    <h1 className={`${textStylesH3} text-black mb-12 text-center`}>Add photo</h1>

                    <div className="relative h-[25rem] w-[25rem]   2xl:h-[35rem] 2xl:w-[35rem] rounded-full bg-stone-100 border-0 border-solid border-stone-400 overflow-hidden">

                        <Image src={`${imagePreview}`} fill alt="default profile" style={{ maxHeight:"100%",maxWidth:"100%" }} />
                    </div>


                    <form  onSubmit={uploadPhoto}    className=" flex justify-center  mt-12">
                        
                        <div className="space-y-6 lg:space-y-12">

                            <div className=" overflow-hidden bg-white border-2 border-solid border-[#24312F] text-black
                                w-[15rem] py-[0.6rem] rounded-lg  xl:hover:scale-95 flex justify-center items-center">

                                <label htmlFor="photo" >choose photo</label>

                                <input id="photo" className="p-0  w-0" name="incomingFile" type="file" accept="image/*"
                                    ref={imageInputRef}
                                    onChange={getChosenImagePreviewData}
                                />
                                
                            </div>


                            <div className=" w-full h-fit mt-16 flex justify-center items-center">
                                <button className={`bg-[#24312F] text-white 
                                    w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95 ${mutation.isPending && " cursor-not-allowed pointer-events-none"}`}
                                    type="submit"
                                    
                                >
                                    Finish { mutation.isPending && <ButtonSpinner/>}
                                </button>
                            </div>


                        </div>

                    </form>



                   

                   
                        
                   




                </div>
           </div>
        </div>
    );
}