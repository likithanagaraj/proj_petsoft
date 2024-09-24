"use client"
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import usePetContexthook from '@/lib/hooks'
import FormButton from './form-btn'

type PetFormsProps ={
  actionType:"add" | "edit",
  onFormSubmission: ()=>void
}

function PetForm({actionType,onFormSubmission}:PetFormsProps) {

  const {SelectedPet,handleAddPet,handleEdit} = usePetContexthook()

  
  return (
    <form action={async(formData)=>{
      onFormSubmission()
      const petData = {
        name:formData.get("name") as string,
        ownerName:formData.get("ownerName") as string,
        imageUrl:formData.get("imageUrl") as string  || 'https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png' ,
        age:Number(formData.get("age")),
        notes:formData.get("notes") as string
      }
      if(actionType === 'add'){
       await handleAddPet(petData)
      } if(actionType === 'edit'){
        await handleEdit(SelectedPet!.id,petData)
      }
      
    }}  className='flex flex-col'>
     <div className=' space-y-3  ' >
     <div className='space-y-1'>
      <Label htmlFor='name' >Name</Label>
      <Input required name='name' id='name' type='text' defaultValue={actionType === 'edit' ? SelectedPet?.name :""} ></Input>
      </div>
      <div className='space-y-1' >
      <Label htmlFor='ownerName' >Owner Name</Label>
      <Input required name='ownerName' id='ownerName' type='text'  defaultValue={actionType === 'edit' ? SelectedPet?.ownerName :""} ></Input>
      </div>
      <div className='space-y-1' >
      <Label htmlFor='imageUrl' >Image Url</Label>
      <Input  name='imageUrl' id='imageUrl' type='text' defaultValue={actionType === 'edit' ? SelectedPet?.imageUrl :""} ></Input>
      </div>
      <div className='space-y-1' >
      <Label htmlFor='age' >Age</Label>
      <Input required name='age' id='age' type='number'   defaultValue={actionType === 'edit' ? SelectedPet?.age :""} ></Input>
      </div>
      <div className='space-y-1' >
      <Label htmlFor='notes' >Notes</Label>
      <Textarea required name='notes' id='notes' rows={3}  defaultValue={actionType === 'edit' ? SelectedPet?.notes :""}></Textarea>
      </div>
     </div>
      <FormButton actionType={actionType} />
      
    </form>
  )
}

export default PetForm