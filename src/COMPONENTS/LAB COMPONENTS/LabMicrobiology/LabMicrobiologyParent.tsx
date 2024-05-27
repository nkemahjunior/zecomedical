'use client'

import { textStylesBody, textStylesH3, textStylesH4 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { ChangeEvent,  useEffect,  useRef,  useState } from "react";
import { BiSearch } from "react-icons/bi";
import LabMicrobiologyTableRow from "./LabMicrobiologyTableRow";
import { useGetLabMicrobiologyRequests } from "@/DATA_FETCHING/LAB/hooks/useGetLabRequests";
import LabLoadingSpinner from "../GeneralLab/LabLoadingSpinner";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import toast from "react-hot-toast";


 
 
export default function LabMicrobiologyParent() {

  
    const [inputValue, setInputValue] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const searchRef = useRef<HTMLInputElement>(null)

    const refObserver = useRef<HTMLDivElement>(null)    
    const infiniteQuery = useGetLabMicrobiologyRequests(searchValue)
    //console.log(infiniteQuery);

    function search(){
        if(inputValue.length < 3) return toast.error("search value should contain morethan three characters")

        if(searchRef.current)
            setSearchValue(searchRef.current?.value)
    }


  

    useEffect(
        ()=>{
           

            function createObserver() {
                let observer;
              
                let options = {
                  root: null,//observe against viewport of computer
                  rootMargin: `0px`, //margin to apply the observing element
                  threshold: 0, //trigger callback fn as soon as 0px or 0% of the observing element becomes visible on the view port
                };


                function handleIntersect(entries:IntersectionObserverEntry[]) {
                    //console.log(entries);
                    const [entry] = entries;
            
                    if(entry.isIntersecting) {

                        if( infiniteQuery.isFetching == false  ){
                           // console.log(entry)
                           // await wait10(10000)
                            infiniteQuery.fetchNextPage()
                        }
                    }
                    //else console.log("not intersecting");
                }



                
              
               
                if(refObserver.current){

                    observer = new IntersectionObserver(handleIntersect, options);
                    observer.observe(refObserver.current!);
                }
            }
    
            createObserver()
        },[infiniteQuery,infiniteQuery.fetchNextPage]
        
    )

    if(infiniteQuery.isPending)  return <LabLoadingSpinner/>

    return (


        //w-[300%] 
        <div className={` border-0 border-yellow-600 border-solid 
           ${textStylesBody} text-black w-full
        px-4 sm:px-16 xl:px-32 2xl:px-[20rem] 
        py-12     
        `} 
       
        >

            

            <div className="w-full flex justify-center">
                <h1 className={`${textStylesH3} text-black font-medium `}>Microbiology Laboratory</h1>
            </div>


            {/* search bar */}
            <div  className="border-green-600 border-solid border-0 w-full flex justify-center mt-8 xl:mt-14">

                <div className="border-red-600 border-solid border-0  flex gap-x-2">
                    
                    <input type="text" placeholder="search patient..."
                    className="border-2 border-black border-solid h-[4rem] w-[24rem] sm:w-[40rem] md:w-[50rem] xl:w-[60rem] rounded-xl "
                    ref={searchRef}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    defaultValue={inputValue}
                    />

                    <div>
                        <button 
                        onClick={search}
                        className="h-[4rem] py-2 px-4 bg-[#00171F] text-white flex justify-center items-center rounded-lg xl:hover:scale-95">Search <span className="ml-2"><BiSearch/></span> </button>
                    </div>

                </div>
            </div>
 



            <div className="w-[100%] overflow-x-scroll 2xl:overflow-x-hidden  border-2 border-solid border-stone-100
                mt-[4rem]
                bg-white rounded-xl shadow-xl py-16 
            "
            >

                <div className="w-[180%] sm:w-[140%] md:w-[120%] xl:w-[100%] 2xl:w-full">  

                    <table className=" table-auto w-full " >
                        <caption className={`${ textStylesH4} text-start pl-4 2xl:pl-0 2xl:text-center  py-4 `}>Lab requests</caption>

                        <thead>
                            <tr className="bg-[#e6e8e9] border-b-2 border-solid border-stone-400"> 

                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] border-stone-300 border-solid border-2  ">Date</th>
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] border-stone-300 border-solid border-2  ">Patient&nbsp;Name</th>
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] border-stone-300 border-solid border-2  ">Request</th>
                               
                            </tr>
                        </thead>

                        <tbody >

                            {
                                infiniteQuery.data?.pages.map((el) => (
                                    el?.content?.map( (req) => (
                                        <LabMicrobiologyTableRow data={req} key={req.id}/>
                                    ) )
                                ))
                            }




                        </tbody>
                    </table>
                </div> 

            </div>
            
            {/* div the triggers fetch more data when it becomes visible */}
            <div className="border-0 border-red-600 border-solid   "  ref={refObserver}></div>

            { infiniteQuery.hasNextPage && infiniteQuery.isFetching && <div className="w-full flex justify-center items-center mt-4">Loading&nbsp;<ButtonSpinner/></div>}

        </div>
    );
}