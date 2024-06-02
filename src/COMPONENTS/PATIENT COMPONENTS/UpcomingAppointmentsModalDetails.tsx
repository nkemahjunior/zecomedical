 

import Image from "next/image";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import { patientUpcomingAppointments } from "@/TYPES/Patient/PatientTypes";
import { extractDate } from "@/helpers/extractDate";

 
export default function UpcomingAppointmentsModalDetails({data}:{data:patientUpcomingAppointments | undefined}) {


    const {year,month,day,hour,min} = extractDate(data?.dateTime!)
    const period = Number(hour) >= 0 && Number(hour) <= 12 ? "AM":"PM"

    return (
        <>

            <>



                <div className="w-full  border-0 border-solid border-yellow-700 px-8 lg:px-24 xl:px-[8rem] 2xl:[16rem]">



                    <h3 className={`mt-6 mb-6 text-center font-semibold  ${textStylesH3}`}>Upcoming Appoinment Details</h3>

                    <div className="space-y-6 sm:grid sm:grid-cols-[45fr,55fr] sm:gap-x-6 lg:gap-x-14">

                        <div className="rounded-lg h-[23rem] sm:h-[70%] w-[100%]  
                            border-0 border-solid border-red-600 relative overflow-hidden">  

                            <Image className="block"  src={data?.doctorID.uuid.profilePhotoUrl || "/defaultProfile.jpg"} alt="The doctor's picture" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                        </div> 



                        <div>

                            <dl className={` ${textStylesBody}  space-`}>
                                
                                <dt className=" font-semibold mt-2">Doctor:</dt>
                                <dd className="  capitalize">Dr. {data?.doctorID.uuid.name}</dd>

                                <dt className=" font-semibold mt-2">Specialty:</dt>
                                <dd className="  capitalize">{data?.doctorID.speciality}</dd>

                                <dt className=" font-semibold mt-2">date:</dt>
                                <dd className=" ">{day}-{month}-{year}, {hour}:{min} {period}</dd>

                                <dt className=" font-semibold mt-2 ">Reason:</dt>
                                <dd className="  capitalize">{data?.reason}</dd>
                                
                                <dt className=" font-semibold mt-2  ">Your complain:</dt>
                                <dd className="border-0 border-solid border-red-600  max-w-[27rem] ">{data?.complain_notes}</dd>

                               
                                <dt className=" font-semibold mt-2">Status:</dt>
                                <dd className=" ">{data?.status}</dd>

                            </dl>
                        </div>



                    </div>

                </div>


            </>

        </>
    );
}