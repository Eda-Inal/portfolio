import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='border-l text-sm sm:text-lg md:text-2xl md:mt-8 flex  md:ml-0' >
            <div className='flex flex-col ml-4 '>
                <div className='mb-2 font-light'><Link href="./home">Home</Link></div>
                <div className='mb-2 font-light'><Link href="./about">About</Link></div>
                <div className='mb-2 font-light'><Link href="./projects">Projects</Link></div>
                <div className=' font-light'>Contact</div>
            </div>

        </div>
    )
}

export default Navbar
