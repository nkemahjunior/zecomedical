'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


 
 
export default function ReactQueryProvider({children}:Readonly<{ children: React.ReactNode;}>) {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime :120000, // 2 mins
                retry:3,
                //retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),THIS IS DEFAULT
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        
         <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}