import { Petcontext } from "@/contexts/petContext"
import { SearchContext } from "@/contexts/searchContext"
import { error } from "console"
import { useContext } from "react"


function usePetContexthook() {
 const context = useContext(Petcontext)
  if(!context){
    throw new Error("usePetcontext must be inside the pet Context Provider")

  }
  return context
}

export function useSearchContexthook(){
  const context = useContext(SearchContext)
  if(!context){
    throw new Error("useSearchcontext must be inside the SearchContextProvider")

  }
  return context
}

export default usePetContexthook