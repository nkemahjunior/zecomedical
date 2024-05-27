import LabNavBar from "@/COMPONENTS/LAB COMPONENTS/GeneralLab/LabNavBar";
import LabModalProvider from "./LabModalProvider";
import LabModalParent from "@/COMPONENTS/LAB COMPONENTS/GeneralLab/LabModalParent";


//bg-[#00171F]
export default function LabLayout( {children,}: Readonly<{ children: React.ReactNode;}>) {

    return (
     <>

        <LabModalProvider>
            <LabNavBar/>
            <LabModalParent/>

            {/* mt is thesame value as the height of the nav bar, don't change it boy */}
            <div className="mt-[5.4rem] sm:mt-[6rem] 2xl:mt-[7.9rem]"></div>
            
            <div className=" bg-stone-100 
                border-0 border-solid border-red-600 relative"> 
                    
                    {children} 
                    
                    
            </div>
        </LabModalProvider>
     </>
    );
  
  }