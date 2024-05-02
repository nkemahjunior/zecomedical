import { useQuery } from "@tanstack/react-query";
import { getUser } from "../functions/getUser";



 
 
export default function useGetUser () {

    const query =  useQuery({ queryKey: ['session'], queryFn: getUser ,staleTime:300000}) //5 mins
    return query;
    
}