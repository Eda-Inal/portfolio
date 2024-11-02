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
const urlMap = {
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  react: 'https://react.dev/',
  redux: 'https://redux.js.org/',
  typescript: 'https://www.typescriptlang.org/',
  nextjs: 'https://nextjs.org/',
  sass: 'https://sass-lang.com/',
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
    <a
    key={language.name}
    href={urlMap[language.name]}
    target="_blank"
    rel="noopener noreferrer"
    className={`mt-2 md:mt-4 ${classMap[language.name] || ''}`}
  >
    {language.name.toUpperCase()}
  </a>
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
          .map((language, index) => (
            <div
              key={language.name}
              className="relative w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden mr-4 mt-4 animate-wave"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image
                src={language.src}
                fill
                sizes="(max-width: 600px) 50px, (max-width: 900px) 60px, 70px"
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
