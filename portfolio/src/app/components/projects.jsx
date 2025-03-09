'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'

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
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error loading languages:', error));
    }, []);
    return (
        <div>
            {
                data.projects.map((proje) => (
                    <div key={proje.title} className='flex flex-col sm:mt-8 mt-4'>
                        <div className='text-xl lg:text-2xl mb-3'>{proje.title}</div>

                        <div
                            className="relative xl:w-4/5 w-5/5"
                            style={{
                                aspectRatio: '2.2 / 1',  // 2:1 ratio
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                src={proje.src}
                                alt={proje.title}
                                style={{ objectFit: 'cover' }} 
                                quality={80}
                                layout='fill'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                               

                            />
                        </div>

                        <div className='flex mt-4 xl:w-4/5 w-5/5 justify-between'>
                            <div className="flex flex-wrap">
                                {proje.languages?.map((language) => (
                                    <div
                                        key={language}
                                        className={`mr-2 ${classMap[language] || 'text-white'}`}
                                    >
                                        {language.toUpperCase()}
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
                ))
            }


        </div>
    )
}

export default MyProject
