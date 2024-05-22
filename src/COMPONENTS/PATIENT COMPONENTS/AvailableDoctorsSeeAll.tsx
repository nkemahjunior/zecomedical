"use client"
import { useGetAvailableDoctors } from "@/DATA_FETCHING/PATIENT/hooks/useGetAvailableDoctors";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import AvailableDoctor from "./AvailableDoctor";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import LoadingAvailableDoctorsSeeAll from "./loading/LoadingAvailableDoctorsSeeAll";

const colorStyles = {
    textColor:"text-black",
    buttonText:"text-white",
    buttonColor:"bg-[#00171F]"
}


 
export default function AvailableDoctorsSeeAll() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()


    const createQueryString = useCallback(

        (name: string, value: string) => {

          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
    )

    const page = searchParams.get('p') 
    const query = useGetAvailableDoctors(Number(page))
    

    if(query.isLoading) return <LoadingAvailableDoctorsSeeAll/>
    //console.log(query.data?.content);


    
    function nextPagePagination(){

        if(!query.data) return;
        if(query.data.content.length < 1) return;
   
        const newPage = Number(page) + 1
              
        if(query.data.last == false ){
            router.push(pathname + '?' + createQueryString('p', `${newPage}`))

        }
    

        
    }

    function prevPagePagination(){
        if(!query.data) return;
        if(query.data.content.length < 1) return;

        const newPage = Number(page) - 1
              
        if(query.data.first == false ){
            router.push(pathname + '?' + createQueryString('p', `${newPage}`))

        }

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

                {
                    query.data?.content.map( (el,i) => (
                        <div className=" " key={i}>
                            <AvailableDoctor data={el}  colorStyles={colorStyles}/>
                        </div>
    
                    ))
                }
                    
            </div>


            <div className={`${textStylesBody} border-0 border-solid border-black mt-8 xl:mt-16 w-full flex justify-center items-center gap-x-8 sm:gap-x-12`}>

                <p>showing results {query.data!.number  + 1} of {query.data?.totalPages} </p>

            </div>

            <div className={`${textStylesBody} border-0 border-solid border-black mt-6 xl:mt-14 w-full flex justify-center items-center gap-x-8 sm:gap-x-12`}>

                <button onClick={prevPagePagination}
                className="w-[12rem] h-[3rem] sm:w-[15rem] sm:h-[4rem] text-black border-2 border-solid border-[#00171F] rounded-lg bg-stone-50 xl:hover:scale-95 flex justify-center items-center"><span><MdOutlineKeyboardDoubleArrowLeft /></span> Prev</button>

                <button onClick={nextPagePagination}
                className="w-[12rem] h-[3rem] sm:w-[15rem] sm:h-[4rem] text-black border-2 border-solid border-[#00171F] rounded-lg bg-stone-50 xl:hover:scale-95 flex justify-center items-center">Next <span><MdOutlineKeyboardDoubleArrowRight /></span></button>

            </div>

        </div>
    );
}