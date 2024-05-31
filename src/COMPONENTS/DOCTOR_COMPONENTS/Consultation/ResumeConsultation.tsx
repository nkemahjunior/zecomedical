'use client'

import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { useContext, useState } from "react";
import SendToLab from "./SendToLab";
import { GrSchedules } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import LabResults from "./LabResults";
import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { useForm } from "react-hook-form";
import { useFinishConsultation } from "@/DATA_FETCHING/DOCTOR/hooks/useFinishConsultation";
import { finishConsultationType } from "@/TYPES/Doctor/doctorTypes";
import { useUpdatePendingLabRequestStatus } from "@/DATA_FETCHING/DOCTOR/hooks/useLabResults";
import { labDepts } from "@/TYPES/Lab/laboratories";
import toast from "react-hot-toast";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";



export interface formInputTypes{
    diagnosisNotes:string
    medecinePrescribed:string
    checkupDay:string
    checkupMonth:string
    checkupYear:string
    comeForCheckup:boolean
    checkupHour:string
    checkupMin:string
    period:string
}



 
export default function ResumeConsultation({consultationID, patientID, patientName}:{consultationID:string, patientID:string, patientName:string}) {

    const {completedResults, setCompletedLabResults,pausedConsultations,setPausedConsultations,pendingLabResults, setPendingLabResults} = useContext(DoctorContext) as mainDoctorContextType
    const resultsForThisConsultation = completedResults.filter(el => el.consultation.id == Number(consultationID))

    const [closeCheckup, setCloseCheckUp] = useState(true)


    const { register,formState:{errors}, handleSubmit, } = useForm<formInputTypes>()

    const mutation = useFinishConsultation()
    const mutationUpdate = useUpdatePendingLabRequestStatus()

    async function finishConsultation(data:formInputTypes){
        //console.log(data);

        const arrangedData:finishConsultationType = {
            patientID:  Number(patientID),
            diagnosisNotes:  data.diagnosisNotes,
            comeForCheckup:  data.comeForCheckup,
            checkupYear:  data.checkupYear.length > 0 && Number(data.checkupYear) || null,
            checkupMonth:  data.checkupMonth.length > 0 && Number(data.checkupMonth) || null,
            checkupDay:   data.checkupDay.length > 0 && Number(data.checkupDay) || null,
            checkupHour:   data.checkupHour.length > 0 && Number(data.checkupHour) || null,
            checkupMin:   data.checkupMin.length > 0 && Number(data.checkupMin)|| null,
            medicinePrescribed:  data.medecinePrescribed
        }

        if(arrangedData.comeForCheckup && arrangedData.checkupHour && arrangedData.checkupMin){

            
            if(data.period == "am" && arrangedData.checkupHour < 0 || data.period == "am" && arrangedData.checkupHour > 12)
                return toast.error("correct time period to pm or change time")

        
                
            if(data.period == "pm" && arrangedData.checkupHour < 13 || data.period == "pm" && arrangedData.checkupHour > 23) 
                return toast.error("correct time period to am or change time")
        }


        const res = await mutation.mutateAsync(arrangedData)

        if(res?.status == 200){
            
            for(const el of resultsForThisConsultation){
                let resData;

                if(el.labDepartment.id == labDepts.BLOODBANK) resData = await mutationUpdate.mutateAsync(el.consultation.labResultsBloodBank!)
                if(el.labDepartment.id == labDepts.IMMUNOLOGY) resData = await mutationUpdate.mutateAsync(el.consultation.labResultsImmunology!)
                if(el.labDepartment.id == labDepts.MICROBIOLOGY) resData = await mutationUpdate.mutateAsync(el.consultation.labResultsMicrobiology!)
                if(el.labDepartment.id == labDepts.PARASITOLOGY) resData = await mutationUpdate.mutateAsync(el.consultation.labResultsParasitology!)


                if(resData?.status == 200){

                    //after marking a waiting lab result as complete on the database, remove it from this state
                    const hold = completedResults.filter( el => el.consultation.id !== Number(consultationID))
                    setCompletedLabResults(hold)
                   
                }
            }

            const hold2 = pausedConsultations.filter(el => el.id !== Number(consultationID))
            setPausedConsultations(hold2)

            const hold3 = pendingLabResults.filter(el => el.patientID !== Number(patientID))
            setPendingLabResults(hold3)
            toast.success(res.message)
        }
    }
     



    const date = new Date()

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

                <SendToLab consultationID={consultationID} patientID={patientID} patientName={patientName}/>

                {
                    resultsForThisConsultation?.length > 1 && <LabResults labTest={resultsForThisConsultation}/>
                }

                


                <div className="border-0 border-solid border-lime-500 px-4 sm:px-16">
                    <form className=" space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-16"
                    onSubmit={handleSubmit(finishConsultation)}
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
                                {...register("medecinePrescribed")}
                            />
                        </div>



                        {/* schedule checkup */}
                        <div className={` ${closeCheckup ? 'close' : 'open'} overflow-y-hidden p-4 lg:p-8
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
                                <label htmlFor="comeForCheckup">Patient should come for checkup&nbsp;</label>
                                <input type="checkbox" id="comeForCheckup" 
                                className={` border-[1px] border-solid border-black rounded-lg accent-black`}
                                {...register("comeForCheckup")}
                                />
                            </div>


                            <div className="space-y-4">

                                <p>Date</p>

                                <div className="flex gap-x-4 w-full border-0 border-solid border-red-700">

                                    <div className="flex items-center  gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                        <label htmlFor="day">DD&nbsp;:</label>
                                        <input type="number" id="day" 
                                            aria-label="enter day"
                                            placeholder="00" 
                                            min={1} max={31}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                        {...register("checkupDay")}
                                    
                                        />
                                    </div>


                                    <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                        <label htmlFor="month">MM&nbsp;:</label>
                                        <input type="number" id="month" 
                                            aria-label="enter month"
                                            placeholder="00" 
                                            min={1} max={12}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                        {...register("checkupMonth")}
                                        
                                        />
                                    </div>


                                    <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                        <label htmlFor="year">YY&nbsp;:</label>
                                        <input type="number" id="year" 
                                            aria-label="enter  year"
                                            placeholder={`${date.getFullYear()}`} defaultValue={date.getFullYear()}
                                            min={date.getFullYear()} max={2040}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                        {...register("checkupYear")}
                                    
                                        />
                                    </div>

                                </div>
                            </div>


                            <div className=" space-y-4">

                                <p>Time (24 hour format)</p>

                                <div className="flex gap-x-8 w-full border-0 border-solid border-red-700">

                                    <div className="flex items-center  gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                        <label htmlFor="hour">H&nbsp;:</label>
                                        <input type="number" id="hour" 
                                            aria-label="enter hour"
                                            placeholder="00" 
                                            min={0} max={23}
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                        {...register("checkupHour")}
                                    
                                        />

                                    </div>


                                    <div className="flex items-center gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                        <label htmlFor="min">M&nbsp;:</label>
                                        <input type="number" id="min"
                                            aria-label="enter minute" 
                                            placeholder="00"
                                            min={0} max={51} 
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                        {...register("checkupMin")}
                                    
                                        />

                                    </div>

                                    <div className="flex items-center gap-x-4 w-fit border-0 border-solid border-red-700">

                                        <select  id=""  
                                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]
                                        `}
                                        {...register("period")}
                                    
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
                                Finish Consultation&nbsp;{mutation.isPending && <ButtonSpinner/> || mutationUpdate.isPending && <ButtonSpinner/> }
                            </button>

                        </div>

                    </form>
                </div>

            </div>


        </div>
    );
}