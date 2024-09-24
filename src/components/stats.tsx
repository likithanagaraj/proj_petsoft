"use client"
import usePetContexthook from '@/lib/hooks'
import React from 'react'

function Stats() {
  const {numberofPet} = usePetContexthook()
  return (
    <section className='text-center'>
    <p className='text-2xl font-bold leading-6' >{numberofPet}</p>
    <p className='opacity-80 '>Curren Guests</p>
  </section>
  )
}

export default Stats