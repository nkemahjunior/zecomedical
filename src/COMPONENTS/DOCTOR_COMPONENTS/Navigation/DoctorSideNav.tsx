
import { textStylesBody } from "@/COMPONENTS/GENERAL_STYLES/general"
import DoctorLogo from "./DoctorLogo";
import { TbCalendarClock, TbClockQuestion } from "react-icons/tb";
import { LiaPlusSquareSolid } from "react-icons/lia";
import { PiArrowLineDown, PiArrowLineUp } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { IoTodayOutline } from "react-icons/io5";
import CheckLabResults from "./LabNotification";
import LabNotification from "./LabNotification";
import ConsultationLi from "./ConsultationLi";

 
 
export default function DoctorSideNav() {

    
    return (
        <div className={`border-0 border-solid border-yellow-700 h-full w-full 
        ${textStylesBody} text-white lg:text-black pl-4 pr-4 pb-4 2xl:pb-8 
            
        `}>
            

            <div className=" h-full ">
                
                <ul className=" h-full  relative border-0 border-solid border-green-600 ">
                

                    <DoctorLogo/>
                    <hr  className="hidden lg:block  border-stone-300 mt-8 mb-12"/>

                    <ul className={`mt-4 space-y-4 `}>

                        <li className={` font-semibold `}>Appointments</li>
                        <ul className=" space-y-6 ">

                            <ul className="hover:bg-stone-200 transition-colors  py-1">
                                <li className="ml-8 flex items-baseline gap-x-4  "><span><TbClockQuestion /></span>Appointment Requests</li>
                            </ul>

                            <ul className="hover:bg-stone-200 transition-colors  py-1">
                                <li className="ml-8 flex items-baseline gap-x-4"><span><TbCalendarClock /></span>Upcoming Appointments</li>
                            </ul>

                            <ul className="hover:bg-stone-200 transition-colors  py-1">
                                <li className="ml-8 flex items-baseline gap-x-4"> <span><LiaPlusSquareSolid /></span>Create Appointment</li>
                            </ul>

                        </ul>

                    </ul>
                    <hr  className="  border-stone-300 mt-8 mb-12"/>


                    <ul className={`mt-4 space-y-4 `}>

                        {/* this ConsultationLi component checks if there are available lab request, when the application first loads */}
                        <ConsultationLi/>
                        <ul className=" space-y-6 ">

                            <ul className="hover:bg-stone-200 transition-colors  py-1">
                                <li className="ml-8 flex items-baseline gap-x-4"><span><IoTodayOutline /></span>Appointments for Today</li>
                            </ul>

                            <ul className="hover:bg-stone-200 transition-colors  py-1">
                                <li className="ml-8 flex items-baseline gap-x-4"><span><PiArrowLineUp /></span>Ongoing consultation</li>
                            </ul>

                            <ul className="hover:bg-stone-200 transition-colors  py-1">
                                <li className="ml-8 flex items-baseline gap-x-4"><span><PiArrowLineDown /></span>Resume consultations</li>
                            </ul>

                            {/* this components checks if there are available completed lab results */}
                            <LabNotification/>

                        </ul>

                    </ul>
                    <hr  className=" xl:hidden  border-stone-300 mt-8 mb-12"/>


                    <ul className={`mt-4 xl:absolute bottom-0 space-y-4 w-full`}>

                        <li className={` font-semibold `}>Account Settings</li>
                        <ul className=" space-y-6 ">

                            <ul className="hover:bg-stone-200 transition-colors  py-1 w-full">
                                <li className="ml-8 flex items-baseline gap-x-4"><span><FaRegUserCircle /></span>Update profile</li>
                            </ul>
                            
                            <ul className="hover:bg-stone-200 transition-colors  py-1">
                                <li className="ml-8 flex items-baseline gap-x-4"><span><BiLogOut /></span>Log out</li>
                            </ul>
                        </ul>
                    </ul>


                </ul>

            </div>
        </div>
    );
}