import AppFooter from "@/components/appFooter"
import AppHeader from "@/components/appHeader"
import BackgroundPattern from "@/components/background-pattern"
import { Toaster } from "@/components/ui/sonner"
import PetContextProvider from "@/contexts/petContext"
import SearchContextProvider from "@/contexts/searchContext"
import prisma from "@/lib/db"



interface ChildProps{
  children:React.ReactNode
}

async function Layout({children}:ChildProps) {
const pets =   await prisma.pet.findMany({})
  return (
    <>
    <BackgroundPattern/>
    <div className=" max-w-[1050px] px-4 mx-auto flex flex-col min-h-screen " >
    <AppHeader/>
    <SearchContextProvider>
    <PetContextProvider data ={pets}>{children}</PetContextProvider>
    </SearchContextProvider>
    <AppFooter/>
    </div>
    <Toaster position='top-right' />
    </>
  )
}

export default Layout