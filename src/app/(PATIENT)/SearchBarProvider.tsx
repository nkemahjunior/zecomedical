"use client"

import { createContext, useState } from "react";


export interface searchContextTypes{
    
    searchValue:string
    setSearchValue:(arg:string) => void

    inputValue:string
    setInputValue:(arg:string) => void
}

export const SearchContext = createContext<searchContextTypes | null>(null)

 


export default function SearchBarProvider({children}:{children:React.ReactNode}) {



    const [searchValue, setSearchValue] = useState("")
    const [inputValue, setInputValue] = useState("")

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue, inputValue, setInputValue}}>
        {children}
            
        </SearchContext.Provider>
    );
}