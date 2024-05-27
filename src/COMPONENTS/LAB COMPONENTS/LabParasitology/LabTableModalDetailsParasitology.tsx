'use client'


import { LabContextTypes, LabModalContext } from "@/app/(LAB)/lab/LabModalProvider";
import ButtonSpinner from "@/COMPONENTS/GLOBAL_COMPONENTS/ButtonSpinner";
import { usePostLabParasitologyTestResults } from "@/DATA_FETCHING/LAB/hooks/usePostLabTestResults";
import { labRequestType, testResults } from "@/TYPES/Lab/laboratories";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";


interface formInputTypes{
    id:number
    notes:string
    results:string
    completed:string
    

}
 
 
export default function LabTableModalDetailsParasitology({el}:{el:labRequestType}) {

    
    const {open,setOpen,content,setContent} = useContext(LabModalContext) as LabContextTypes

    const { register,formState:{errors}, handleSubmit, } = useForm<formInputTypes>()

    const mutation = usePostLabParasitologyTestResults()

    function close(){
        setContent(null)
        setOpen(false)
    }

    async function sendLabTestResults(data:formInputTypes){

        

        const arrangeData:testResults = {
            id:Number(data.id),
            notes:data.notes,
            result : data.results == "true" ? true : false,
            completed : data.completed == "true" ? true : false
        }

        console.log(arrangeData);

        const res = await mutation.mutateAsync(arrangeData)

        if(res?.status == 201 ){
            //await wait10(5000)
            setContent(null)
            setOpen(false)
        }
    }


    //2024-05-22T08:30:00
    const year = el.creationTimestamp.slice(0,4)
    const month = el.creationTimestamp.slice(5,7)
    const day = el.creationTimestamp.slice(8,10)
    const hour = el.creationTimestamp.slice(11,13)
    const min = el.creationTimestamp.slice(14,16)

    const period = Number(hour) >= 0 && Number(hour) <= 12 ? 'AM' : 'PM'

    return (
        <div className=" bg-white border-0 border-solid border-red-700 shadow-2xl rounded-xl overflow-y-auto 
            h-[46rem] w-[32rem] sm:h-[46rem] sm:w-[38rem] md:h-[52rem] md:w-[48rem] lg:h-[58rem] lg:w-[48rem] relative px-8 py-4 2xl:mt-[8rem]">
            
            <div className="absolute top-2 right-2 p-4 bg-stone-100 rounded-lg xl:hover:bg-stone-200 xl:hover:scale-95" onClick={close}><IoClose /></div>

            <dl className="mt-12 space-y-8">
                
              {/* {el.patient_id.patientID.name.replaceAll("_"," ")} */}
                <div className="space-y-1">
                    <dt className=" font-semibold">Patient Name :</dt>
                    <dd className=" whitespace-nowrap capitalize"> {el.patientName.replaceAll("_"," ")}</dd>
                </div>

                {/* {day}/{month}/{year},&nbsp;{hour}:{min}&nbsp;{period} */}
                <div className="space-y-1">
                    <dt className=" font-semibold">Date</dt>
                    <dd className=" whitespace-nowrap">{day}/{month}/{year},&nbsp;{hour}:{min}&nbsp;{period} </dd>
                </div>

                <div className="space-y-1">
                    <dt className=" font-semibold">Test</dt>
                    <dd className=" whitespace-nowrap capitalize">{el.labTestRequest} </dd>
                </div>


                <form  onSubmit={handleSubmit(sendLabTestResults)}>

                    <div>
                        <label htmlFor="results" className=" font-semibold">Results</label>

                        <select id="results"
                        className={` border-[1px] border-solid border-black rounded-lg h-[3.2rem] md:h-[3.8rem] w-[100%]`}
                        {...register("results")}
                        >
                            <option value="true">Positive</option>
                            <option value="false">Negative</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="notes" className=" font-semibold">Notes</label>
                       <textarea  id="notes" cols={10} rows={20}
                       className={` border-[1px] border-solid border-black rounded-lg h-[7rem] md:h-[10rem] w-[100%]`}
                       {...register("notes")}
                       />
                    </div>


                    <input type="hidden" value={el.id} {...register("id")}/>
                    <input type="hidden" value={"true"} {...register("completed")} />

                    <div className="flex justify-center items-center mt-4">
                        <button className="py-3 px-4 flex justify-center items-center rounded-lg shadow-md text-white bg-[#00171F] xl:hover:scale-95">
                            Send results&nbsp;{mutation.isPending && <ButtonSpinner/>}
                        </button>
                    </div>
                </form>


            </dl>


        </div>
    );
}