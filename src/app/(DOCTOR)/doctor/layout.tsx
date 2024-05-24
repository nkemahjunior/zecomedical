import DoctorNavBar from "@/COMPONENTS/DOCTOR_COMPONENTS/Navigation/DoctorNavBar";
import DoctorSideNav from "@/COMPONENTS/DOCTOR_COMPONENTS/Navigation/DoctorSideNav";
import DoctorModalProvider from "./DoctorModalProvider";
import DoctorModalParent from "@/COMPONENTS/DOCTOR_COMPONENTS/Modal/DoctorModalParent";




 
 
export default function PatientLayout({children,}: Readonly<{ children: React.ReactNode;}>) {

  //bg-[#00171F]
    

    return (
        <>
          <DoctorModalProvider>
            <DoctorModalParent/>
            
            {/* navbar not available on large screens */}
            <div className=" lg:hidden">
              <DoctorNavBar/>
            </div> 


            {/* mt is thesame value as the height of the nav bar, don't change it boy */}
            <div className="lg:hidden mt-[5.4rem] sm:mt-[6rem] 2xl:mt-[7.9rem]"></div>


            <div className=" h-screen  lg:flex " >

            
              <div className="hidden lg:block w-[100%]  lg:w-[47%] xl:w-[32%] 2xl:w-[20%] overflow-y-scroll xl:overflow-y-hidden
              border-r-2 border-solid border-stone-200
              "
              > 
                <DoctorSideNav/>
              </div>


              <div className="h-full w-full overflow-y-scroll  bg-stone-100 
              border-4 border-solid border-red-600 relative"> 
                
                  {children} 
                
                
              </div>

            </div>

          </DoctorModalProvider>
                     
        </>
    );
}// border-r-2 border-solid border-stone-200

/**
 *           <div className=" h-screen  lg:flex " >

           
            <div className="hidden lg:block w-[100%]  lg:w-[34%] xl:w-[28%] 2xl:w-[20%] overflow-y-scroll xl:overflow-y-hidden
             border-r-2 border-solid border-stone-200
            "
            > 
              <DoctorSideNav/>
            </div>


            <div className="h-full lg:w-[80%] overflow-y-scroll  bg-stone-100 
            border-0 border-solid border-red-600"> {children} </div>

          </div>
 */




          /***
           * 
              

           */