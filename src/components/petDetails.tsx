"use client"
import usePetContexthook from "@/lib/hooks"
import Image from "next/image"
import PetButton from "./pet-button"
import { Pet } from "@prisma/client"
type Props ={
  Pet:Pet
}


function PetDetails() {
 
  const {SelectedPet,handleCheckoutPet} = usePetContexthook()
 
  return (
   <section className="flex flex-col  w-full h-full" > 
   {
    !SelectedPet ?
      <EmptyView/> 
    :(
      <>
    <TopBar Pet={SelectedPet} />
   <OtherInfo Pet={SelectedPet} />
    <BottomBar Pet={SelectedPet} />
      </>
    )
   }
   
   </section>
  )
}

function EmptyView(){
  return(
   
    <p className="h-full flex items-center justify-center font-medium text-2xl" >No Path Selected </p>

  )
}

function TopBar({Pet}:Props){
  
  const {handleCheckoutPet} = usePetContexthook()
  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-light">
      <Image src={Pet?.imageUrl} alt="Selected Pet img"  height={75} width={75} className="h-[75px] w-[75px] rounded-full object-cover"/>
      <h2 className="text-3xl font-semibold leading-7 ml-5">{Pet?.name}</h2>
      <div className="ml-auto space-x-3">
        <PetButton  actionType ="edit"  >Edit</PetButton>
        <PetButton 
        actionType="checkout" 
        
        onClick={async()=>await handleCheckoutPet(Pet!.id)}>
        Checkout
        </PetButton>
      </div>
    </div>
  )
}  

function OtherInfo({Pet}:Props) {
  return(
    <div className="flex justify-around py-10 px-5 text-center">
      <div  >
        <h3 className="text-[13px] font-medium uppercase text-zinc-700 ">Owner name</h3>
        <p className="mt-1 text-zinc-800 text-lg ">{Pet.ownerName}</p>
      </div>
      
      <div  >
        <h3 className="text-[13px] font-medium uppercase text-zinc-700 ">Age</h3>
        <p className="mt-1 text-zinc-800 text-lg ">{Pet.age}</p>
      </div>
      
    </div>
  )
}

function BottomBar ({Pet}:Props){
  return(
    <section className="bg-white px-7 py-5 rounded-md mb-9 mx-8 flex-1 border border_light" >
    {Pet.notes}
  </section>
  )
}



export default PetDetails