import Image from "next/image";
import { textStylesBody, textStylesH3 } from "../GENERAL_STYLES/general";
import LogoBlack from "../GENERAL_STYLES/LogoBlack";

 
 
export default function ChooseProfilePhoto() {
    return (
        <div className={`w-screen h-screen  ${textStylesBody} text-black `}>
           <LogoBlack/>

           <div className=" h-[80%] w-full flex justify-center items-center">

                <div className="border-0 border-red-700 border-solid ">
                    <h1 className={`${textStylesH3} text-black mb-12 text-center`}>Add photo</h1>

                    <div className="relative h-[25rem] w-[25rem]   2xl:h-[35rem] 2xl:w-[35rem] rounded-full border-0 border-solid border-black overflow-hidden">

                        <Image src={"/defaultProfile.jpg"} fill alt="default profile" style={{ objectFit:"contain" }} />
                    </div>

                    <form action="" className="space-y-6 lg:space-y-12 flex justify-center  mt-12">
                        
                        <div className=" overflow-hidden bg-white border-2 border-solid border-[#24312F] text-black
                            w-[15rem] py-[0.6rem] rounded-lg  xl:hover:scale-95 flex justify-center items-center">

                            <label htmlFor="photo" >choose photo</label>

                            <input id="photo" className="p-0  w-0"  type="file" accept="image/*"/>
                            
                        </div>

                    </form>


                   

                    <div className=" w-full h-fit mt-16 flex justify-center items-center">
                        <button className={`bg-[#24312F] text-white 
                        w-[15rem] py-[1rem] rounded-lg  xl:hover:scale-95`}>Next</button>
                    </div>
                        
                   




                </div>
           </div>
        </div>
    );
}