import AvailableDoctor from "./AvailableDoctor";

 
 
export default function AvailableDoctorsSeeAll() {
    return (
        <div className=" h-screen w-full border-4 border-solid border-red-600">
            
            <div className="h-fit border-2 border-solid border-lime-500 bg-black">
                <AvailableDoctor/>
                <AvailableDoctor/>
                <AvailableDoctor/>
                <AvailableDoctor/>
                <AvailableDoctor/>
                <AvailableDoctor/>
                <AvailableDoctor/>
            </div>
        </div>
    );
}