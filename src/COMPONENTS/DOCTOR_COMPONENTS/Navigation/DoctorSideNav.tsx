
'use client'
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
import ResumeConsultationsLi from "./ResumeConsultationsLi";
import Link from "next/link";
import LogoutLi from "./LogoutLi";
import { usePathname } from "next/navigation";

 
 
export default function DoctorSideNav() {

    const pathname = usePathname()

    
    return (
      <div
        className={`border-0 border-solid border-yellow-700 h-full w-full 
        ${textStylesBody} text-white lg:text-black pl-4 pr-4 pb-4 2xl:pb-8 
            
        `}
      >
        <div className=" h-full ">
          <ul className=" h-full  relative border-0 border-solid border-green-600  ">
            <Link href={"/doctor/appointments/requests"} className="block">
              {" "}
              <DoctorLogo />
            </Link>
            <hr className="hidden lg:block  border-stone-300 mt-8 mb-12" />

            <ul className={`mt-4 space-y-4  `}>
              <li className={`   `}>Appointments</li>
              <ul className=" space-y-6 ">
                <Link href={"/doctor/appointments/requests"} className="block">
                  <ul
                    className={` transition-colors duration-300 ${
                      pathname == "/doctor/appointments/requests"
                        ? "bg-stone-200 text-[#24312F] font-bold  " //bg-[#24312F] text-white
                        : ""
                    }    hover:bg-stone-300  py-1`}
                  >
                    <li className="ml-8 flex items-baseline gap-x-4  ">
                      {pathname == "/doctor/appointments/requests" && (
                        <span className=" ">
                          <TbClockQuestion strokeWidth={3.5} />
                        </span>
                      )}
                      {pathname != "/doctor/appointments/requests" && (
                        <span className=" ">
                          <TbClockQuestion />
                        </span>
                      )}
                      Appointment Requests
                    </li>
                  </ul>
                </Link>

                <Link href={"/doctor/appointments/upcoming"} className="block">
                  <ul
                    className={` transition-colors duration-300 ${
                      pathname == "/doctor/appointments/upcoming"
                        ? "bg-stone-200 text-[#24312F] font-bold "
                        : ""
                    }    hover:bg-stone-300  py-1`}
                  >
                    <li className="ml-8 flex items-baseline gap-x-4">
                      {pathname == "/doctor/appointments/upcoming" && (
                        <span>
                          <TbCalendarClock strokeWidth={3.5} />
                        </span>
                      )}
                      {pathname != "/doctor/appointments/upcoming" && (
                        <span>
                          <TbCalendarClock />
                        </span>
                      )}
                      Upcoming Appointments
                    </li>
                  </ul>
                </Link>

                <Link href={"/doctor/appointments/create"} className="block">
                  <ul
                    className={` transition-colors duration-300 ${
                      pathname == "/doctor/appointments/create"
                        ? "bg-stone-200 text-[#24312F] font-bold "
                        : ""
                    }    hover:bg-stone-300  py-1`}
                  >
                    <li className="ml-8 flex items-baseline gap-x-4">
                      {pathname == "/doctor/appointments/create" && (
                        <span>
                          <LiaPlusSquareSolid strokeWidth={3.5} />
                        </span>
                      )}
                      {pathname != "/doctor/appointments/create" && (
                        <span>
                          <LiaPlusSquareSolid />
                        </span>
                      )}
                      Create Appointment
                    </li>
                  </ul>
                </Link>
              </ul>
            </ul>
            <hr className="  border-stone-300 mt-8 mb-12" />

            <ul className={`mt-4 space-y-4 `}>
              {/* this ConsultationLi component checks if there are available lab request, when the application first loads */}
              <ConsultationLi />
              <ul className=" space-y-6 ">
                {/* <ul className={` ${pathname == "" ? "bg-stone-200":""}    hover:bg-stone-300 transition-colors  py-1`}>
                                <li className="ml-8 flex items-base"ine gap-x-4"><span><IoTodayOutline /></span>Appointments for Today</li>
                            </ul>

                            <ul className={` ${pathname == "" ? "bg-stone-200":""}    hover:bg-stone-300 transition-colors  py-1`}>
                                <li className="ml-8 flex items-baseline gap"x-4"><span><PiArrowLineUp /></span>Ongoing consultation</li>
                            </ul> */}

                <ResumeConsultationsLi />

                {/* this components checks if there are available completed lab results */}
                <LabNotification />
              </ul>
            </ul>
            <hr className=" xl:hidden  border-stone-300 mt-8 mb-12" />

            <ul className={`mt-4 xl:absolute bottom-0 space-y-4 w-full`}>
              <li className={` `}>Account Settings</li>
              <ul className=" space-y-6 ">
                <ul
                  className={` ${
                    pathname == "" ? "bg-stone-200" : ""
                  }    hover:bg-stone-300 transi"ion-colors  py-1 w-full`}
                >
                  <li className="ml-8 flex items-baseline gap-x-4">
                    <span>
                      <FaRegUserCircle />
                    </span>
                    Update profile
                  </li>
                </ul>

                <LogoutLi />
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    );
}