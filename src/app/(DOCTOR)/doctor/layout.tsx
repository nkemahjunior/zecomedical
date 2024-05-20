import DoctorNavBar from "@/COMPONENTS/DOCTOR_COMPONENTS/Navigation/DoctorNavBar";
import DoctorSideNav from "@/COMPONENTS/DOCTOR_COMPONENTS/Navigation/DoctorSideNav";


 
 
export default function PatientLayout({children,}: Readonly<{ children: React.ReactNode;}>) {

  //bg-[#00171F]
    

    return (
        <>
          {/* navbar not available on large screens */}
          <div className=" lg:hidden">
            <DoctorNavBar/>
          </div> 


          {/* mt is thesame value as the height of the nav bar, don't change it boy */}
          <div className="lg:hidden mt-[5.4rem] sm:mt-[6rem] 2xl:mt-[7.9rem]"></div>


          <div className=" h-screen  lg:flex " >

            {/* sidebar  available only on large screens, BUT the DoctorSideNav component is also in the mobile navBar*/}
            <div className="hidden lg:block w-[100%]  lg:w-[34%] xl:w-[28%] 2xl:w-[20%] overflow-y-scroll xl:overflow-y-hidden
             border-r-2 border-solid border-stone-200
            "
            > 
              <DoctorSideNav/>
            </div>


            {/* children available for all screens */}
            <div className="h-full lg:w-[80%] overflow-y-scroll  bg-stone-100 
            border-0 border-solid border-red-600"> {children} </div>

          </div>


          
           
        </>
    );
}