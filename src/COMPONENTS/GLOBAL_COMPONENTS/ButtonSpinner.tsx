import { AiOutlineLoading3Quarters } from "react-icons/ai";

 
 
export default function ButtonSpinner() {
    return (
        <>
            <span className="inline-block  animate-spin"><AiOutlineLoading3Quarters style={{height:"1.5rem"}}/></span>
        </>
    );
}