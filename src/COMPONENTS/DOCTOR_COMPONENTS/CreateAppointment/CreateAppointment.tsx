"use client"
import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useCreateAppointments } from "@/DATA_FETCHING/DOCTOR/hooks/useCreateAppointments";
import { createAppointmentType } from "@/TYPES/Doctor/doctorTypes";
import { useForm } from "react-hook-form";
import { GrTooltip } from "react-icons/gr";



 
 
export default function CreateAppointment() {

    const date = new Date();

    const { register,formState:{errors}, handleSubmit, } = useForm<createAppointmentType>()

    const mutation = useCreateAppointments()

    function onSubmitForm(data:createAppointmentType){
        //console.log(data);

     mutation.mutate(data)
        
    }




    return (
        <div className={`${textStylesBody} flex justify-center items-center border-0 border-solid border-emerald-600 
            h-full lg:h-fit xl:h-full w-full
            px-4 lg:py-16 xl:py-0

        `}>
            

            <div className="border-0 border-solid border-red-600 
                w-[100%] sm:w-[80%] md:w-[75%] 2xl:w-[55%]
                px-4 sm:px-12 xl:px-20 2xl:px-24
                bg-white p-8 rounded-xl shadow-2xl
                relative
            ">

                <h1 className={`${textStylesH3} text-black`}>Create Appointment</h1>

                
                    {/* <div className="w-[70%] lg:w-[50%] absolute z-10 bg-white top-[25%] left-[25%] h-fit border-2 border-solid border-stone-50 p-4 lg:p-8 shadow-2xl rounded-lg ">
                        <div className=" w-full flex justify-end">
                            <span>X</span>
                        </div>
                        <p className="  text-2xl font-medium"><span><GrTooltip /> If you are going to have a consecutive run of appointments at the same date / time, instead of creating individual appointments for each day, you can input the start date up to when the run is going to end</span></p>
                    </div> */}
               

                {/* px-4 sm:px-52 2xl:px-[26rem] */}
                <form action="" 
                    onSubmit={handleSubmit(onSubmitForm)}
                    className="   space-y-6 lg:space-y-12  mt-12 lg:mt-14 2xl:mt-2j0 
                    border-0 border-solid border-yellow-600
                ">



                    <div className=" space-y-4">

                        <p>Start date</p>

                        <div className="flex gap-x-4 w-full border-0 border-solid border-red-700">

                            <div className="flex items-center  gap-x-2 w-[30%] border-0 border-solid border-red-700">

                                <label htmlFor="startDay">DD&nbsp;:</label>
                                <input type="number" id="startDay"
                                    required aria-label="enter starting day"
                                    placeholder="15"
                                    min={1} max={31} defaultValue={29}
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                    {...register("startDay")}
                                />

                            </div>


                            <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">

                                <label htmlFor="startMonth">MM&nbsp;:</label>
                                <input type="number" id="startMonth" 
                                    required aria-label="enter starting month"
                                    placeholder="07"
                                    min={1} max={12} defaultValue={1}
                                    className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                    {...register("startMonth")}
                                />

                            </div>

                            <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">

                                <label htmlFor="startYear">YY&nbsp;:</label>
                                <input type="number" id="startYear" 
                                    required aria-label="enter starting year"
                                    placeholder={`${date.getFullYear()}`} defaultValue={date.getFullYear()}
                                    min={date.getFullYear()} max={2040}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("startYear")}
                                />

                            </div>

                        </div>

                    </div>






                    <div className=" space-y-4">

                        <p>Opening Time (24 hour format)</p>

                        <div className="flex gap-x-8 w-full border-0 border-solid border-red-700">

                            <div className="flex items-center  gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                <label htmlFor="openHour">H&nbsp;:</label>
                                <input type="number" id="openHour" 
                                    required aria-label="enter opening hour(0 to 23)"
                                    placeholder="08" defaultValue={8}
                                    min={0} max={23}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("openHour")}
                                />

                            </div>

                            <div className="flex items-center gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                <label htmlFor="openMin">M&nbsp;:</label>
                                <input type="number" id="openMin" 
                                    required aria-label="enter opening minute"
                                    placeholder="30" defaultValue={20}
                                    min={0} max={59}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("openMin")}
                                />

                            </div>

                            <div className="flex items-center gap-x-4 w-fit border-0 border-solid border-red-700">

                                <select  id=""  
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]
                                `}
                                {...register("openPeriod")}
                                >
                                    <option value="am">AM</option>
                                    <option value="pm">PM</option>
                                </select>

                            </div>

                        </div>
                    </div>





                    <div className=" space-y-4">

                        <p>Closing Time (24 hour format)</p>

                        <div className="flex gap-x-8 w-full border-0 border-solid border-red-700">

                            <div className="flex items-center  gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                <label htmlFor="closeHour">H&nbsp;:</label>
                                <input type="number" id="closeHour" 
                                    required aria-label="enter closing hour(0 to 23)"
                                    placeholder="15" defaultValue={15}
                                    min={0} max={23}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("closeHour")}
                                />

                            </div>


                            <div className="flex items-center gap-x-4 w-[30%] border-0 border-solid border-red-700">

                                <label htmlFor="closeMin">M&nbsp;:</label>
                                <input type="number" id="closeMin"
                                    required aria-label="enter closing minute" 
                                    placeholder="45"
                                    min={0} max={59} defaultValue={45}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("closeMin")}
                                />

                            </div>

                            <div className="flex items-center gap-x-4 w-fit border-0 border-solid border-red-700">

                                <select  id=""  
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]
                                `}
                                {...register("endPeriod")}
                                >
                                     <option value="pm">PM</option>
                                    <option value="am">AM</option>
                                </select>

                            </div>

                        </div>
                    </div>






                    <div>

                        <p>End date</p>

                        <div className="flex gap-x-4 w-full border-0 border-solid border-red-700">

                            <div className="flex items-center  gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                <label htmlFor="endDay">DD&nbsp;:</label>
                                <input type="number" id="endDay" 
                                    required aria-label="enter end day"
                                    placeholder="18" defaultValue={3}
                                    min={1} max={31}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("endDay")}
                                />
                            </div>


                            <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                <label htmlFor="endMonth">MM&nbsp;:</label>
                                <input type="number" id="endMonth" 
                                    required aria-label="enter end month"
                                    placeholder="07" defaultValue={2}
                                    min={1} max={12}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("endMonth")}
                                />
                            </div>


                            <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">
                                <label htmlFor="endYear">YY&nbsp;:</label>
                                <input type="number" id="endYear" 
                                    required aria-label="enter end year"
                                    placeholder={`${date.getFullYear()}`} defaultValue={date.getFullYear()}
                                    min={date.getFullYear()} max={2040}
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                {...register("endYear")}
                                />
                            </div>

                        </div>
                    </div>





                    <div className="sm:w-full sm:flex sm:justify-center">
                        <button 
                            // aria-disabled={mutation.isPending}
                            className={ ` 
                            ${mutation.isPending ? "bg-[#666f6d] cursor-not-allowed " : `bg-[#00171F]`}
                            mt-4
                            text-white text-center w-[100%] sm:w-[70%] xl:w-[60%] h-[3.8rem] md:h-[4.6rem] rounded-lg shadow-lg
                            transition-all delay-75 duration-75 bg-[#24312F]
                            xl:hover:scale-95
                        `}>
                            Create  {mutation.isPending && <ButtonSpinner/>} 
                        </button>
                    </div>




                </form>
            </div>
        </div>
    );
}

