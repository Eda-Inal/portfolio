import React from 'react'
import Header from '../components/homeheader'
import Languages from '../components/languages'

function Home() {
    return (
        <div className='md:mt-8 w-4/5 mx-auto'>
            <div className='flex flex-col'>
                <div><Header /> </div>
                <div className='md:mt-10 lg:mt-16 mt-8'><Languages /> </div>

            </div>

        </div>
    )
}

export default Home
