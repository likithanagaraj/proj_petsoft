'use client'
import React, { useState } from 'react'
import Logo from './logo'
import path from 'path'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const router = [
  {
    label:"Dashboard",
    path:"/app/dashboard"
  },
  {
    label:"Account",
    path:"/app/account"
  }
]

function AppHeader() {
 
  const activeLink = usePathname()

  return (
    <header className='flex  justify-between items-center border-b border-white/10 py-2'>
      <Logo/>
      <nav>
        <ul className='flex gap-2 text-xs ' >
          {router.map((route)=>
          <li  key={route.path} >
            <Link 
            className={cn("text-white/70 hover:text-white rounded-sm px-2 py-1 bg-black/10 focus:text-white transition ",{
              "bg-black/10 text-white":route.path === activeLink
            })} 
            href={route.path} >
            {route.label}
            </Link>

          </li>
          )}
          
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader