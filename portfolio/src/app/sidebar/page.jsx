import React from 'react'
import Photo from '../components/photo'
import Links from '../components/links'
import Navbar from '../components/navbar'

function SideBar() {
    return (
        <div className='container md:w-2/5 w-4/5 sm:w-4/5 sm:h-48 h-36  md:mx-0  md:h-screen mx-auto '   >
            <div className='flex md:flex-col md:items-center w-full justify-between sm:justify-between mt-4 md:mt-0 '>
                <div className='  flex md:flex-col   flex-row items-center   md:mx-0 md:mt-8  ' >

                    <Photo />
                    <Links />

                </div>
                <div >
                    <Navbar />
                </div>
            </div>




        </div>
    )
}

export default SideBar
