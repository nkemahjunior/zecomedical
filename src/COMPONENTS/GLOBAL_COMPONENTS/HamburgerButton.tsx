 import "../HOMEPAGE/Hamburger.css"
 
export default function HamburgerButton() {
    return (
        <div className="flex items-center " >
        <div className=" space-y-1  border-solid border-0 border-purple-700  w-[44px]">

            <div className="hamburger1 float-right w-[40px] h-[2px] bg-white"></div>
            <div className="hamburger2 float-right w-[34px] h-[2px] bg-white "></div>
            <div className="hamburger3 float-right w-[28px] h-[2px] bg-white "></div>
        
            
        </div>
    </div>
    );
}