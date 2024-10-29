'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const toolsMap = {
  vite: 'text-vite',
  vercel: 'text-vercel',
  netlify: 'text-netlify',
  postman: 'text-postman',
  figma: 'text-figma',
};

function Tools() {
  const [data, setData] = useState({ tools: []});

  useEffect(() => {
    fetch('/tools.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error loading languages:', error));
  }, []);

  const renderTools = (tool) => (
    <div
      key={tool.name}
      className={`mt-2 md:mt-4 mr-7 ${toolsMap[tool.name] || ''}`}
    >
      {tool.name.toUpperCase()}
    </div>
  );

  return (
    <div>
      <div className="md:text-2xl text-md sm:text-xl font-light mb-4">
     TOOLS
      </div>

      <div className="flex flex-row md:text-2xl text-md sm:text-xl font-light">
        <div className="flex">
          {data.tools.map(renderTools)}
        </div>
      </div>

      {/* <div className="flex mt-12 flex-wrap">
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
      </div> */}
    </div>
  );
}

export default Tools;
