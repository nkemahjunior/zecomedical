'use client'

import "../AppointmentRequests/filter.css"
import { useGetAcceptedUpcomingRequests } from "@/DATA_FETCHING/DOCTOR/hooks/useGetAppointmentRequests"
import { appointmentReqType } from "@/TYPES/Doctor/doctorTypes"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, FormEvent, Fragment, useCallback, useEffect, useState } from "react"
import LoadingSpinner from "../LoadingSpinner"
import { textStylesBody, textStylesH3, textStylesH4 } from "@/COMPONENTS/GENERAL_STYLES/general"
import { IoFilterOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import UpcomingAppointmentTableRow from "./UpcomingAppointmentTableRow"

 
 
export default function UpcomingAppointmentsDoc() {

    //state controlling the opening and closing of the filter
    const [close, setClose] = useState(true)


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

    // p will be 0 when user comes on this page and will be incremented/decremented when user click next/previous buttons
    const page = searchParams.get('p') 

    const query = useGetAcceptedUpcomingRequests(Number(page))
    const dataArr = query.data?.content





    //filters 
    const [status,setStatus] = useState("")
    const [name,setName] = useState("")
    const [yearF,setYearF] = useState("")
    const [monthF,setMonthF] = useState("")
    const [dayF,setDayF] = useState("")

    //this is going to hold the initial data and will change depending on the filters applied
    const [filteredData, setFilteredData] = useState<appointmentReqType[] | undefined>([])


    //use effect to initialise the above state when component mounts and when dataArr changes
    useEffect(() => {
        setFilteredData(dataArr)
    },[dataArr])

    
    //console.log(query.data);


    //filter function does the filtering work and set filtere data in the filteredData array
    function filterData(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        if( !query.data) return
        if(query.data.content.length < 1) return
        if(status.length < 1 && name.length < 1 && yearF.length < 1 && monthF.length < 1 && dayF.length < 1 ) return

        let dataFilter:appointmentReqType[] | undefined;
        //setFilteredData([])

        

        //all filters available
        if(name.length > 0 && yearF.length > 0 && monthF.length > 0 && dayF.length > 0){
            

            

            dataFilter = dataArr?.filter((el) => {
                return el.patient_id.patientID.name.replaceAll("_", " ").toLocaleLowerCase().includes(name.toLocaleLowerCase())
            }).filter((el) => {
                // year  
                return el.dateTime.slice(0,4) == yearF
                }).filter((el) => {
                    //month                
                return el.dateTime.slice(5,7) == monthF
                }).filter((el) => {
                    //day
                return  el.dateTime.slice(8,10) == dayF
                })

                setFilteredData(dataFilter)
                
                
        }


        //only name filter available
        if(name.length > 0 && yearF.length < 1 && monthF.length < 1 && dayF.length < 1){
            dataFilter = dataArr?.filter((el) => {
                return el.patient_id.patientID.name.replaceAll("_", " ").toLocaleLowerCase().includes(name.toLocaleLowerCase())
            })

            setFilteredData(dataFilter)
        }


        //only date filter available
        if(name.length < 1 && yearF.length > 0 && monthF.length > 0 && dayF.length > 0){
            dataFilter = dataArr?.filter((el) => {
                // year  
                return Number(el.dateTime.slice(0,4)) ==Number(yearF)
                }).filter((el) => {
                    //month                
                return Number(el.dateTime.slice(5,7)) == Number(monthF)
                }).filter((el) => {
                    //day
                return  Number(el.dateTime.slice(8,10)) == Number(dayF)
            })

            //console.log(dataFilter);

            setFilteredData(dataFilter)
        }

        //only day filter
        if( dayF.length > 0){
            dataFilter = dataArr?.filter((el) => {
                //day
                return  Number(el.dateTime.slice(8,10)) == Number(dayF)
            })
            
            setFilteredData(dataFilter)
        }

        //only month filter
        if( monthF.length > 0){
            dataFilter = dataArr?.filter((el) => {
                //month                
                return Number(el.dateTime.slice(5,7)) == Number(monthF)
            })
            
            setFilteredData(dataFilter)
        }
        

        //okay i am ending here

        // console.log(dataFilter);


    }

    
    
    //pagination function changes the page, new paginated data is loaded into dataArr, which triggers the use effect
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
     
    
    //loading indicator when fetching data
    if(query.isLoading) return <LoadingSpinner/>

    


    return (


        //w-[300%] 
        <div className={` border-0 border-yellow-600 border-solid 
           ${textStylesBody} text-black w-full
        px-4 sm:px-16 xl:px-24 
        py-12     
        `} 

      
        >

            



            <div className="w-full mb-[2rem]">
                <h1 className={`${textStylesH3}`}>Upcoming Appointments Filters</h1>
            </div>


            {/* filters: css code for close/open found in filter.css file */}
            <div className={` border-0 border-solid border-blue-950 w-full bg-white
                space-y-[2rem] px-[1.5rem]  py-[2rem] overflow-y-hidden
                rounded-xl shadow-xl
                ${close ? ' close' : 'open '}
                `}>

                <div className="w-full flex justify-between items-center">

                    <h2 className={`${textStylesH4} flex gap-x-2 items-center `}><span><IoFilterOutline /></span> Filters</h2>

                    <div className="bg-stone-200 flex justify-center items-center p-2 rounded-md 
                        xl:hover:bg-stone-500
                    ">

                        <button 
                            className={`${close ? ' rotate-[360]' : 'rotate-180  '}`}
                            onClick={() => setClose(v => !v)}
                        >
                            <IoIosArrowDown />
                        </button>


                    </div>
                </div>


                <form className=" space-y-[2rem] xl:space-y-12" onSubmit={filterData} >

                    <div className=" sm:flex sm:justify-evenly sm:items-center w-full space-y-[2rem] xl:space-y-12">

                        <div >
                            <label htmlFor="status">Status</label>
                            <select  id="status" className="border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]" onChange={ (e:ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}>
                                <option value="accepted">ACCEPTED</option>
                                <option value="declined">DECLINED</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor="patientName">Patient name</label>
                            <input 
                            className="border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]" type="text" id="patientName" 
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="flex gap-x-4 w-full border-0 border-solid border-red-700">

                        <div className="flex items-center  gap-x-2 w-[30%] border-0 border-solid border-red-700">

                            <label htmlFor="startDay">DD&nbsp;:</label>
                            <input type="number" id="startDay"
                                 aria-label="enter starting day"
                                placeholder="00"
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => setDayF(e.target.value)}
                                
                            />

                        </div>


                        <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">

                            <label htmlFor="startMonth">MM&nbsp;:</label>
                            <input type="number" id="startMonth" 
                                placeholder="00"
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => setMonthF(e.target.value)} 
                                
                            />

                        </div>

                        <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">

                            <label htmlFor="startYear">YY&nbsp;:</label>
                            <input type="number" id="startYear" 
                            placeholder="0000" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setYearF(e.target.value)}
                            />

                        </div>

                    </div>


                    <div className="w-full flex justify-center">
                        <button className={` text-white text-center w-[30%] 2xl:w-[20%] h-[3.8rem] md:h-[4.6rem] rounded-lg shadow-lg
                                        transition-all delay-75 duration-75
                                        xl:hover:scale-95  bg-[#00171F]`}
                            >Apply&nbsp;Filter
                        </button>
                    </div>

                </form>
            </div>




            <div className="w-[100%] overflow-x-scroll 2xl:overflow-x-hidden  border-2 border-solid border-stone-100
                mt-[4rem]
                bg-white rounded-xl shadow-xl py-16 
            "
            >

                <div className="w-[300%] xl:w-[200%] 2xl:w-full">  

                    <table className=" table-auto w-full " >
                        <caption className={`${ textStylesH3} text-start pl-4 2xl:pl-0 2xl:text-center  py-4 `}>Upcoming Appointments</caption>
                        <thead>
                            <tr className="bg-[#e6e8e9] border-b-2 border-solid border-stone-400"> 
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] ">Date</th>
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">Patient&nbsp;Name</th>
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">Reason</th>
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">Complain&nbsp;notes</th>
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">Status</th>
                                <th className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">Action</th>
                                
                            </tr>
                        </thead>

                        <tbody >

                            {
                                filteredData?.map((el,i) => (

                                    <UpcomingAppointmentTableRow data={el} key={i}/>

                                ))
                            }
                        </tbody>
                    </table>
                </div> 

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