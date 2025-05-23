import React from 'react';
import linkedin from "../../../public/images/meinfo/in.png";
import github from "../../../public/images/meinfo/github.png";
import Image from 'next/image';

function Links() {
    return (
        <div className='md:w-36 md:mt-4 flex-col  flex md:flex-row md:justify-between justify-around h-28 sm:h-40 ml-2 sm:ml-8 md:ml-0  md:h-20  '>
            <a href="https://github.com/Eda-Inal" target="_blank" rel="noopener noreferrer" className='relative w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden'>
                <Image
                    src={github}
                    fill
                    sizes="(max-width: 768px) 40px, (max-width: 1024px) 60px, 60px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    alt="GitHub Logo"
                />
            </a>
            <a href="https://www.linkedin.com/in/edainal" target="_blank" rel="noopener noreferrer" className='relative w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden'>
                <Image
                    src={linkedin}
                    fill
                    sizes="(max-width: 768px) 40px, (max-width: 1024px) 60px, 60px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    alt="LinkedIn Logo"
                />
            </a>

        </div>
    )
}

export default Links
