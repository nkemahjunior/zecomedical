'use client'
import { useEffect, useRef, useState } from "react";
import {  textStylesBody } from "../../GENERAL_STYLES/general";

import PatientLogo from "./PatientLogo";
import "../../HOMEPAGE/Hamburger.css";
import Image from "next/image";
import PatientMedicalHistoryLi from "./PatientMedicalHistoryLi";
import Link from "next/link";
import LogoutLi from "./LogoutLi";
import { useGetPatientInfo } from "@/DATA_FETCHING/PATIENT/hooks/useGetPatientInfo";

 
 
export default function PatientNavBar() {

    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);

    const refToggle = useRef<HTMLUListElement>(null);
    const refToggle2 = useRef<HTMLUListElement>(null);


    const query = useGetPatientInfo()


    //useEffect for phones Navigation menu
    useEffect(()=>{
        function toggleNavContainer(e:any){

         
            if(refToggle.current && !refToggle.current?.contains(e.target)){
                setShow(false)
            }
        }

        document.addEventListener('click',toggleNavContainer,true)

        return () =>{
            document.removeEventListener('click',toggleNavContainer,true)
        }
    },[])

     //useEffect for large screens Navigation menu
    useEffect(()=>{
        function toggleNavContainer2(e:any){

         
            if(refToggle2.current && !refToggle2.current?.contains(e.target)){
                setShow2(false)
            }
        }

        document.addEventListener('click',toggleNavContainer2,true)

        return () =>{
            document.removeEventListener('click',toggleNavContainer2,true)
        }
    },[])
    

    function showNav() {
        setShow(true);
    }

    function showNav2() {
        setShow2(true);
    }


    return (
      <>
        {/**NAVIGATION BAR */}
        {/**if you eventually change the height of this nav bar, dont forget to visit the doctor layout file */}
        <nav
          className={`fixed top-0 w-screen z-[100] h-[5.4rem]   
                sm:h-[6rem] 2xl:h-fit  max-w-[100%]  transition-colors duration-75 
                border-solid border-0 border-blue-900 bg-[#00171F]
                px-2  sm:px-4   2xl:py-6
                `}
        >
          <div
            className={` flex items-center justify-between h-full w-full   pt-1   relative   `}
          >
            <Link href={"/patient/home"} className="block">
              <PatientLogo />
            </Link>

            {/* text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[65rem]*/}
            <ul
              className={` space-y-[1rem] xl:space-y-0  w-fit px-6 lg:px-8 py-8 xl:py-0 rounded-md shadow-xl
                    absolute  right-2 sm:right-4 top-[3.5rem] sm:top-[5.2rem] md:top-[5.1rem]  xl:top-6   xl:right-[10rem]
                     xl:flex   xl:justify-end xl:gap-x-[6rem]
                     ${textStylesBody} text-white bg-[#00171F]
                    border-t-2  border-[#003459] border-solid xl:border-none
                    ${
                      show
                        ? "1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.7s]"
                        : "  1024Down:translate-x-[1000px] 1024Down:transition 1024Down:duration-[0.7s]   "
                    } `}
              ref={refToggle}
            >
              {/* <div className=" flex justify-end xl:hidden"><button onClick={hideNav}>X</button></div> */}

              {/**this two links are visible on all screens*/}
              <li
                className={` xl:hover:text-[#ccd1d2] 
                         transition-colors delay-75
                        ${
                          show
                            ? "1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[0.5s]"
                            : " 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[1s]"
                        } 

                             `}
              >
                <PatientMedicalHistoryLi />
              </li>

              <li
                className={` xl:hover:text-[#ccd1d2]
                         transition-colors delay-75
                        ${
                          show
                            ? "1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[0.6s]"
                            : " 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[1s]"
                        } 

                        `}
              >
                Appointment History
              </li>

              {/**this three links are visible only on lg and below */}

              <li
                className={` xl:hidden
                         transition-colors delay-75
                        ${
                          show
                            ? "1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[0.7s]"
                            : " 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[1s]"
                        } 

                        `}
              >
                {" "}
                <Link
                  href={"/patient/availableDoctors?p=0"}
                  className="block w-full"
                >
                  Available Doctors
                </Link>
              </li>

              <li
                className={` xl:hidden
                         transition-colors delay-75
                        ${
                          show
                            ? "1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[0.8s]"
                            : " 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[1s]"
                        } 

                        `}
              >
                Settings
              </li>

              <li
                className={` xl:hidden
                         transition-colors delay-75 cursor-pointer
                        ${
                          show
                            ? "1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[0.9s]"
                            : " 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.6s] 1024Down:delay-[1s]"
                        } 

                        `}
              >
                <LogoutLi />
              </li>
            </ul>

            {/**this links are available on xl and above */}
            <ul
              className={`hidden xl:block  xl:absolute xl:right-0  top-[5.4rem]   w-fit
                    text-white ${textStylesBody} bg-[#00171F] rounded-md shadow-xl
                    px-[4rem] py-[1.5rem] space-y-[1rem]
                    border-t-[3px]  border-[#003459] border-solid
                    ${
                      show2
                        ? "xl:translate-x-[-0%] xl:transition xl:duration-[0.7s]"
                        : "  xl:translate-x-[1000px] xl:transition xl:duration-[0.7s]   xl:z-10 "
                    }
                    `}
              ref={refToggle2}
            >
              <li
                className={` ${
                  show2
                    ? "translate-x-[-0%] transition duration-[0.6s] delay-[0.5s]"
                    : " translate-x-[110%] transition duration-[0.7s] delay-[1s]"
                } 
                        `}
              >
                <Link
                  href={"/patient/availableDoctors?p=0"}
                  className="block w-full"
                >
                  Available Doctors
                </Link>
              </li>

              <li
                className={` ${
                  show2
                    ? "translate-x-[-0%] transition duration-[0.6s] delay-[0.6s]"
                    : " translate-x-[110%] transition duration-[0.7s] delay-[1s]"
                } 
                        `}
              >
                Settings
              </li>

              <li
                className={`cursor-pointer ${
                  show2
                    ? "translate-x-[-0%] transition duration-[0.6s] delay-[0.7s]"
                    : " translate-x-[110%] transition duration-[0.7s] delay-[1s]"
                } 
                        `}
              >
                <LogoutLi />
              </li>
            </ul>

            {/**round menu, xl downwards */}
            <div className="flex xl:hidden items-center   " onClick={showNav}>
              <button className=" border-solid border-2 border-[#4d5d62] h-[2.5rem] w-[2.5rem] relative rounded-[50%] overflow-hidden re">
                <Image
                  className="block"
                  src={query?.data?.profilePhotoUrl || "/defaultProfile.jpg"}
                  alt="profile picture"
                  fill={true}
                  quality={100}
                  priority={true}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </button>
            </div>

            {/**round menu,xl above */}
            <div className="hidden xl:flex  items-center   " onClick={showNav2}>
              <button className=" border-solid border-2 border-[#4d5d62] h-[3rem] w-[3rem] overflow-hidden relative rounded-[50%] ">
                <Image
                  className="block"
                  src={query?.data?.profilePhotoUrl || "/defaultProfile.jpg"}
                  alt="profile picture"
                  fill={true}
                  quality={100}
                  priority={true}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </button>
            </div>
          </div>
        </nav>
        {/**NAVIGATION BAR ENDING */}
      </>
    );
}