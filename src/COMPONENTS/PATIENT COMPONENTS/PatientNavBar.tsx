'use client'
import { useEffect, useRef, useState } from "react";
import { navHeight_2xl, navHeight_phones, navHeight_sm } from "../GENERAL_STYLES/general";
import Logo from "../HOMEPAGE/Logo";
import PatientLogo from "./PatientLogo";
import "../HOMEPAGE/Hamburger.css";

 
 
export default function PatientNavBar() {

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
                <nav className={`fixed top-0 w-screen z-[100] h-[4rem]   
                sm:h-[6rem] 2xl:h-fit  max-w-[100%]  transition-colors duration-75 
                border-solid border-4 border-blue-900 bg-[#00171F]
                `} >

            
                <div className={` flex justify-between h-full w-full   pt-1   relative   `   }>

                    <PatientLogo/>
            

            
                    <ul className={`  border-2 border-solid border-red-600 w-[13rem] md:w-[15rem] lg:w-[18rem] xl:w-[65rem] px-4
                    absolute  right-0 top-6   xl:right-[10rem] xl:flex   xl:justify-end xl:gap-x-[6rem]
                    font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white bg-green-800

                    ${show ? '1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.7s]':'  1024Down:translate-x-[1000px] 1024Down:transition 1024Down:duration-[0.7s]   '} `} ref={refToggle}>


                        <div className=" flex justify-end xl:hidden"><button onClick={hideNav}>X</button></div>


                        <li  className={` xl:hover:text-[#ccd1d2] tracking-wide
                         transition-colo2787rs delay-75
                        ${show ? '1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[0.5s]':' 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[1s]'} 

                             `}>Medical history</li>

                        <li  className={` xl:hover:text-[#ccd1d2]
                         transition-colors delay-75
                        ${show ? '1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[0.6s]':' 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[1s]'} 

                        `}>Appointment History</li>

                        
                            {/**this links are available on lg and below */}
                        <li  className={` xl:hidden
                         transition-colors delay-75
                        ${show ? '1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[0.7s]':' 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[1s]'} 

                        `}>Settings</li>
                        

                        <li  className={` xl:hidden
                         transition-colors delay-75
                        ${show ? '1024Down:translate-x-[-0%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[0.8s]':' 1024Down:translate-x-[110%] 1024Down:transition 1024Down:duration-[0.7s] 1024Down:delay-[1s]'} 

                        `}>Logout</li>

                        

                       
                    </ul>

                    {/**this links are available on xl and above */}
                    <ul className={`hidden  xl:block xl:absolute xl:right-0 border-2 border-solid border-yellow-500 h-[25rem] w-[15rem] bg-yellow-700
                        ${show2 ? 'xl:translate-x-[-0%] xl:transition xl:duration-[0.7s]':'  xl:translate-x-[1000px] xl:transition xl:duration-[0.7s]   xl:z-10 ' }
                    `} ref={refToggle2}
                    > 
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>


                    {/**round menu,all screens */}
                    <div className="flex xl:hidden items-center   " onClick={ showNav}>
                        <div className=" border-solid border-2 border-purple-700 h-[4rem] w-[4rem] rounded-[50%] bg-rose-600">
                       
                            
                        </div>
                    </div>

                        {/**round menu,xl above */}
                        <div className="hidden xl:flex  items-center   " onClick={ showNav2}>
                        <div className=" border-solid border-2 border-purple-700 h-[5rem] w-[5rem] rounded-[50%] bg-green-500">
                       
                            
                        </div>
                    </div>


                </div>
                
            </nav> 
            {/**NAVIGATION BAR ENDING */}
        </>
    );
}