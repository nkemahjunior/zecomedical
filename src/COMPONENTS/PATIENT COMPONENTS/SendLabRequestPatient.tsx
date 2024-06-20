"use client"
import { TbMicroscope } from "react-icons/tb";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import { useSendToLab } from "@/DATA_FETCHING/DOCTOR/hooks/useSendToLab";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useGetPatientInfo } from "@/DATA_FETCHING/PATIENT/hooks/useGetPatientInfo";
import LoadingPatientUpcoming from "./loading/LoadingPatientUpcoming";
import ButtonSpinner from "../GLOBAL_COMPONENTS/ButtonSpinner";


 
 
export default function SendLabRequestPatient() {


    const mutation = useSendToLab();

    const query = useGetPatientInfo()
    
    

    async function sendToLabFN(e:FormEvent<HTMLFormElement>){
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData)

        let labTestRequest:string[] = []

        for (const [key,value] of Object.entries(data)) {
            if(key.startsWith("request") && typeof value == "string" ){
                labTestRequest.push(value)
            }
        }


        const arrangedData = {
            labName:"bb",
            patientID:Number(data.patientID.toString()),
            patientName:data.patientName.toString(),
            labTestRequest:labTestRequest
        }


        const res = await mutation.mutateAsync(arrangedData)
        


    }


    if(query.isLoading  )  return <LoadingPatientUpcoming/>


    return (
        <>
                <div className={`${textStylesBody}`}>
                    <h3 className={`mt-6 lg:mt-12 ${textStylesH3} text-[#00171F]`}>Send Lab Request</h3>

                    <div className="p-[1.2rem] py-[1.6rem] sm:p-[3rem] md:px-[4rem] md:py-[6rem] lg:px-[2rem] lg:py-[6rem] xl:px-[7rem] xl:py-[7rem]  mt-8 lg:mt-12 
                     bg-[#003459]
                    rounded-xl overflow-hidden shadow-xl
                    w-[100%]
                    " 
                    
                    >
                        

                        {/* ---------------------------------------------------------- */}

                        <div className={`space-y-8 lg:space-y-10  p-4 lg:p-8  lg:py-10
                            border-[1px] border-solid border-white rounded-lg
                             w-[100%] h-full
            
                        `}>


                            <div className="flex justify-between items-center mb-4">
                                <h3 className={` text-white ${textStylesH3} flex justify-center items-center `}><span><TbMicroscope /></span>&nbsp; Send to lab</h3>
                            </div>


                            <form className=" space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-16"
                                onSubmit={sendToLabFN}
                            >



                                <div className="space-y-2">

                                    <div >
                                        <label htmlFor="request" className="text-white">Request</label>

                                        <div className="flex justify-center items-center space-x-2 ">
                                            <input required type="text"  name="request"
                                                className={` border-[1px] border-solid border-black rounded-lg h-[5rem] md:h-[3.8rem] w-[100%]`}
                                            />
                                            <button type="button" className=" invisible w-12 h-12  inline-block rounded-[50%] bg-[#00171F] text-white">x</button>
                                        </div>

                                    </div>

                                </div>

                                <div className="w-full flex justify-center items-center">

                                    <button className="py-4 px-20 bg-[#00171F] text-white rounded-lg shadow-lg xl:hover:scale-95">Send&nbsp;{mutation.isPending &&<ButtonSpinner/>}</button>
                                   
                                </div>

                                <input type="hidden" name="patientID" value={query.data?.id} />
                                <input type="hidden" name="patientName" value={query.data?.name} />

                        
                            </form>


                        </div>
                    </div>
                </div>   
        </>
    );
}


/**
 *    return (
        <div className="border-0 border-solid border-yellow-500 px-4 sm:px-16 ">

        <div className={`space-y-8 lg:space-y-10  p-4 lg:p-8  lg:py-10
            border-[1px] border-solid border-black rounded-lg 
            
            `}>


            <div className="flex justify-between items-center mb-4">
                <h3 className={`text-black ${textStylesH3} flex justify-center items-center `}><span><TbMicroscope /></span>&nbsp; Send to lab</h3>
            </div>


            <form className=" space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-16"
            
            >



            <div className="space-y-2">

                <div >
                    <label htmlFor="request">Request</label>

                    <div className="flex justify-center items-center space-x-2">
                        <input required type="text"  name="request"
                            className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                        />
                        <button type="button" className=" invisible w-12 h-12  inline-block rounded-[50%] bg-[#00171F] text-white">x</button>
                    </div>

                </div>

            </div>

            <div className="w-full flex justify-center items-center">

                <button className="py-2 px-20 bg-[#00171F] text-white rounded-lg shadow-lg xl:hover:scale-95">Send&nbsp;{mutation.isPending || mutatation2.isPending &&<ButtonSpinner/>}</button>
            </div>

            <input type="hidden" name="patientID" value={patientID} />
            <input type="hidden" name="patientName" value={patientName} />

           
        </form>


    </div>

</div>

);
 */