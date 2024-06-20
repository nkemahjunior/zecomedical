import PatientNavBar from "@/COMPONENTS/PATIENT COMPONENTS/Navigation/PatientNavBar";
import SearchBarProvider from "../SearchBarProvider";

 
 
export default function PatientLayout({children,}: Readonly<{ children: React.ReactNode;}>) {

    

    return (
        <>

          <SearchBarProvider>
            <PatientNavBar/> 

            {/* mt is thesame value as the height of the nav bar, don't change it boy */}
            <div className="mt-[5.4rem] sm:mt-[6rem] 2xl:mt-[7.9rem] text-black"></div>

            {children}  
          </SearchBarProvider>
        </>
    );
}