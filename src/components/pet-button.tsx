'use client'
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button"
import {  useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import PetForm from "./Pet-form";
import { flushSync } from "react-dom";

type PetButtonProps = {
  actionType:"add"| "edit" |"checkout",
  children?:React.ReactNode,
  onClick?:()=>void,
  disabled?:boolean

}
function PetButton({actionType,disabled,children,onClick}:PetButtonProps) {

  const [isFormOpen, setisFormOpen] = useState(false)

  if(actionType ==="checkout"){
    return <Button disabled={disabled} onClick={onClick} variant='secondary'>
      {children}
    </Button>
  }
      return(

        <Dialog open={isFormOpen} onOpenChange={setisFormOpen} > 
          <DialogTrigger asChild>
            {
              actionType === "add" ?(
                <Button size="icon" >
                <PlusIcon className="h-6 w-6 "  />
              </Button>
              )
              :
              <Button variant='secondary'>
              {children}
            </Button>
            }
           
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                { actionType === "add" ? "Add a new Pet" : "Edit Pet"}
              </DialogTitle>
            </DialogHeader>
            <PetForm onFormSubmission={()=>{
              flushSync(()=>{
                setisFormOpen(false)
              })
            }} actionType = {actionType}/>
          </DialogContent>
        </Dialog>
        
      
      )
    }
    
  


export default PetButton