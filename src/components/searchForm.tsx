"use client"

import { useSearchContexthook } from "@/lib/hooks"



function SearchForm() {
const {searchQuery,handleChangeSearchQuery} =  useSearchContexthook()
  return (
    <form className='w-full h-full' >
      <input placeholder="Search Pets"    type="search" className='w-full h-full rounded-md placeholder:text-white/50 px-5 outline-none transition focus:bg-white/50 hover:bg-white/30 bg-white/20' onChange={e => handleChangeSearchQuery(e.target.value)} 
      value={searchQuery}
      />
    </form>
  )
}

export default SearchForm 