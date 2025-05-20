'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function MyProject() {
    const classMap = {
        react: 'text-react',
        redux: 'text-redux',
        typescript: 'text-typescript',
        sass: 'text-sass',
    };

    const [data, setData] = useState({ projects: [] });

    useEffect(() => {
        fetch('/p.json')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error('Error loading:', err));
    }, []);

    return (
        <div>
            {data.projects.map((proje) => (
                <div key={proje.title} className='flex flex-col sm:mt-8 mt-4'>
                    <div className='text-xl lg:text-2xl mb-3'>{proje.title}</div>
                    <div className="relative w-full xl:w-4/5 aspect-[2.2/1] overflow-hidden">
                        <Image
                            src={proje.src}
                            alt={proje.title}
                            fill
                            quality={100}
                            style={{ objectFit: 'cover' }}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <div className='flex mt-4 xl:w-4/5 w-full justify-between'>
                        <div className="flex flex-wrap">
                            {proje.languages?.map((lang) => (
                                <div key={lang} className={`mr-2 ${classMap[lang] || 'text-white'}`}>
                                    {lang.toUpperCase()}
                                </div>
                            ))}
                        </div>

                        {proje.isLive && (
                            <button
                                className='bg-secondary lg:w-24 w-20 lg:h-10 h-8 rounded-md text-lg lg:text-xl text-gray-800 shadow-md shadow-gray-300'
                                onClick={() => window.open(proje.live, '_blank')}
                            >
                                Live
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyProject;
