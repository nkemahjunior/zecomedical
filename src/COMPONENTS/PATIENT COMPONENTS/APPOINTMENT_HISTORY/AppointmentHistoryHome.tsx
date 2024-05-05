import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import Appointment from "./Appointment";

 
 
export default function AppointmentHistoryHome() {

    
    return ( 
        <div className="  w-full border-0 border-solid border-red-600 bg-white  pb-[4rem]">

            {/* padding of h3 = px of Available doctor component + px of the div holding the Available components here-- the div after this header */}
            <div className="py-[1.5rem] xl:py-[2.5rem]  lg:mt-12
            px-[1.2rem]  sm:px-[5rem] md:px-[14rem]  lg:px-[15.5rem]  xl:px-[26.5rem] 2xl:px-[49.4rem] 
            space-y-[2rem] xl:space-y-[3rem]
            ">

                <h3 className={`border-0  border-solid border-black 
                 ${textStylesH3} text-black
                `
                }>
                    Appointment History
                </h3>

                <div className={`border-0 border-solid border-red-600 ${textStylesBody} text-black`}>

                    <label htmlFor="status">Filter by status: </label>
                    <select  id="status">
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                    </select>
                    
                </div>

            </div>
            


            <div className=" border-0 border-solid border-lime-500  
             px-[1.2rem] sm:px-[2rem] md:px-[6rem] lg:px-[14rem] xl:px-[22rem] 2xl:px-[46rem]
            ">

                <div className=" divide-y-2 space-y-8 divide-[#e6e8e9]">

                    <div className=" ">
                        <Appointment/>
                    </div>

                    <div className=" ">
                        <Appointment/>
                    </div>

                    <div className=" ">
                        <Appointment/>
                    </div>

                    <div className=" ">
                        <Appointment/>
                    </div>

                    <div className=" ">
                        <Appointment/>
                    </div>

                    <div className=" ">
                        <Appointment/>
                    </div>
                </div>
               
                    
            </div>
        </div>
    );
}