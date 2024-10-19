'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


function Languages() {
    const [data, setData] = useState({ languages1: [], languages2: [] });
    useEffect(() => {
        fetch('/languages.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error loading languages:', error));
    }, []);

    return (
        <div>
            <div className='md:text-2xl text-md sm:text-xl font-light mb-4 '>Crafting modern, responsive websites with:
            </div>
            <div className='flex flex-row md:text-2xl text-md sm:text-xl font-light '>
                <div className='flex flex-col'>
                    {
                        data.languages1.map((language) => (
                            <div className={`${language.color} md:mt-4 mt-2'`}>{language.name}</div>
                        ))
                    }

                </div>
                <div className='flex flex-col ml-16 md:ml-28'>
                    {
                        data.languages2.map((language) => (
                            <div className={`${language.color} md:mt-4 mt-2'`}>{language.name}</div>
                        ))
                    }
                </div>
            </div>
            <div className='flex mt-12'> 
    {
        [...data.languages1, ...data.languages2].map((language) => (
            language.src && (  //sadece srcyi render eder
                <div 
                    key={language.name} 
                    className='relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden mr-4'
                >
                    <Image
                        src={language.src}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        alt={`${language.name} logo`}
                    />
                </div>
            )
        ))
    }
</div>

        </div>
    )
}

export default Languages
