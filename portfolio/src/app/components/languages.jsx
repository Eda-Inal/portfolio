'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const classMap = {
  html: 'text-html',
  css: 'text-css',
  javascript: 'text-javascript',
  react: 'text-react',
  redux: 'text-redux',
  typescript: 'text-typescript',
  nextjs: 'text-nextjs',
  sass: 'text-sass',
};

function Languages() {
  const [data, setData] = useState({ languages1: [], languages2: [] });

  useEffect(() => {
    fetch('/languages.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error loading languages:', error));
  }, []);

  const renderLanguage = (language) => (
    <div
      key={language.name}
      className={`mt-2 md:mt-4 ${classMap[language.name] || ''}`}
    >
      {language.name.toUpperCase()}
    </div>
  );

  return (
    <div>
      <div className="md:text-2xl text-md sm:text-xl font-light mb-4">
        Crafting modern, responsive websites with:
      </div>

      <div className="flex flex-row md:text-2xl text-md sm:text-xl font-light">
        <div className="flex flex-col">
          {data.languages1.map(renderLanguage)}
        </div>
        <div className="flex flex-col ml-16 md:ml-28">
          {data.languages2.map(renderLanguage)}
        </div>
      </div>

      <div className="flex mt-12 flex-wrap">
        {[...data.languages1, ...data.languages2]
          .filter((language) => language.src) 
          .map((language) => (
            <div
              key={language.name}
              className="relative w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden mr-4 mt-4"
            >
              <Image
                src={language.src}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                alt={`${language.name} logo`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Languages;
