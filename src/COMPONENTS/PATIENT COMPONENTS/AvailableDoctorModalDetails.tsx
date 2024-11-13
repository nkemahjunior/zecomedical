"use client"

import { useForm } from "react-hook-form"
import { errorStyle } from "../AUTH_COMPONENTS/FormErrorStyles"
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general"
import { BookAppointmentType, DoctorsAvailableType } from "@/TYPES/Patient/PatientTypes"
import { useBookAppointment } from "@/DATA_FETCHING/PATIENT/hooks/useBookAppointment"
import { useContext } from "react"
import { contextTypes, ModalContext } from "@/app/ModalProvider"
import ButtonSpinner from "../GLOBAL_COMPONENTS/ButtonSpinner"




export default function AvailableDoctorModalDetails({appointmentData}:{appointmentData:DoctorsAvailableType}) {

    const { register,formState:{errors}, handleSubmit, } = useForm<BookAppointmentType>()

    const {setShowModal,setModalContent} = useContext(ModalContext) as contextTypes

    const year = appointmentData.timeFrom.slice(0,4)
    const month = appointmentData.timeFrom.slice(5,7)
    const day = appointmentData.timeFrom.slice(8,10)

    const mutation = useBookAppointment()

    async function onSubmitForm(data: BookAppointmentType) {
       const res = await mutation.mutateAsync(data)

       //success
       if(res?.status == 201){
            setModalContent(null)
            setShowModal(false)
       }
       
 
  
    }



    return (
        <>
            

            <div className={`h-[70%] lg:h-fit  w-full  border-0 border-solid border-red-600  ${textStylesBody}
                px-4  sm:px-[6rem]  md:px-[10rem] lg:px-[18rem]
            `}>

                <div className=" w-full space-y-[2rem] lg:space-y-[4rem]  h-fit border-0 border-solid border-green-600">

                    <h3 className={` text-center font-semibold  ${textStylesH3}`}>Book appointment</h3>

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
                            <label htmlFor="complain_notes">Your complain</label>
                            <textarea
                                id="complain_notes" 
                                //cols = 20 default is 20
                                rows={5}
                                required 
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg  w-[100%]`}

                                {...register("complain_notes", { 
                                    required:true,
                                    pattern:/^[^<>]+$/i,
                                    max:255,
                                    min:1
                                })}
                                aria-invalid={errors.complain_notes ? "true" : "false"}
                            ></textarea>


                            {errors.complain_notes?.type === "pattern" && (
                                <p className={`${errorStyle}`} role="alert">invalid characters in text</p>
                            )}

                            {errors.complain_notes?.type === "min" && (
                                <p className={`${errorStyle}`} role="alert">Complain notes should not be empty</p>
                            )}

                            {errors.complain_notes?.type === "max" && (
                                <p  className={`${errorStyle}`} role="alert">Complain notes should have atmost 255 letters</p>
                            )}

                        </div>


                        <div>
                            <input 
                                type="hidden"
                                value={appointmentData.doctorID.doctor_id} //place the doctor id here boy

                                {...register("doctor_id")}
                                />
                        </div>


                        <div>
                            <input 
                                type="hidden"
                                value={appointmentData.id} //place the appointment id here boy

                                {...register("appointment_id")}
                                />
                        </div>

                        <div>
                            <input 
                                type="hidden"
                                value={year} //place the startyear here boy

                                {...register("startYear",)}
                                />
                        </div>

                        <div>
                            <input 
                                type="hidden"
                                value={month} //place the startmonth here boy

                                {...register("startMonth")}
                                />
                        </div>


                        <div>
                            <input 
                                type="hidden"
                                value={day} //place the startday here boy

                                {...register("startDay")}
                                />
                        </div>



                        <div className=" flex  justify-center border-0 border-solid border-black"> 
                            <button 
                                //  aria-disabled={mutation.isPending}
                                className={ ` 
                                ${mutation.isPending ? "bg-[#4d5d62] cursor-not-allowed pointer-events-none " : `bg-[#00171F]`}
                                mt-[1rem]
                                text-white text-center w-[60%] h-[3.8rem] md:h-[4.6rem] rounded-lg shadow-lg
                                transition-all delay-75 duration-75 
                                xl:hover:scale-95 
                            `}>
                                Book {mutation.isPending && <ButtonSpinner/>}
                            </button>
                        </div>


                    </form>


                </div>

            </div>
        
        </>
    );
}