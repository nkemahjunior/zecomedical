"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./Menu.css";
import {
  BASE_COLOR,
  navHeight_2xl,
  navHeight_phones,
  navHeight_sm,
} from "@/COMPONENTS/GENERAL_STYLES/general";
import Logo from "./Logo";
import { test2 } from "@/app/fonts";
import Link from "next/link";
import HamburgerButton from "../GLOBAL_COMPONENTS/HamburgerButton";

export default function Navigation() {
  const [show, setShow] = useState(false);
  const refToggle = useRef<HTMLUListElement>(null);

  const refNavHeight = useRef<HTMLElement>(null);
  const refObserver = useRef<HTMLDivElement>(null);

  const [navHeight, setNavHeight] = useState(0);
  const [isInstersecting, setIsIntersecting] = useState(true);

  //useEffect Toggle navigation bar for mobile devices
  useEffect(() => {
    function toggleNavContainer(e: any) {
      if (refToggle.current && !refToggle.current?.contains(e.target)) {
        setShow(false);
      }
    }

    document.addEventListener("click", toggleNavContainer, true);

    return () => {
      document.removeEventListener("click", toggleNavContainer, true);
    };
  }, []);

  function showNav() {
    setShow(true);
  }

  function hideNav() {
    setShow(false);
  }

  function handleIntersect(entries: IntersectionObserverEntry[]) {
    //console.log(entries);
    const [entry] = entries;

    if (entry.isIntersecting) setIsIntersecting(true);
    else setIsIntersecting(false);
  }

  //useEffect for the Intersection Observer for navigation bar
  useEffect(() => {
    setNavHeight(refNavHeight.current!.getBoundingClientRect().height);

    function createObserver() {
      let observer;

      let options = {
        root: null, //observe against viewport of computer
        rootMargin: `-${navHeight}px`, //margin to apply the hero
        threshold: 0, //when 0% of the hero is showing
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(refObserver.current!);
    }

    createObserver();
  }, [isInstersecting, navHeight]);

  //bg-[#edf0f0]
  return (
    <>
      {/**NAVIGATION BAR */}
      <nav
        className={`fixed top-0 w-screen z-10  h-[${navHeight_phones}rem]   border-0 border-red-700 border-solid 
                sm:h-[${navHeight_sm}rem] 2xl:h-[${navHeight_2xl}rem]  max-w-[100%]  transition-colors duration-75 
                ${!isInstersecting && " bg-black  "}
                `}
        ref={refNavHeight}
      >
        <div
          className={` flex justify-between items-center h-full w-full   pt-1   relative border-0 border-green-700 border-solid   `}
        >
          <Logo />

          <ul
            className={`  absolute  right-0 pr-2 sm:pr-0 top-16  sm:relative sm:flex sm:top-0 text-white border-solid border-0 border-black
                    font-medium text-3xl space-y-4 sm:space-y-0  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                    ${
                      show
                        ? "phones:translate-x-[-0%] phones:transition phones:duration-[0.7s]"
                        : "  phones:translate-x-[1000px] phones:transition phones:duration-[0.7s]   "
                    } `}
            ref={refToggle}
          >
            {/* <div className=" flex justify-end  sm:hidden">
               <button onClick={hideNav}>X</button>
             </div> */}

            {/* <li className={` 
                         hover:text-[#96B3BC] transition-colors delay-75
                        ${show ? ' phones:translate-x-[-0%] phones:transition phones:duration-[0.7s] phones:delay-[0.4s]':' phones:translate-x-[110%] phones:transition phones:duration-[0.7s] phones:delay-[1s]'} 
                

                        sm:w-[7rem] md:w-[9rem] lg:w-[11rem] 2xl:w-[15rem] sm:flex sm:items-end   `}>Home</li>

                        <li  className={` 
                        hover:text-[#96B3BC] transition-colors delay-75
                        ${show ? 'phones:translate-x-[-0%] phones:transition phones:duration-[0.7s] phones:delay-[0.5s]':' phones:translate-x-[110%] phones:transition phones:duration-[0.7s] phones:delay-[1s]'} 

                        sm:w-[7rem] md:w-[9rem] lg:w-[11rem] 2xl:w-[15rem] sm:flex sm:items-end  `}>About</li>

                        <li  className={` 
                        hover:text-[#96B3BC] transition-colors delay-75
                        ${show ? 'phones:translate-x-[-0%] phones:transition phones:duration-[0.7s] phones:delay-[0.6s]':' phones:translate-x-[110%] phones:transition phones:duration-[0.7s] phones:delay-[1s]'} 

                        sm:w-[10rem] sm:flex sm:items-end  lg:w-[12rem] xl:w-[16rem] 2xl:w-[17rem]  `}>Appointment</li>

                        

                        <li  className={` 
                        hover:text-[#96B3BC] transition-colors delay-75
                        ${show ? 'phones:translate-x-[-0%] phones:transition phones:duration-[0.7s] phones:delay-[0.7s]':' phones:translate-x-[110%] phones:transition phones:duration-[0.7s] phones:delay-[1s]'} 

                        sm:w-[7rem] md:w-[9rem] lg:w-[11rem] 2xl:w-[15rem] sm:flex sm:items-end  `}>Blog</li> */}

            <li
              className={` 
                        hover:text-[#96B3BC] transition-colors delay-75
                        ${
                          show
                            ? "phones:translate-x-[-0%] phones:transition phones:duration-[0.7s] phones:delay-[0.8s]"
                            : " phones:translate-x-[110%] phones:transition phones:duration-[0.7s] phones:delay-[1s]"
                        } 
                        
                        sm:w-[7rem] md:w-[9rem] lg:w-[11rem] 2xl:w-[15rem] sm:flex sm:items-end  `}
            >
              <Link href={"/auth/signin"}>Signin</Link>
            </li>

            <li
              className={` 
                        hover:text-[#96B3BC] transition-colors delay-75
                        ${
                          show
                            ? "phones:translate-x-[-0%] phones:transition phones:duration-[0.7s] phones:delay-[0.9s]"
                            : " phones:translate-x-[110%] phones:transition phones:duration-[0.7s] phones:delay-[1s]"
                        } 
                        
                        sm:w-[7rem] md:w-[9rem] lg:w-[11rem] 2xl:w-[15rem] sm:flex sm:items-end  `}
            >
              <Link href={"/auth/signup"}>Signup</Link>
            </li>
          </ul>

          {/**Hamburger menu,phones only */}
          <div
            className=" sm:hidden border-0 border-yellow-500 border-solid "
            onClick={showNav}
          >
            <HamburgerButton />
          </div>
        </div>
      </nav>
      {/**NAVIGATION BAR ENDING */}

      {/**HERO SECTION */}

      <div
        className={`h-[100dvh] max-w-[100%]   relative  z-0    `}
        ref={refObserver}
      >
        <div className="absolute inset-0 bg-black border-solid opacity-60 border-red-700 border-0 z-10 "></div>
        <Image
          alt="picture of two doctors carrying out a surgery"
          src={"/hero.jpg"}
          fill
          style={{ objectFit: "cover" }}
          className=""
        />

        {/**this div has the black filter affecting the hero image ,and bg-gradient-to-r from-blue-400 via-teal-400 to-blue-600 bg-clip-text text-transparent because of the h-full,w-full ,it means it's taking the height of the parent, dont forget this div is absolute with z-index = 10*/}
        <div
          className="  h-full w-full bg-[rgb(36,49,47,0.5)] 
                        flex justify-center items-center absolute z-10 
                    "
        >
          <div className="space-y-12 ">
            <div className="lg:flex lg:justify-center lg:items-center ">
              <h1
                className={`text-6xl xl:text-7xl 2xl:text-8xl font-semibold text-white text-center font-sans 
                        lg:w-[70%] tracking-tight  `}
              >
                Skip the Waiting Room. Schedule Your Next Checkup in Minutes
              </h1>
            </div>

            <div className="lg:flex lg:justify-center lg:items-center">
              <p className=" text-white text-2xl lg:text-3xl   font-sans text-center lg:w-[60%] 2xl:w-[50%] font-medium ">
                Never miss an appointment again! Browse doctor profiles, find
                convenient times that fit your busy schedule, and book
                appointments online in just a few clicks. We take the hassle out
                of healthcare scheduling, so you can focus on what matters most
                your well-being
              </p>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="p-2 bg-white text-[#3D96A7] w-[20rem] lg:w-[24rem] h-[4rem] xl:h-[5rem] md:text-lg lg:text-xl 2xl:text-2xl
                            rounded-lg shadow-xl  hover:bg-[#134349] hover:text-white hover:scale-95 transition delay-75 duration-75
                        "
              >
                <Link href={"/auth/signin"}>Book Appointment</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/**HERO SECTION ENDING */}
    </>
  );
}
