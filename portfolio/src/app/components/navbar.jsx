import React from 'react'

function Navbar() {
    return (
        <div className='border-l text-lg sm:text-2xl md:mt-8 mt-4 flex sm:ml-16 ml-8 md:ml-0' >
            <div className='flex flex-col ml-4 '>
                <div className='mb-2 font-light'>Home</div>
                <div className='mb-2 font-light'>About</div>
                <div className='mb-2 font-light'>Projects</div>
                <div className=' font-light'>Contact</div>
            </div>

        </div>
    )
}

export default Navbar
