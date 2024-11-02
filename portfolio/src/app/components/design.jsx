'use client';
import React, { useEffect, useState } from 'react';

const designMap = {
  chakra: 'border-chakra',
  bootstrap: 'border-bootstrap',
  material: 'border-material',
  tailwind: 'border-tailwind',
};
const urlMap = {
  chakra: 'https://chakra-ui.com/',
  bootstrap: 'https://getbootstrap.com/',
  material: 'https://mui.com/',
  tailwind: 'https://tailwindcss.com/',
};

function Design() {
  const [data, setData] = useState({ design: [] });

  useEffect(() => {
    fetch('/design.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error loading libraries:', error));
  }, []);

  const renderDesign = (design) => (
    <a
    key={design.name}
    href={urlMap[design.name]}
    target="_blank"
    rel="noopener noreferrer"
    className={`mt-2 md:mt-4 md:mr-5 mr-3 p-2 border-2 rounded-md
      ${designMap[design.name] || ''}`}
  >
    {design.name.toUpperCase()}
  </a>
  );

  return (
    <div>
     <div className="md:text-2xl text-xl sm:text-xl font-light mb-2">
        CSS LIBRARIES
      </div>

      <div className="flex flex-row md:text-2xl text-sm sm:text-base font-light">
        <div className="flex flex-wrap">
          {data.design.map(renderDesign)}
        </div>
      </div>
    </div>
  );
}

export default Design;
