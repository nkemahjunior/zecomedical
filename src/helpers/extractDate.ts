

export function extractDate(data:string){


    const year = data?.slice(0,4)
    const month = data?.slice(5,7)
    const day = data?.slice(8,10)
    const hour = data?.slice(11,13)
    const min = data?.slice(14,16)

    return {year,month,day,hour,min}
}