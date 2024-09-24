import { cn } from "@/lib/utils"

interface childProps{
  children:React.ReactNode,
  className?:string
}

function ContentBlock({children,className}:childProps) {
  return (
    <div  className={cn("bg-[#F7F8FA] shadow-sm rounded-md overflow-hidden h-full w-full ",className)}>{children}</div>
  )
}

export default ContentBlock