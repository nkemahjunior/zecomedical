'use client'

import "./consultation.css"
import  { textStylesBody, textStylesH3, textStylesH4 } from "@/COMPONENTS/GENERAL_STYLES/general";
import {  useContext, useRef, useState } from "react";
import { GrSchedules } from "react-icons/gr";
import { IoIosArrowDown, IoMdAddCircle } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { TbMicroscope } from "react-icons/tb";
import SendToLab from "./SendToLab";
import { IoPauseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { usePauseConsultation } from "@/DATA_FETCHING/DOCTOR/hooks/usePauseConsultation";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useRouter } from "next/navigation";
import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { resumeConsultationType } from "@/TYPES/Doctor/doctorTypes";

interface formInputTypes{
    diagnosisNotes:string
    prescribedDrugs:string
}
 
 
export default function StartConsultation({consultationID, patientID, patientName}:{consultationID:string, patientID:string, patientName:string}) {


    const {pausedConsultations,setPausedConsultations} = useContext(DoctorContext) as mainDoctorContextType

    const { register,formState:{errors}, handleSubmit, } = useForm<formInputTypes>()

    const [closeCheckup, setCloseCheckUp] = useState(true)
    const router = useRouter()



    const date = new Date()

    const mutation = usePauseConsultation()


    async function pauseConsultation(data:formInputTypes){

        const diagnosisNotes = data.diagnosisNotes.length > 0 ? data.diagnosisNotes : null
        const prescribedDrugs = data.prescribedDrugs.length > 0 ? data.prescribedDrugs : null

        //console.log(consultationID , patientID);

        const resData = await mutation.mutateAsync({consultationID:Number(consultationID), diagnosisNotes:diagnosisNotes, prescribedDrugs:prescribedDrugs})

        if(resData?.status == 200){
            const hold = [...pausedConsultations,resData]
            setPausedConsultations(hold)

           // router.push("/doctor/appointments/upcoming")
        }
        


    }





    //xl:px-56 2xl:px-96
    return (
        <div className="border-0 border-solid border-black px-4 sm:px-20 xl:px-10 2xl:px-20
         py-8
        " >

            <h1 className={`${textStylesH3} text-black py-8`}>Consultation</h1>


            <div className={`text-black ${textStylesBody}  w-full border-0 border-green-800 border-solid  bg-white
                space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-16
                py-16  rounded-2xl shadow-2xl
            `}
            >

                <div className="w-full flex justify-end">
                    <button className="px-8 py-4 bg-green-300 rounded-lg shadow-lg flex justify-center items-center mr-4 xl:hover:scale-95"
                    onClick={handleSubmit(pauseConsultation)}
                    >
                        <span><IoPauseOutline /></span>&nbsp;Pause Consultation&nbsp;{mutation.isPending && <ButtonSpinner/>}
                    </button>
                </div>

                <SendToLab consultationID={consultationID} patientID={patientID} patientName={patientName}/>




                <div className="border-0 border-solid border-lime-500 px-4 sm:px-16">
                    <form className=" space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-16"
                    
                    >

                        <div>
                            <label htmlFor="diagnosisNotes">Diagnosis Notes</label>
                            <textarea required id="diagnosisNotes" cols={10} rows={20}
                                className={` border-[1px] border-solid border-black rounded-lg h-[10rem] md:h-[10rem] xl:h-[15rem] 
                                w-[100%]`}
                                {...register("diagnosisNotes")}
                            />
                        </div>


                        <div>
                            <label htmlFor="medecinePrescribed">Prescribed Drugs</label>
                            <textarea  id="medecinePrescribed" cols={10} rows={20}
                                className={` border-[1px] border-solid border-black rounded-lg h-[10rem] md:h-[10rem] w-[100%] 
                                xl:h-[15rem]`}
                                {...register("prescribedDrugs")}
                            />
                        </div>


                        <div className={` ${closeCheckup ? 'close' : 'open'} overflow-y-hidden p-4 lg:p-8 lg:py-10
                            border-[1px] border-solid border-black rounded-lg   space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12
                            
                        `}
                        >

                            <div className="flex justify-between items-center mb-4">
                                <h3 className={`text-black ${textStylesH3} flex justify-center items-center `}><span><GrSchedules /></span>&nbsp; Schedule Checkup</h3>

                                <button 
                                    type="button"
                                    className={` p-4 bg-stone-200 rounded-lg xl:hover:bg-stone-300  
                                    ${closeCheckup ? ' rotate-[360]' : 'rotate-180  '}`}
                                    onClick={() => setCloseCheckUp(v => !v)}
                                >
                                    <IoIosArrowDown />
                                </button>

                            </div>

                            <div>
                                <label htmlFor="checkup">Patient should come for checkup&nbsp;</label>
                                <input type="checkbox" id="checkup" 
                                className={` border-[1px] border-solid border-black rounded-lg accent-black`}/>
                            </div>


                            <div className="space-y-4">

                                <p>Date</p>

                                <div className="flex gap-x-4 w-full border-0 border-solid border-red-700">

                                    <div className="flex items-center  gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                        <label htmlFor="endDay">DD&nbsp;:</label>
                                        <input type="number" id="endDay" 
                                            required aria-label="enter end day"
                                            placeholder="18" defaultValue={3}
                                            min={1} max={31}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                    
                                        />
                                    </div>


                                    <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                        <label htmlFor="endMonth">MM&nbsp;:</label>
                                        <input type="number" id="endMonth" 
                                            required aria-label="enter end month"
                                            placeholder="07" defaultValue={2}
                                            min={1} max={12}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                        
                                        />
                                    </div>


                                    <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                        <label htmlFor="endYear">YY&nbsp;:</label>
                                        <input type="number" id="endYear" 
                                            required aria-label="enter end year"
                                            placeholder={`${date.getFullYear()}`} defaultValue={date.getFullYear()}
                                            min={date.getFullYear()} max={2040}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                    
                                        />
                                    </div>

                                </div>
                            </div>


                            <div className=" space-y-4">

                                <p>Time (24 hour format)</p>

                                <div className="flex gap-x-8 w-full border-0 border-solid border-red-700">

                                    <div className="flex items-center  gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                        <label htmlFor="closeHour">H&nbsp;:</label>
                                        <input type="number" id="closeHour" 
                                            required aria-label="enter closing hour(0 to 23)"
                                            placeholder="15" defaultValue={15}
                                            min={0} max={23}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                    
                                        />

                                    </div>


                                    <div className="flex items-center gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                        <label htmlFor="closeMin">M&nbsp;:</label>
                                        <input type="number" id="closeMin"
                                            required aria-label="enter closing minute" 
                                            placeholder="45"
                                            min={0} max={59} defaultValue={45}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                    
                                        />

                                    </div>

                                    <div className="flex items-center gap-x-4 w-fit border-0 border-solid border-red-700">

                                        <select  id=""  
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]
                                        `}
                                    
                                        >
                                            <option value="am">AM</option>
                                            <option value="pm">PM</option>
                                            
                                        </select>

                                    </div>

                                </div>
                            </div>

                            
                        </div>

                        <div className="flex justify-center items-center ">

                            <button className={`mt-6 py-5 px-10 xl:px-20 xl:py-7 bg-[#00171F] text-white rounded-lg shadow-xl xl:hover:scale-95`}>
                                Finish Consultation
                            </button>

                        </div>

                    </form>
                </div>

            </div>


        </div>
    );
}



/***
 *     private Long patientID;

    private String diagnosisNotes;

    private Boolean comeForCheckup;

    private Integer checkupYear;

    private Integer checkupMonth;

    private Integer checkupDay;

    private Integer checkupHour;

    private Integer checkupMin;

    private List<String> medicinePrescribed;
 */