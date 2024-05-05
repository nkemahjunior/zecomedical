"use client"

import AvailableDoctor from "./AvailableDoctor";
import UpcomingAppointments from "./UpcomingAppointments";
import PreviousSession from "./PreviousSession";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";

 
 
export default function PatientHome() {
{/* <div className="h-[7rem] w-[7rem] rounded-[50%]  border-2 border-solid border-red-600 relative overflow-hidden">  

<Image className="block"  src={"/dp.jpeg"} alt="logo" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
</div> */}
   
const colorStyles = {
    textColor:"text-white",
    buttonText:"text-[#003459]",
    buttonColor:"bg-white"
}


    return ( 
        
        <>
                                    
            
            {/* mt is thesame value as the height of the nav bar, don't change it boy... ahhh i have transfered it to the Patient layout */}
            <div className={`  lg:grid lg:grid-cols-2 lg:gap-x-12 2xl:gap-x-32 border-solid border-0 border-red-600 
                px-2 pb-4 sm:px-20 sm:pb-6  md:px-36 md:pb-8 lg:px-12 lg:pb-14 2xl:px-[18rem] 2xl:pb-24 
            `}>


                {/**grid 1 */}
                <div className=" border-0 border-solid border-pink-600 ">

                    <UpcomingAppointments/>
                    <PreviousSession/>

                </div>


                {/**grid 2 */}
                <div className=" border-0 border-solid border-pink-600 "> 

                    

                    <h3 className={`border-0 border-solid border-black mt-6 lg:mt-12 ${textStylesH3} text-[#00171F]`}>Available Doctors</h3>

                    <div className="h-full lg:h-[89.2%] bg-[#003459] 
                    py-[3rem]  md:py-[4rem]  lg:py-[1.6rem]  xl:py-[2.8rem] mt-8 lg:mt-12
                    rounded-xl overflow-hidden shadow-xl
                    ">
                        
                        <div className="space-y-10 md:space-y-14 lg:space-y-32 
                        divide-y-2 divide-white divide">

                                <AvailableDoctor  colorStyles={colorStyles}/>
                                <AvailableDoctor colorStyles={colorStyles}/>
                                <AvailableDoctor colorStyles={colorStyles}/>

                        </div>


                        <div className="flex justify-center mt-20 sm:mt-24 lg:mt-[4rem] xl:mt-[8rem]">
                            <button className={`bg-white  ${textStylesBody}  text-[#003459] rounded-lg w-[70%] py-[1rem] lg:w-[80%] xl:w-[70%]`}>
                                        See All
                            </button>
                        </div>


                    </div>

                    
                </div>
            
            </div>
        </>
    );
} 


//p-[1.2rem] sm:p-[3rem] md:px-[2rem] md:py-[4rem] lg:px-[2rem] lg:py-[6rem] xl:px-[6rem] xl:py-[7rem] 