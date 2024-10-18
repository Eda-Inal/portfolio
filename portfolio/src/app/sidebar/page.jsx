import React from 'react'
import Photo from '../components/photo'
import Links from '../components/links'
import Navbar from '../components/navbar'

function SideBar() {
    return (
        <div className='container md:w-2/5 w-4/5 sm:w-4/5 sm:h-48 h-36 mx-auto  md:mx-0  md:h-screen md:border-r-2 '  >

            <div className='  flex md:flex-col  md:items-center  flex-row items-center   sm:mx-auto md:mx-0  justify-center' >

                <Photo />
                <Links />

                <Navbar />


            </div>


        </div>
    )
}

export default SideBar
