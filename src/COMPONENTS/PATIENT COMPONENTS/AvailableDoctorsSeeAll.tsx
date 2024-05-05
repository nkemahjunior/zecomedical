import { textStylesH3 } from "../GENERAL_STYLES/general";
import AvailableDoctor from "./AvailableDoctor";

 


 
export default function AvailableDoctorsSeeAll() {

    const colorStyles = {
        textColor:"text-black",
        buttonText:"text-white",
        buttonColor:"bg-[#00171F]"
    }

    //sm:px-[2rem] md:px-[6rem] lg:px-[14rem] xl:px-[22rem] 2xl:px-[40rem]
    
    return ( 
        <div className="  w-full border-0 border-solid border-red-600 bg-white  pb-[4rem]">

            {/* padding of h3 = px of Available doctor component + px of the div holding the Available components here-- the div after this header */}
            <h3 className={`border-0  border-solid border-black 
            py-[1.5rem] xl:py-[2.5rem]    lg:mt-12 ${textStylesH3} text-black
            px-[1.2rem]  sm:px-[5rem] md:px-[14rem]  lg:px-[15.5rem]  xl:px-[26.5rem] 2xl:px-[49.4rem] 
            `
            }>
                Available Doctors
            </h3>
            
            <div className=" border-0 border-solid border-lime-500  
             divide-y-2 space-y-8 divide-[#e6e8e9]
             px-[1.2rem] sm:px-[2rem] md:px-[6rem] lg:px-[14rem] xl:px-[22rem] 2xl:px-[46rem]
            ">
                <div className=" ">
                    <AvailableDoctor  colorStyles={colorStyles}/>
                </div>

                <div className=" ">
                    <AvailableDoctor  colorStyles={colorStyles}/>
                </div>

                <div className=" ">
                    <AvailableDoctor  colorStyles={colorStyles}/>
                </div>

                <div className=" ">
                    <AvailableDoctor  colorStyles={colorStyles}/>
                </div>

                <div className=" ">
                    <AvailableDoctor  colorStyles={colorStyles}/>
                </div>

                <div className=" ">
                    <AvailableDoctor  colorStyles={colorStyles}/>
                </div>
               
                    
            </div>
        </div>
    );
}