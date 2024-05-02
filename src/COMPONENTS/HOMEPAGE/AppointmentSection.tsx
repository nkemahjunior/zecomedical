import { baseTextColor } from "@/COMPONENTS/GENERAL_STYLES/general";
import { AiOutlineSolution } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { GoGitPullRequest } from "react-icons/go";
import { PiGitPullRequestLight, PiGitPullRequestThin } from "react-icons/pi";
import { TbCalendarPlus } from "react-icons/tb";
import { VscGitPullRequestCreate } from "react-icons/vsc";

 
 
export default function AppointmentSection() {
    return (
        <>
            <div className="border-solid border-2 border-fuchsia-900">

                <div className="flex justify-center
                mt-[4rem] sm:mt-[6rem] lg:mt-[8rem] xl:mt-[10rem] 2xl:mt-[12rem]
                mb-[4rem] sm:mb-[6rem] lg:mb-[8rem] xl:mb-[10rem] 2xl:mb-[12rem]
                ">
                    <h2 className={` 
                    
                    text-4xl xl:text-5xl 2xl:text-6xl font-medium  text-center font-sans 
                    text-[${baseTextColor}]
                    lg:w-[70%] tracking-tight`
                    }>
                                Easy&nbsp; 
                                <span className="text-[#3D96A7]">steps</span> for your care
                    </h2>
                </div>


                <div className=" flex justify-center "> 
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-16 gap-x-16">



                        <div className="bg-white
                        pt-12 px-6 sm:pt-20 
                        w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden  rounded-xl shadow-xl 
                        space-y-2 sm:space-y-6 
                        ">
                            
                            

                            <div className="flex justify-center">
                                <FaUserDoctor  style={{stroke:"#0F647E", fill:"white" ,strokeWidth:"2.3rem",
                                }}
                                
                                className=" w-[5rem] h-[5rem]"
                                /> 
                            </div>
                            
                            <p className={`text-xl xl:text-2xl 2xl:text-4xl text-[${baseTextColor}]
                               text-center 
                            `}>
                                Search Doctor
                            </p>

                            <p className={`text-center text-[${baseTextColor}] 
                                text-lg xl:text-xl 2xl:text-2xl 
                            `}>Search a doctor according the speciality</p>

                            
                        </div>




                        <div className="bg-white 
                        pt-12 px-6  sm:pt-20 
                        w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden  rounded-xl shadow-xl
                        space-y-2 sm:space-y-6
                        ">

                            <div className="flex justify-center">
                                <PiGitPullRequestThin style={{ stroke:"#0F647E",strokeWidth:"5px"
                                    }}
                                    
                                    className=" w-[5rem] h-[5rem]"
                                />
                            </div>

                            <p className={`text-xl xl:text-2xl 2xl:text-4xl text-[${baseTextColor}]
                                text-center w-full
                            `}>
                                Request a Consultation
                            </p>

                            <p className={`text-center text-[${baseTextColor}] sm:text-xl w-full
                            text-lg xl:text-xl 2xl:text-2xl 
                            `}>Send a consultation request to doctor</p>
                        </div>



                        <div className="bg-white 
                        pt-12 px-6  sm:pt-20 
                        w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden  rounded-xl shadow-xl
                        space-y-2 sm:space-y-6
                        ">

                            <div className="flex justify-center">
                                <TbCalendarPlus style={{ stroke:"#0F647E",strokeWidth:"1.5px"
                                }}
                                
                                className=" w-[5rem] h-[5rem]"/>
                            </div>

                            <p className={`text-xl xl:text-2xl 2xl:text-4xl text-[${baseTextColor}]
                                text-center
                            `}>
                                Make Appointment
                            </p>

                            <p className={`text-center text-[${baseTextColor}] sm:text-xl
                            text-lg xl:text-xl 2xl:text-2xl 
                            `}>
                                Doctor accepts your request, and you get an appointment with the doctor on the date you choosed when making an appointment
                            </p>
                        </div>



                        <div className="bg-white 
                        pt-12 px-6  sm:pt-20 
                        w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] overflow-hidden  rounded-xl shadow-xl
                        space-y-2 sm:space-y-6
                        ">

                            <div className="flex justify-center">
                                <AiOutlineSolution style={{fill:"#0F647E" 
                                }}
                                
                                className=" w-[5rem] h-[5rem]"/>
                            </div>

                            <p className={`text-xl xl:text-2xl 2xl:text-4xl text-[${baseTextColor}]
                                text-center
                            `}>
                                Get Solution
                            </p>

                            <p className={`text-center text-[${baseTextColor}] sm:text-xl
                            text-lg xl:text-xl 2xl:text-2xl 
                            `}>Meet doctor at the hospital and get solutions to your health problem</p>

                        </div>



                    </div>
                </div>
            </div>
        </>
    );
}