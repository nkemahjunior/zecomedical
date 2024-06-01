'use client'
import { textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { useGetPatientInfo } from "@/DATA_FETCHING/DOCTOR/hooks/useGetPatientInfo";
import LoadingSpinner from "../LoadingSpinner";
import Image from "next/image";
import { FormEvent, useContext } from "react";
import { doctorContextTypes, DoctorModalContext } from "@/app/(DOCTOR)/doctor/DoctorModalProvider";
import MedicalHistory from "./MedicalHistory";

 
 
export default function PatientInfo({patientID}:{patientID:string}) {

    const {setContent,setOpen} = useContext(DoctorModalContext) as doctorContextTypes


    const currentYear = new Date().getFullYear()

    const query = useGetPatientInfo(Number(patientID))

    if(query.isLoading)return(

        <div className="border-0 border-solid border-black px-4 sm:px-20 xl:px-10 2xl:px-20
        py-8">
            <h1 className={`${textStylesH3} text-black py-8`}>Patient&apos;s information</h1>
            
            <div className=" rounded-2xl overflow-hidden h-full">
                <LoadingSpinner/>
            </div>
            
        </div>
    )

    //console.log(query.data);
    //2024-06-14T23:00:00.000+00:00

    const dob = query.data?.dob.slice(0,4)
    const age = currentYear - Number(dob)

    function showMedicalHistory(){
        setContent(<MedicalHistory patientID={Number(patientID)}/>)
        setOpen(true)

    }
    

    return (
        <div className="border-0 border-solid border-black px-4 sm:px-20 xl:px-10 2xl:px-20
        py-8">

            <h1 className={`${textStylesH3} text-black py-8`}>Patient&apos;s information</h1>

            <div className="border-0 border-fuchsia-800 border-solid bg-white  space-y-3 py-16 px-4 sm:px-16
            rounded-2xl shadow-2xl 
            ">
                    
                <div className="relative h-[20rem] w-[20rem] rounded-lg overflow-hidden">
                    <Image src={ query.data?.profilePhotoUrl || "/defaultProfile.jpg" } alt="photo of patient" fill style={{height:"100%", width:"100%"}}/>
                </div>

                <div className="border-0 border-solid border-black pt-4">
                    <dl className=" space-y-4">
                
                        <div className="space-y-1">
                            <dt className=" font-semibold">Name :</dt>
                            <dd className=" whitespace-nowrap capitalize">{query.data?.name.replaceAll("_"," ")}</dd>
                        </div>

                        <div className="space-y-1">
                            <dt className=" font-semibold">Age :</dt>
                            <dd className=" whitespace-nowrap ">{age}yrs</dd>
                        </div>


                    </dl>

                </div>


                <form action="" className=" space-y-4 mt-2">

                    <div className="flex flex-col">
                        <label htmlFor="bloodPressure" className=" font-semibold">Blood Pressure</label>
                        <input className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[40%]`} id="bloodPressure" type="text" defaultValue={query.data?.bloodPressure}/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="bloodGroup" className=" font-semibold">Blood Group</label>
                        <input className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[40%]`} id="bloodGroup" type="text" defaultValue={query.data?.bloodGroup}/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="weight" className=" font-semibold">Weight</label>
                        <input className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[40%]`} id="weight" type="text" defaultValue={query.data?.weight}/>
                    </div>

                    {/* <div className="mt-4">
                        <button 
                            onClick={showMedicalHistory}
                            className={`mt-4 py-2 px-4 border-[#00171F] border-2 border-solid  bg-stone-50  rounded-lg shadow-lg xl:hover:scale-95 whitespace-nowrap`}>See Medical History</button>
                    </div> */}
                </form>

                <div className="mt-4">
                        <button 
                            onClick={showMedicalHistory}
                            className={`mt-4 py-2 px-4 border-[#00171F] border-2 border-solid  bg-stone-50  rounded-lg shadow-lg xl:hover:scale-95 whitespace-nowrap`}>See Medical History</button>
                </div>
                

            </div>

    </div>
    );
}