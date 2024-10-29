import React from 'react'
import Image from 'next/image'
import me from "../../../public/images/meinfo/me.jpeg"

function Photo() {
    return (
        <div className='sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]  w-[100px] h-[100px] bg-white rounded-full md:ml-0 flex justify-center items-center '  >
            <div className='relative sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] w-[80px] h-[80px] rounded-full overflow-hidden'>
                <Image
                    src={me}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    alt="me"
                    priority
                    sizes="(max-width: 220px) 100vw, 220px" 
                />
            </div>
        </div>
    )
}

export default Photo
