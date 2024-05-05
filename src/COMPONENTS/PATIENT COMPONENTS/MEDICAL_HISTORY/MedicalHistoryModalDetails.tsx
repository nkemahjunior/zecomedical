import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import Image from "next/image";

 
 
export default function MedicalHistoryModalDetails() {
    return (
        <>

            <>



                <div className="w-full  border-0 border-solid border-yellow-700 px-8 lg:px-24 xl:px-[8rem] 2xl:[16rem]">



                    <h3 className={`mt-6 mb-6 text-center font-semibold  ${textStylesH3}`}>Medical History</h3>

                    <div className="space-y-6 sm:grid sm:grid-cols-[45fr,55fr] sm:gap-x-6 lg:gap-x-14">

                        <div className="rounded-lg h-[23rem] sm:h-[70%] w-[100%]  
                            border-0 border-solid border-red-600 relative overflow-hidden">  

                            <Image className="block"  src={"/doctor.jpg"} alt="The doctor's picture" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                        </div> 



                        <div>

                            <dl className={` ${textStylesBody} font-semibold space-`}>
                                
                                <dt className=" font-medium mt-6">Doctor:</dt>
                                <dd className=" text-[#33454c]">Dr. Zino Zelensikino</dd>

                                <dt className=" font-medium mt-6">Specialty:</dt>
                                <dd className=" text-[#33454c]">Dentist</dd>

                                <dt className=" font-medium mt-6">date:</dt>
                                <dd className=" text-[#33454c]">April 02, 2024</dd>

                                <dt className=" font-medium mt-6 ">Doctor&apos;s diagnosis:</dt>
                                <dd className=" text-[#33454c]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dignissimos recusandae sequi accusantium. Nihil temporibus magni optio facere provident nisi?</dd>
                                
                                <dt className=" font-medium mt-6  ">Come for checkup:</dt>
                                <dd className="border-0 border-solid border-red-600 text-[#33454c] max-w-[27rem] ">Yes</dd>

                                <dt className=" font-medium mt-6 ">Lab results:</dt>

                                <div className=" flex">
                                    <dt className=" text-[#33454c]">Malaria:&nbsp;</dt>
                                        <dd className=" text-[#33454c]">negative</dd>
                                </div>

                                <div className="flex">
                                    <dt className=" text-[#33454c]">Typhoid:&nbsp;</dt>
                                        <dd className=" text-[#33454c]">positive</dd>
                                </div>

                                <dt className=" font-medium mt-6">Prescribtions:</dt>
                                <dd className=" text-[#33454c]">Paracetamol</dd>
                                <dd className=" text-[#33454c]">Paracetamol</dd>
                                <dd className=" text-[#33454c]">Paracetamol</dd>

                            </dl>
                        </div>



                    </div>

                </div>


            </>

        </>
    );
}