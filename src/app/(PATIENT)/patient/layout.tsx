import PatientNavBar from "@/COMPONENTS/PATIENT COMPONENTS/PatientNavBar";

 
 
export default function PatientLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <>
          <PatientNavBar/> 

          {/* mt is thesame value as the height of the nav bar, don't change it boy */}
          <div className="mt-[4rem] sm:mt-[6rem] 2xl:mt-[7.9rem]"></div>
          
          {children}  
        </>
    );
}