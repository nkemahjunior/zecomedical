import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { getLabBloodBankRequests, getLabImmunologyRequests, getLabMicrobiologyRequests, getLabParasitologyRequests } from "../functions/getLabRequests";


export function useGetLabMicrobiologyRequests(searchValue:string){

    const infiniteQuery = useInfiniteQuery({
        
        queryKey:["mbreq",searchValue],
        queryFn:(pageParam) => getLabMicrobiologyRequests(pageParam.pageParam, searchValue),
        initialPageParam: 0,
        
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage?.last == true) {
              return undefined
            }
            return lastPageParam + 1
        },

        getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
            if (firstPage?.first == true) {
              return undefined
            }
            return firstPageParam - 1
        },
        refetchInterval:60000, // refetch every 1 minute
    })

    return infiniteQuery;
}




export function useGetLabBloodBankRequests(searchValue:string){

  const infiniteQuery = useInfiniteQuery({
      
      queryKey:["bbreq",searchValue],
      queryFn:(pageParam) => getLabBloodBankRequests(pageParam.pageParam, searchValue),
      initialPageParam: 0,
      
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (lastPage?.last == true) {
            return undefined
          }
          return lastPageParam + 1
      },

      getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
          if (firstPage?.first == true) {
            return undefined
          }
          return firstPageParam - 1
      },
      refetchInterval:60000, // refetch every 1 minute
  })

  return infiniteQuery;
}





export function useGetLabImmunologyRequests(searchValue:string){

  const infiniteQuery = useInfiniteQuery({
      
      queryKey:["imreq",searchValue],
      queryFn:(pageParam) => getLabImmunologyRequests(pageParam.pageParam, searchValue),
      initialPageParam: 0,
      
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (lastPage?.last == true) {
            return undefined
          }
          return lastPageParam + 1
      },

      getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
          if (firstPage?.first == true) {
            return undefined
          }
          return firstPageParam - 1
      },
      refetchInterval:60000, // refetch every 1 minute
  })

  return infiniteQuery;
}





export function useGetLabParasitologyRequests(searchValue:string){

  const infiniteQuery = useInfiniteQuery({
      
      queryKey:["psreq",searchValue],
      queryFn:(pageParam) => getLabParasitologyRequests(pageParam.pageParam, searchValue),
      initialPageParam: 0,
      
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (lastPage?.last == true) {
            return undefined
          }
          return lastPageParam + 1
      },

      getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
          if (firstPage?.first == true) {
            return undefined
          }
          return firstPageParam - 1
      },
      refetchInterval:60000, // refetch every 1 minute
  })

  return infiniteQuery;
}