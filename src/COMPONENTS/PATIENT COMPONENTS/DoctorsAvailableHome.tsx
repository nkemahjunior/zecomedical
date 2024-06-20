
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import AvailableDoctor from "./AvailableDoctor";
import { useGetAvailableDoctorsHome } from "@/DATA_FETCHING/PATIENT/hooks/useGetAvailableDoctorsHome";
import LoadingAvailableDoctorsHome from "./loading/LoadingAvailableDoctorsHome";
import Link from "next/link";
import { ChangeEvent, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { SearchContext, searchContextTypes } from "@/app/(PATIENT)/SearchBarProvider";


const colorStyles = {
    textColor:"text-white",
    buttonText:"text-[#003459]",
    buttonColor:"bg-white"
}
 
 
export default  function DoctorsAvailableHome() {


    const {searchValue} = useContext(SearchContext) as searchContextTypes

    
    
    const query = useGetAvailableDoctorsHome(searchValue)
    if(query.isLoading) return <LoadingAvailableDoctorsHome/>
    //console.log(query.data)
     

 


    return (
        <div className=" border-0 border-solid border-pink-600 "> 

              
            <h3 className={`border-0 border-solid border-black mt-6 lg:mt-12 ${textStylesH3} text-[#00171F]`}>Available Doctors</h3>

            <div className="h-full lg:h-[89.2%] bg-[#003459] 
            py-[3rem]  md:py-[4rem]  lg:py-[1.6rem]  xl:py-[2.8rem] mt-8 lg:mt-12
            rounded-xl overflow-hidden shadow-xl
            ">
                
                <div className="space-y-10 md:space-y-14 lg:space-y-32 
                divide-y-2 divide-white divide">

                    {
                        query.data && "content" in query.data ? 

                        query.data?.content?.map((el,i) => (
                            <div key={i}>
                                <AvailableDoctor data={el}   colorStyles={colorStyles}/>
                            </div>
                        ))

                        :

                        query.data?.map((el,i) => (
                            <div key={i}>
                                <AvailableDoctor data={el}   colorStyles={colorStyles}/>
                            </div>
                        ))
                    }

                </div>


                <div className="flex justify-center mt-20 sm:mt-24 lg:mt-[4rem] xl:mt-[8rem]">
                   <Link  href={"/patient/availableDoctors?p=0"}  className={`bg-white  ${textStylesBody}  text-[#003459] rounded-lg w-[70%] py-[1rem] lg:w-[80%] xl:w-[70%] block text-center xl:hover:scale-95 transition-all duration-75`}> 
                       See All
                    </Link>
                </div>


            </div>


        </div>

    );
}