import React from 'react'
import Image from 'next/image'
import movie from "../../../public/images/movie.png"

function MyProject() {
    return (
        <div>
            <div className='flex flex-col sm:mt-8 mt-4'>
                <div className='text-xl lg:text-2xl mb-3'>Movie Website</div>

                <div
                    className="relative xl:w-4/5 w-5/5"
                    style={{
                        aspectRatio: '2 / 1',  // 2:1 ratio
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={movie}
                        alt="Movie Image"
                        layout="fill"
                        objectFit="contain"    // görseli kırpmadan gösteriyor. 
                        quality={100}
                    />
                </div>

                <div className='flex mt-4 xl:w-4/5 w-5/5 justify-between'>
                    <button className='bg-secondary lg:w-24 w-20  lg:h-10 h-8 rounded-md text-lg lg:text-xl text-gray-800'>Live</button>
                    <button className='bg-secondary lg:w-24 w-20  lg:h-10 h-8 rounded-md text-lg  lg:text-xl text-gray-800'>Details</button>
                </div>
            </div>

        </div>
    )
}

export default MyProject
