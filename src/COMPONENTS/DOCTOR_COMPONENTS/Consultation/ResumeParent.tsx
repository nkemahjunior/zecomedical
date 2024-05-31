import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import ResumeConsultation from "./ResumeConsultation";

 
 
export default function ResumeParent({consultationID, patientID, patientName}:{consultationID:string, patientID:string, patientName:string}) {


    return (
        <div className={`grid grid-cols-1 xl:grid-cols-[60fr,40fr] ${textStylesBody}`}>

            <div className="border-0 border-green-800 border-solid  row-start-2 xl:row-start-1">

             <ResumeConsultation consultationID={consultationID} patientID={patientID} patientName={patientName}/>
            </div>


            <div className="border-0 border-solid border-black px-4 sm:px-20 xl:px-10 2xl:px-20
                py-8">

                <h1 className={`${textStylesH3} text-black py-8`}>Patient&apos;s information</h1>

                <div className="border-0 border-fuchsia-800 border-solid bg-white  space-y-3 py-16 px-4 sm:px-16
                rounded-2xl shadow-2xl
                ">
                        
                    <div className="relative h-[20rem] w-[20rem] border-2 border-solid border-red-600">
                        image
                    </div>

                    <div className="border-0 border-solid border-black pt-4">
                        <dl className=" space-y-4">
                    
                            <div className="space-y-1">
                                <dt className=" font-semibold">Patient Name :</dt>
                                <dd className=" whitespace-nowrap ">Nkemah rigo</dd>
                            </div>

                            <div className="space-y-1">
                                <dt className=" font-semibold">Age :</dt>
                                <dd className=" whitespace-nowrap ">45yrs</dd>
                            </div>


                        </dl>

                    </div>


                    <form action="" className=" space-y-4 mt-2">

                        <div className="flex flex-col">
                            <label htmlFor="bloodPressure" className=" font-semibold">Blood Pressure</label>
                            <input className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[40%]`} id="bloodPressure" type="text" defaultValue={88.5}/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="bloodGroup" className=" font-semibold">Blood Group</label>
                            <input className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[40%]`} id="bloodGroup" type="text" defaultValue={"A+"}/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="weight" className=" font-semibold">Weight</label>
                            <input className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[40%]`} id="weight" type="text" defaultValue={88.5}/>
                        </div>

                        <div className="mt-4">
                            <button className={`mt-4 py-2 px-4 border-[#00171F] border-2 border-solid  bg-stone-50  rounded-lg shadow-lg xl:hover:scale-95`}>Update info</button>
                        </div>


                    </form>
                    

                </div>

            </div>


        </div>
    );
}