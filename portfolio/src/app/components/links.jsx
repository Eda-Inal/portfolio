import React from 'react';
import linkedin from "../../../public/images/in.png";
import github from "../../../public/images/github.png";
import Image from 'next/image';

function Links() {
    return (
        <div className='md:w-36 md:mt-4 flex-col  flex md:flex-row md:justify-between justify-between h-28 sm:h-40 ml-2 sm:ml-8 md:ml-0  md:h-20  '>
            <div className='relative w-[40px] h-[40px]  sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden'>
                <Image
                    src={github}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    alt="LinkedIn Logo"
                />
            </div>
            <div className='relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden'>
                <Image
                    src={linkedin}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    alt="LinkedIn Logo"
                />
            </div>
        </div>
    )
}

export default Links
