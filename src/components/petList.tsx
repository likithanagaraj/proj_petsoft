"use client"

import usePetContexthook, { useSearchContexthook } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import Image from "next/image"


function PetList() {
 const {searchQuery} = useSearchContexthook()
  const {Pets, handleChangeSelectedPetId,SelectedPetId } =  usePetContexthook()
 const filterPets = Pets.filter((pets)=>pets.name.toLowerCase().includes(searchQuery))
  return (
    <ul className="bg-white border-b border-light " >
      {
        filterPets.map((pet)=>(
          <li key={pet.id}>
          <button 
          onClick={()=> handleChangeSelectedPetId(pet.id)} className={cn(
            "flex h-[70px] w-full cursor-pointer items-center px-5 text-base gap-3 hover:bg-[#eff1f2] focus:bg[#eff1f2] transition",
            {
              'bg-[#EFF1F2]':pet.id === SelectedPetId
          })}>
          <Image src={pet.imageUrl} alt="Pet Image" width={45} height={45} className="rounded-full object-cover w-[45px] h-[45px]" />
          <p className="font-serif" >{pet.name}</p>
          </button>
        </li>
        ))
      }
    </ul>
  )
}

export default PetList