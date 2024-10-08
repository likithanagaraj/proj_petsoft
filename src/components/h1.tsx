import { cn } from "@/lib/utils"

type H1props ={
  children : React.ReactNode,
  className?:string
}

function H1({children,className}:H1props) {
  return (
    <h1 className={cn(" font-medium text-2xl leading-6",className)}>{children}</h1>
  )
}

export default H1 