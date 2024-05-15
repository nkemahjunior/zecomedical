import { textStylesBody, textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import LogoBlack from "@/COMPONENTS/GENERAL_STYLES/LogoBlack";

 
 
export default function SetUpAccountPatient() {
    return (
        <div className={`w-screen h-screen  ${textStylesBody} text-black `}>
           <LogoBlack/>

           <div className=" h-[80%] w-full flex justify-center items-center">

                <div className="border-0 border-red-700 border-solid ">
                    <h1 className={`${textStylesH3} text-black mb-8`}>Set up your account</h1>

                    <form action="" className="space-y-6 lg:space-y-12">
                        
                        <div>
                            <label htmlFor="weight" >weight</label>
                            <input type="number" id="weight" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}
                            />
                        </div>

                        <div>
                            <label htmlFor="bloodGroup" id="bloodGroup ">Blood group</label>
                            <select  id="bloodGroup" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}>
                                <option value="A">A+</option>
                                <option value="A">A-</option>
                                <option value="B">B+</option>
                                <option value="B">B-</option>
                                <option value="AB">AB+</option>
                                <option value="AB">AB-</option>
                                <option value="O">O+</option>
                                <option value="O">O-</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="bloodPressure" 
                            >Blood Pressure</label>

                            <input type="text" id="bloodPressure" 
                            className={` border-[1px] border-solid border-[rgb(36,49,47,0.4)] rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%] `}
                            />
                        </div>

                    </form>


                    <div className=" flex gap-x-[2rem] lg:gap-x-0 lg:justify-between mt-8 lg:mt-16">

                        <div className=" w-full h-fit ">
                            <button className={`bg-[#24312F] text-white 
                            w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95`}>Save</button>
                        </div>


                        <div className=" w-full h-fit ">
                            <button className={`bg-white border-2 border-solid border-[#24312F] text-black
                            w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95`}>Skip</button>
                        </div>
                        
                    </div>




                </div>
           </div>
        </div>
    );
}