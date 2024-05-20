"use client"

import { useEffect, useRef, useState } from "react";
import PatientLogo from "../../PATIENT COMPONENTS/PatientLogo";
import { textStylesBody } from "../../GENERAL_STYLES/general";
import Image from "next/image";
import DoctorSideNav from "./DoctorSideNav";
import HamburgerButton from "@/COMPONENTS/GLOBAL_COMPONENTS/HamburgerButton";

 
export default function DoctorNavBar() {
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);

    const refToggle = useRef<HTMLUListElement>(null);
    const refToggle2 = useRef<HTMLUListElement>(null);

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

    function hideNav(){
        setShow(false);
    }

    function showNav2() {
        setShow2(true);
    }

    function hideNav2(){
        setShow2(false);
    }


    return (
        <>
            {/**NAVIGATION BAR */}
            {/**if you eventually change the height of this nav bar, dont forget to visit the doctor layout file */}
                <nav className={`fixed top-0 w-screen z-[100] h-[5.4rem]   
                sm:h-[6rem]   max-w-[100%]  transition-colors duration-75 
                border-solid border-0 border-blue-900 bg-[#00171F]
                px-2  sm:px-4   
                `} >

            
                <div className={` flex justify-between h-full w-full   pt-1   relative   `   }>

                    <PatientLogo/>
            

                    {/* text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[65rem]*/}
                    <ul className={`   w-fit px-6  py-8  rounded-md shadow-xl
                    absolute  right-2 sm:right-4 top-[3.5rem] sm:top-[5.2rem] md:top-[5.1rem] 
                     ${textStylesBody}  bg-[#00171F]
                    border-t-2  border-[#003459] border-solid 
                    ${show ? '1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.7s]':'  1024Down:translate-x-[1000px] 1024Down:transition 1024Down:duration-[0.7s]   '} `} ref={refToggle}>


                        <DoctorSideNav/>
                  
                       
                    </ul>


                    <div className="flex  items-center mt-3  " onClick={ showNav}>
                        <HamburgerButton/>
                    </div>
                    

                </div>
                
            </nav> 
            {/**NAVIGATION BAR ENDING */}
        </>
    );
}