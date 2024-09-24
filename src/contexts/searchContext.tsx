"use client"
interface SearchContextProviderProps{
  children:React.ReactNode,}

type TSearchContext ={
  searchQuery:string,
  handleChangeSearchQuery:(newValue:string) =>void
}
import React, { createContext,useState } from "react"

export const SearchContext =createContext<TSearchContext | null>(null )

function SearchContextProvider({children}:SearchContextProviderProps) {
  const [searchQuery, setsearchQuery] = useState("")
  const handleChangeSearchQuery =((newValue:string) => setsearchQuery(newValue))
  return (
    <SearchContext.Provider 
    value={{
      searchQuery,
      handleChangeSearchQuery
    }}>
    {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider