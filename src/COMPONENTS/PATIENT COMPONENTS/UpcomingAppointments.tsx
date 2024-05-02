import Image from "next/image";

 interface parameters{
    openModal:(arg:boolean) => void
    showModalContent:(arg:boolean) => void

 }
 
export default function UpcomingAppointments({openModal,showModalContent}:parameters) {

    function openModalContent(){
        openModal(true)
        showModalContent(true)
    }

    return (
        <>
                <div>
                    <h3 className="border-0 border-solid border-black mt-6 lg:mt-12 text-[2.074rem] xl:text-[2.986rem] text-[#00171F]">Upcoming Appoinments</h3>

                    <div className=" px-[1.2rem] py-[1.6rem] sm:p-[3rem] md:px-[4rem] md:py-[6rem] lg:px-[2rem] lg:py-[6rem] xl:px-[6rem] xl:py-[7rem] mt-8 lg:mt-12 
                    grid grid-cols-2 text-white bg-[#003459]
                    rounded-xl overflow-hidden shadow-xl
                    " >

                        <div className="rounded-lg h-full w-[15rem] sm:w-[20rem] md:w-[22rem] lg:w-[19rem]  xl:w-[21rem] 
                         2xl:w-[25rem]
                        border-0 border-solid border-red-600 relative overflow-hidden">  

                            <Image className="block"  src={"/doctor.jpg"} alt="The doctor's picture" fill={true} quality={100} priority={true}  style={{ maxHeight:"100%", maxWidth:"100%"}}/>
                        </div> 

                        <div className=" ">

                            <div className=" space-y-[0.2rem] lg:space-y-[0.7rem] xl:space-y-[1.4rem]">
                                <p className="text-[1.44rem] lg:text-[1.94rem]">April 02, 2024</p>
                                <p className="text-[1.44rem] lg:text-[1.94rem]">My stomach aches</p>
                                <p className="text-[1.44rem] lg:text-[1.94rem]">Dr.Zekoinas Petrovic</p>
                                <p className="text-[1.44rem] lg:text-[1.94rem]">Pending</p>
                            </div>

                            <button 
                            onClick={ openModalContent }
                            className=" mt-8  bg-white text-[1.44rem] lg:text-[1.94rem]  text-[#003459] rounded-lg w-full lg:w-[80%] xl:w-[70%] py-[1.2rem]">
                                View Details
                            </button>
                        </div>

                    </div>
                </div>    
        </>
    );
}