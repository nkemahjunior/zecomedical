"use client"

import { textStylesBody, textStylesH3, textStylesH4 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { TbLetterX, TbTrashXFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import "../AppointmentRequests/filter.css"

 
 
export default function AppointmentRequests() {

    const date = new Date()

    const [close, setClose] = useState(true)
    
    return (


        //w-[300%] 
        <div className={` border-2 border-red-600 border-solid 
           ${textStylesBody} text-black w-full
        px-4 sm:px-16 xl:px-24 2xl:px-36
        py-12
        
            
        `}>
            

            <div className="w-full mb-[2rem]">
                <h1 className={`${textStylesH3}`}>Appointment Requests Filters</h1>
            </div>



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


                <form className=" space-y-[2rem] xl:space-y-12" >

                    <div className=" sm:flex sm:justify-evenly sm:items-center w-full space-y-[2rem] xl:space-y-12">

                        <div >
                            <label htmlFor="status">Status</label>
                            <select  id="status" className="border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]">
                                <option value="accepted">ACCEPTED</option>
                                <option value="declined">DECLINED</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor="patientName">Patient name</label>
                            <input className="border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]" type="text" id="patientName" />
                        </div>

                    </div>

                    <div className="flex gap-x-4 w-full border-0 border-solid border-red-700">

                        <div className="flex items-center  gap-x-2 w-[30%] border-0 border-solid border-red-700">

                            <label htmlFor="startDay">DD&nbsp;:</label>
                            <input type="number" id="startDay"
                                required aria-label="enter starting day"
                                placeholder="00"
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                
                            />

                        </div>


                        <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">

                            <label htmlFor="startMonth">MM&nbsp;:</label>
                            <input type="number" id="startMonth" 
                                placeholder="00"
                                className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                                
                            />

                        </div>

                        <div className="flex items-center gap-x-2 w-[30%] border-0 border-solid border-red-700">

                            <label htmlFor="startYear">YY&nbsp;:</label>
                            <input type="number" id="startYear" 
                            placeholder="0000" defaultValue={date.getFullYear()}
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                            />

                        </div>

                    </div>


                    <div className="w-full flex justify-center">
                        <button className="bg-[#00171F] text-white text-center w-[30%] 2xl:w-[20%] h-[3.8rem] md:h-[4.6rem] rounded-lg shadow-lg
                                        transition-all delay-75 duration-75
                                        xl:hover:scale-95">Apply&nbsp;Filter
                        </button>
                    </div>

                </form>
            </div>




            <div className="w-[100%] overflow-x-scroll 2xl:overflow-x-hidden  border-2 border-solid border-stone-100
                mt-[4rem]
                bg-white rounded-xl shadow-xl py-16 
            ">

                <div className="w-[300%] xl:w-[200%] 2xl:w-full">  

                    <table className=" table-auto w-full ">
                        <caption className={`${ textStylesH3} text-start pl-4 2xl:pl-0 2xl:text-center  py-4 `}>Appointment requests</caption>
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

                        <tbody>
                            <tr className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">22-05-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco shadons</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CONSULTATION</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My left eye will peeel, my ear hurts lorem</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">PENDING</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"> <span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>

                            <tr  className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">21-05-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco clicks</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CHECKUP</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My  nose hurts, why is my forehead getting biig</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">PENDING</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"><span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>

                            <tr className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">22-04-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco palays</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CONSULTATION</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My left eye will peeel, my ear hurts</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">ACCEPTED</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"><span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">22-04-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco palays</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CONSULTATION</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My left eye will peeel, my ear hurts</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">ACCEPTED</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"><span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">22-04-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco palays</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CONSULTATION</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My left eye will peeel, my ear hurts</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">ACCEPTED</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"><span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">22-04-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco palays</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CONSULTATION</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My left eye will peeel, my ear hurts</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">ACCEPTED</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"><span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">22-04-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco palays</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CONSULTATION</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My left eye will peeel, my ear hurts</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">ACCEPTED</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"><span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-[#e6e8e9]">
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">22-04-2024</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">zeco palays</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">CONSULTATION</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">My left eye will peeel, my ear hurts</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem]">ACCEPTED</td>
                                <td className=" pl-[2rem] py-[1rem] 2xl:py-[2rem] lg:py-[1.2rem] flex gap-x-6">
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline  p-2 bg-green-600 rounded-lg shadow-2xl"><span><TiTick /></span> Accept</button>
                                    <button className=" transition-all delay-75 duration-75
                                    xl:hover:scale-95 flex items-baseline p-2 bg-red-400 rounded-lg shadow-2xl"><span><TbLetterX /></span> Reject</button>
                                
                                </td>
                            </tr>



                        </tbody>
                    </table>
                </div> 

            </div>
        </div>
    );
}