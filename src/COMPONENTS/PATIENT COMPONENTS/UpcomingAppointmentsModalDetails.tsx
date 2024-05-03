 

import Image from "next/image";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";

 
export default function UpcomingAppointmentsModalDetails() {
    return (
        <>

            <>



                <div className="w-full  border-0 border-solid border-yellow-700 px-8 lg:px-24 xl:px-[8rem] 2xl:[16rem]">



                    <h3 className={`mt-6 mb-6 text-center font-semibold  ${textStylesH3}`}>Upcoming Appoinment Details</h3>

                    <div className="space-y-6 sm:grid sm:grid-cols-[45fr,55fr] sm:gap-x-6 lg:gap-x-14">

                        <div className="rounded-lg h-[23rem] sm:h-[70%] w-[100%]  
                            border-0 border-solid border-red-600 relative overflow-hidden">  

                            <Image className="block"  src={"/doctor.jpg"} alt="The doctor's picture" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                        </div> 



                        <div>

                            <dl className={` ${textStylesBody} font-semibold space-`}>
                                
                                <dt className=" font-medium mt-2">Doctor:</dt>
                                <dd className=" text-[#33454c]">Dr. Zino Zelensikino</dd>

                                <dt className=" font-medium mt-2">Specialty:</dt>
                                <dd className=" text-[#33454c]">Dentist</dd>

                                <dt className=" font-medium mt-2">date:</dt>
                                <dd className=" text-[#33454c]">April 02, 2024</dd>

                                <dt className=" font-medium mt-2 ">Reason:</dt>
                                <dd className=" text-[#33454c]">Consultation</dd>
                                
                                <dt className=" font-medium mt-2  ">Your complain:</dt>
                                <dd className="border-0 border-solid border-red-600 text-[#33454c] max-w-[27rem] ">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptates!  ipsum dolor Lorem ipsum, d.</dd>

                                <dt className=" font-medium mt-2 ">rende_vouz:</dt>
                                <dd className=" text-[#33454c]">true</dd>

                                <dt className=" font-medium mt-2">Status:</dt>
                                <dd className=" text-[#33454c]">Pending</dd>

                            </dl>
                        </div>



                    </div>

                </div>


            </>

        </>
    );
}