import { AiOutlineLoading3Quarters } from "react-icons/ai";




export default function LabLoadingSpinner() {
    return (
        <div className=" h-screen w-full  bg-[rgb(0,0,0,0.5)] flex justify-center items-center mt-[-5.4rem] sm:mt-[-6rem] 2xl:mt-[-7.9rem]">

            <span className="inline-block  animate-spin  "><AiOutlineLoading3Quarters style={{height:"7rem",fill:"#000",  width:"7rem"}} /></span>
            
        </div>
    );
}
