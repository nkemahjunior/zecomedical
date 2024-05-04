import { useForm } from "react-hook-form"
import { errorStyle } from "../AUTH_COMPONENTS/FormErrorStyles"
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general"

 
 
 interface formInputTypes {
    reason :{
        checkup: string
        consultation:string
    }

    complainNotes: string
    doctorID: number
    appointmentID: number
    startYear: number
    startMonth: number
    startDay: number
    startDay2: number
    
}


 

export default function AvailableDoctorModalDetails() {

    const { register,formState:{errors}, handleSubmit, } = useForm<formInputTypes>()

    async function onSubmitForm(data:any){


       console.log(data);
  
     }

    return (
        <>
            

            <div className={`h-[70%] lg:h-fit  w-full  border-0 border-solid border-red-600  ${textStylesBody}
                px-4  sm:px-[6rem]  md:px-[10rem] lg:px-[18rem]
            `}>

                <div className=" w-full  h-fit border-0 border-solid border-green-600">

                    <h3 className={`mt-6 mb-6 text-center font-semibold  ${textStylesH3}`}>Book appointment</h3>

                    <form action="" 
                        onSubmit={handleSubmit(onSubmitForm)}
                        className=" space-y-6 lg:space-y-12  border-0 border-solid border-yellow-600">


                        <div className={` flex flex-col`}>
                            <label htmlFor="reason">reason</label>
                            <select id="reason"

                                {...register("reason")}
                            >

                                <option value="checkup">check up</option>
                                <option value="consultation">consultation</option>

                            </select>

                        </div>
                        

                        
                        <div className={` flex flex-col `}>
                            <label htmlFor="complainNotes">Your complain</label>
                            <textarea
                                id="complainNotes" 
                                //cols = 20 default is 20
                                rows={5}
                                required 
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg  w-[100%]`}

                                {...register("complainNotes", { 
                                    required:true,
                                    pattern:/^[^<>]+$/i,
                                    max:255,
                                    min:1
                                })}
                                aria-invalid={errors.complainNotes ? "true" : "false"}
                            ></textarea>


                            {errors.complainNotes?.type === "pattern" && (
                                <p className={`${errorStyle}`} role="alert">invalid characters in text</p>
                            )}

                            {errors.complainNotes?.type === "min" && (
                                <p className={`${errorStyle}`} role="alert">Complain notes should not be empty</p>
                            )}

                            {errors.complainNotes?.type === "max" && (
                                <p  className={`${errorStyle}`} role="alert">Complain notes should have atmost 255 letters</p>
                            )}

                        </div>


                        <div>
                            <input 
                                type="hidden"
                                value={12355} //place the doctor id here boy

                                {...register("doctorID")}
                                />
                        </div>


                        <div>
                            <input 
                                type="hidden"
                                value={12355} //place the appointment id here boy

                                {...register("appointmentID")}
                                />
                        </div>

                        <div>
                            <input 
                                type="hidden"
                                value={12355} //place the startyear here boy

                                {...register("startYear",)}
                                />
                        </div>

                        <div>
                            <input 
                                type="hidden"
                                value={12355} //place the startmonth here boy

                                {...register("startMonth")}
                                />
                        </div>


                        <div>
                            <input 
                                type="hidden"
                                value={12355} //place the startday here boy

                                {...register("startDay")}
                                />
                        </div>



                        <div className=" flex  justify-center border-0 border-solid border-black"> 
                            <button 
                                //  aria-disabled={mutation.isPending}
                                className={ ` 
                                ${/*mutation.isPending ? "bg-[6f6d] cursor-not-allowed " : `bg-[#00171F]`*/1}
                                mt-[1rem]
                                text-white text-center w-[60%] h-[3.8rem] md:h-[4.6rem] rounded-lg shadow-lg
                                transition-all delay-75 duration-75 bg-[#00171F]
                                xl:hover:scale-95 
                            `}>
                                Book
                            </button>
                        </div>


                    </form>
                </div>

            </div>
        
        </>
    );
}