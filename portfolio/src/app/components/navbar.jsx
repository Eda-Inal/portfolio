'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function Navbar() {
    const pathname = usePathname();
    const isActive = (path) =>
        pathname === path
          ? 'text-secondary border-b-2 border-secondary'
          : 'border-b-2 border-transparent  transition-transform duration-300 ease-in-out transform hover:scale-105'; 
    return (
        <div className='border-l text-sm sm:text-lg md:text-2xl md:mt-8 flex  md:ml-0' >
            <div className='flex flex-col ml-4 '>
                <div className={`mb-2 font-light ${isActive('/')}`}><Link href="./">Home</Link></div>
                <div className={`mb-2 font-light ${isActive('/about')}`}><Link href="./about">About</Link></div>
                <div className={`mb-2 font-light ${isActive('/projects')}`}><Link href="./projects">Projects</Link></div>
                <div className={`mb-2 font-light ${isActive('/contact')}`}><Link href="./contact">Contact</Link></div>
            </div>

        </div>
    )
}

export default Navbar
