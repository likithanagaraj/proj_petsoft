"use client"
import ContentBlock from '@/components/contentBlock'
import H1 from '@/components/h1'

import React from 'react'

function Account() {
  return (
    <main>
       <H1 className='my-8 text-white' >Your Account </H1>
       <ContentBlock  className='h-[500px] flex items-center justify-center' >
        <p className=''>Logged in as...</p>

       </ContentBlock>
    </main>
  )
}

export default Account