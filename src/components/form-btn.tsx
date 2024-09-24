import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"

export default function FormButton({actionType}:any) {
 const {pending} =  useFormStatus()
  return (
    <Button disabled={pending} className="mt-5 self-end"  type='submit'>
    {
      actionType === "add" ? "Add a new Pet" :"Save"
    }
  </Button>
  )
}
