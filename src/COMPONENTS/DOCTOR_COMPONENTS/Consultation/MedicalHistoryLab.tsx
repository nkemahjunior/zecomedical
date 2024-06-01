'use client'

import { labRequestType } from "@/TYPES/Lab/laboratories";

 
 
export default function MedicalHistoryLab({data}:{data:labRequestType | null}) {
    return (
        <div className="border-0 border-solid border-black pt-4">
            <dl className=" space-y-4">

               

        
                <div className="space-y-1">
                    <dt className=" font-semibold">Lab Test :</dt>
                    <dd className=" whitespace-nowrap capitalize">{data?.labTestRequest}</dd>
                </div>


                <div className="space-y-1">
                    <dt className=" font-semibold">Result :</dt>
                    <dd className=" ">{data?.result ? "POSITIVE" : "NEGATIVE" }</dd>
                </div>
            </dl>                    
        </div>
    );
}