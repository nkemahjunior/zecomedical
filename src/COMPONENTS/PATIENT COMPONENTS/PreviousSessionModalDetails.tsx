 
import Image from "next/image";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import { medicalHistoryResponseType } from "@/TYPES/PatientAndDoctor/patientAndDoctorTypes";
import { extractDate } from "@/helpers/extractDate";
import MedicalHistoryLab from "../DOCTOR_COMPONENTS/Consultation/MedicalHistoryLab";

 
export default function PreviousSessionModalDetails({data}:{data:medicalHistoryResponseType | undefined}) {


    const {year,month,day,hour,min} = extractDate(data?.timestamp!)
    const period = Number(hour) >= 0 && Number(hour) <= 12 ? "AM":"PM"

    return (
        <>

            <>



                <div className={`${textStylesBody} w-full  border-0 border-solid border-yellow-700 px-8 lg:px-24 xl:px-[8rem] 2xl:[16rem]`}>



                    <h3 className={`mt-6 mb-6 text-center font-semibold  ${textStylesH3}`}>Previous Session Details</h3>

                    <div className="space-y-6 sm:grid sm:grid-cols-[45fr,55fr] sm:gap-x-6 lg:gap-x-14">

                        <div className="rounded-lg h-[23rem] sm:h-[27rem] lg:h-[35rem] w-[100%]  
                            border-0 border-solid border-red-600 relative overflow-hidden">  

                            <Image className="block"  src={data?.doctorID.uuid.profilePhotoUrl || "/defaultProfile.jpg"} alt="The doctor's picture" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                        </div> 



                        <div>

                            <dl className={` ${textStylesBody}  `}>



                                <dt className=" font-semibold mt-4">date:</dt>
                                <dd className=" ">{day}-{month}-{year}{/*, {hour}:{min} {period}*/}</dd>
                                
                                <dt className=" font-semibold mt-4">Doctor:</dt>
                                <dd className="  capitalize">Dr. {data?.doctorID.uuid.name}</dd>

                                <dt className=" font-semibold mt-4">Specialty:</dt>
                                <dd className="  capitalize">{data?.doctorID.speciality}</dd>
                                
                                <dt className=" font-semibold mt-4  ">Diagnosis Notes:</dt>
                                <dd className="border-0 border-solid border-red-600  max-w-[27rem] ">{data?.diagnosisNotes}</dd>

                                <dt className=" font-semibold mt-4 ">Prescribed Drugs:</dt>
                                <dd className=" ">{data?.medicinePrescribed}</dd>

                            </dl>

                            <div>

                                <h1 className={`${textStylesH3} text-black mt-4`}> Lab Results</h1>


                                {
                                    data?.labResultsBloodBank && data?.labResultsBloodBank.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                                }



                                {
                                    data?.labResultsImmunology && data?.labResultsImmunology.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                                }



                                {
                                    data?.labResultsMicrobiology && data?.labResultsMicrobiology.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                                }



                                {
                                    data?.labResultsParasitology && data?.labResultsParasitology.map((el,i) => <MedicalHistoryLab data={el} key={el.id} />)
                                }

                            </div>

                        </div>



                    </div>

                </div>


            </>

        </>
    );
}