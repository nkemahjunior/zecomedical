import { Interface } from "readline";

 
 
interface modalParameters{
    children:React.ReactNode
    show:boolean
    setShowModal:(arg:boolean) => void //u could see just put the type as Function, but its not really explicit OR do setShowModal(arg:boolean):void ,
    allModalContent:{
        upcomingAppointmentsModalContent : (arg:boolean) => void,
        previousSessionModalContent :  (arg:boolean) => void,
        availbleDoctorModalContent : (arg:boolean) => void
    }
}


export default function Modal({children,show,setShowModal,allModalContent}:modalParameters) {


   function closeModal(){

    setShowModal(false)
    allModalContent.upcomingAppointmentsModalContent(false)
    allModalContent.previousSessionModalContent(false)
    allModalContent.availbleDoctorModalContent(false)
    
   }

    return (
        <>
            <div className={` ${show ? 'fixed':'hidden'}
            border-4 border-solid border-red-700 h-[100dvh] w-screen  
              top-[4rem] sm:top-[6rem] z-10 backdrop-blur-sm flex justify-center items-center`}
            >

                <div className={`h-[70%] w-[80%] bg-white text-red-700`}>

                    <button className={` float-right `} 
                        onClick={ closeModal  }
                    >
                        X
                    </button>

                    {children}
                </div>
            </div>
        </>
    );
}