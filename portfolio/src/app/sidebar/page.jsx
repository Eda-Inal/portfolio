import React from 'react'
import Photo from '../components/photo'
import Links from '../components/links'
import Navbar from '../components/navbar'

function SideBar() {
    return (
        <div className='container md:w-2/5 w-5/5 sm:w-4/5 sm:h-48 h-36  md:mx-0  md:h-screen md:border-r-2 '  >
            <div className='flex md:flex-col md:items-center w-full justify-around '>
                <div className='  flex md:flex-col   flex-row items-center   sm:mx-auto md:mx-0 md:mt-8  ' >

                    <Photo />
                    <Links />

                </div>
                <div>
                    <Navbar />
                </div>
            </div>




        </div>
    )
}

export default SideBar
