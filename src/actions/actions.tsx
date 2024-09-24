"use server"
import prisma from "@/lib/db"
import { PetEssential } from "@/lib/types"
import { sleep } from "@/lib/utils"
import { Pet } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function addPet(pet:PetEssential){
  await sleep(1000)
 try {
  await prisma.pet.create({
    data:pet
  })
 } catch (error) {
  return {
    message:"Could not add"
  }
 }
  revalidatePath('/app','layout')
}



export async  function editPet(petId: Pet['id'],newpetData: PetEssential) {
  await sleep(1000)
  try {
    await prisma.pet.update({
      where:{
        id:petId
      },
      data:newpetData  
    })
  } catch (error) {
    return {
      message:"Could not add"
    }
  }
  revalidatePath('/app','layout')
}

export async function deletePet(petId:Pet['id']) {
  await sleep(1000)

  try {
    await prisma.pet.delete({
      where:{
        id:petId
      },
    })
  } catch (error) {
    return {
      message:"Could not add"
    }
  }
  revalidatePath('/app','layout') 
}