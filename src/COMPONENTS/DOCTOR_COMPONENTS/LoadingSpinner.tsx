import { AiOutlineLoading3Quarters } from "react-icons/ai";

 
 
export default function LoadingSpinner() {
    return (
        <div className=" h-full w-full  bg-[rgb(0,0,0,0.5)] flex justify-center items-center">

            <span className="inline-block  animate-spin  "><AiOutlineLoading3Quarters style={{height:"7rem",fill:"#000",  width:"7rem"}} /></span>
            
        </div>
    );
}

//style={{height:"50rem"}}