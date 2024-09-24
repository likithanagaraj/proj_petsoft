import Branding from '@/components/branding'
import ContentBlock from '@/components/contentBlock'
import PetButton from '@/components/pet-button'
import PetDetails from '@/components/petDetails'
import PetList from '@/components/petList'
import SearchForm from '@/components/searchForm'
import Stats from '@/components/stats'
import React from 'react'

 function Dashboard() {
  
  // console.log(data)
  return (
    <main>
      <div className='flex items-center justify-between text-white py-8'>
      <Branding/>
      <Stats/>
    </div>
    {/* 2nd section */}
    <div className='grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]'>
      <div className='md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1 '>
      <SearchForm/>
      </div>
      <div className='relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1'>
      <ContentBlock>
      <PetList />
     <div className='absolute bottom-4 right-4' >
     <PetButton actionType="add" />
     </div>

      </ContentBlock>
      </div>
      <div className='md:col-start-2  md:row-start-1 md:row-span-full md:col-span-full'>
      <ContentBlock>
      <PetDetails/>
      </ContentBlock>
      </div>
      
      
      
    </div>
    </main>
  )
}

export default Dashboard