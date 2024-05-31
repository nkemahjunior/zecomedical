'use client'
import { useSendToLab } from "@/DATA_FETCHING/DOCTOR/hooks/useSendToLab";
import "./consultation.css"

import { textStylesH3 } from "@/COMPONENTS/GENERAL_STYLES/general";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAddCircle } from "react-icons/io";
import { TbMicroscope } from "react-icons/tb";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { useSavePendingLabReq } from "@/DATA_FETCHING/DOCTOR/hooks/useLabResults";
import toast from "react-hot-toast";
import { DoctorContext, mainDoctorContextType } from "@/app/(DOCTOR)/doctor/DoctorProvider";
import { checkLabResultsType } from "@/TYPES/Doctor/doctorTypes";
 
export default function SendToLab({patientID, patientName}:{consultationID:string, patientID:string, patientName:string}) {

    const {setPendingLabResults,pendingLabResults,pendingLabResultsCheck, setPendingLabResultsCheck} = useContext(DoctorContext) as mainDoctorContextType

    const [closeLab,setCloseLab] = useState(true)
    const labReqRef = useRef<HTMLDivElement>(null)

    const mutation = useSendToLab();
    const mutatation2 = useSavePendingLabReq()





    async function sendToLabFN(e:FormEvent<HTMLFormElement>){
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData)

        let labTestRequest:string[] = []

        for (const [key,value] of Object.entries(data)) {
            if(key.startsWith("request") && typeof value == "string" ){
                labTestRequest.push(value)
            }
        }


        const arrangedData ={
            labName:data.labName.toString(),
            patientID:Number(data.patientID.toString()),
            patientName:data.patientName.toString(),
            labTestRequest:labTestRequest
        }


        const res = await mutation.mutateAsync(arrangedData)
        

        if(res.status == 201){

           const res2 = await mutatation2.mutateAsync({patientID:arrangedData.patientID, labName:arrangedData.labName,consultationID:res.consultationID})

           if(res2?.status == 201) {
                

                const hold = [...pendingLabResults,res2]
                setPendingLabResults(hold) //add lab request to the list of pending results for that doctor
                
               res2.message && toast.success(res2.message)
           }
           else toast.error(res2?.message!)

        }


    }






    function addNewLabRequestInput(){

        const fragment = document.createDocumentFragment()

        

        const mainDiv = fragment.appendChild(document.createElement("div"))//create div
        const label = fragment.appendChild(document.createElement("label"))//create label
        const innerDiv = fragment.appendChild(document.createElement("div"))
        const input = fragment.appendChild(document.createElement("input"))//create input
        const cancelButton = fragment.appendChild(document.createElement("button"))

      
        const random = Math.random()

        label.textContent = "Request"
        label.htmlFor= `request${random}`

        input.id = `request${random}`
        input.type = "text"
        input.required
        input.name=`request${random}`
        input.className="border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]"

        cancelButton.textContent = "x"
        cancelButton.className = "w-12 h-12  inline-block rounded-[50%] bg-[#00171F] text-white"
        cancelButton.type="button"
        cancelButton.onclick = deleteLabRequestInput

        

        innerDiv.className = "flex justify-center items-center space-x-2"

        innerDiv.appendChild(input)
        innerDiv.appendChild(cancelButton)


        mainDiv.appendChild(label)
        mainDiv.appendChild(innerDiv)

        //console.log(div);

        labReqRef.current?.appendChild(mainDiv)
    }


    function deleteLabRequestInput(e:any){
        

       if(e.target.parentNode.parentNode){
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
       }
  

    }




    return (
        <div className="border-0 border-solid border-yellow-500 px-4 sm:px-16 ">

        <div className={`space-y-8 lg:space-y-10  p-4 lg:p-8  lg:py-10
            border-[1px] border-solid border-black rounded-lg 
            ${closeLab ? "close overflow-hidden" : "open overflow-y-auto"}
            `}>


            <div className="flex justify-between items-center mb-4">
                <h3 className={`text-black ${textStylesH3} flex justify-center items-center `}><span><TbMicroscope /></span>&nbsp; Send to lab</h3>

                <button 
                    type="button"
                    className={` p-4 bg-stone-200 rounded-lg xl:hover:bg-stone-300  
                    ${closeLab ? ' rotate-[360]' : 'rotate-180  '}`}
                    onClick={() => setCloseLab(v => !v)}
                >
                    <IoIosArrowDown />
                </button>

            </div>


            <form className=" space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-16"
            onSubmit={sendToLabFN}
            >

                <div>
                {/* bb = bloodBank, im=immunology, mb = microbiology, ps = parasitology */}
                    <label htmlFor="labName">Select lab </label>
                    <select id="labName" name="labName"
                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                    >
                        <option value="bb">Lab Blood Bank</option>
                        <option value="im">Lab Immunology</option>
                        <option value="mb">Lab Microbiology</option>
                        <option value="ps">Lab Parasitology</option>
                    </select>
                </div>


                <div ref={labReqRef} className="space-y-2">

                    <div >
                        <label htmlFor="request">Request</label>

                        <div className="flex justify-center items-center space-x-2">
                            <input required type="text"  name="request"
                                className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                            />
                            <button type="button" className=" invisible w-12 h-12  inline-block rounded-[50%] bg-[#00171F] text-white">x</button>
                        </div>

                    </div>

                </div>

                <div className="w-full flex justify-evenly items-center">
                    <button 
                        type="button"
                        onClick={addNewLabRequestInput}
                        className="p-2 bg-stone-50 border-2 border-solid border-[#00171F] rounded-lg text-black flex justify-center items-center xl:hover:scale-95"><span><IoMdAddCircle /></span>&nbsp;Add request
                    </button>

                    <button className="py-2 px-20 bg-[#00171F] text-white rounded-lg shadow-lg xl:hover:scale-95">Send&nbsp;{mutation.isPending || mutatation2.isPending &&<ButtonSpinner/>}</button>
                </div>

                <input type="hidden" name="patientID" value={patientID} />
                <input type="hidden" name="patientName" value={patientName} />

               
            </form>


        </div>

    </div>

    );
}