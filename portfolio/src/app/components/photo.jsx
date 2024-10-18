import React from 'react'
import Image from 'next/image'
import me from "../../../public/images/me.jpeg"

function Photo() {
    return (
        <div className='sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]  w-[120px] h-[120px] bg-white rounded-full  ml-2 sm:ml-6 md:ml-0 flex justify-center items-center mt-4'  >
            <div className='relative sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] w-[100px] h-[100px] rounded-full overflow-hidden'>
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
