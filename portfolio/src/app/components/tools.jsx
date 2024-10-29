'use client';
import React, { useEffect, useState } from 'react';

const toolsMap = {
  vite: 'border-vite',
  vercel: 'border-vercel',
  netlify: 'border-netlify',
  postman: 'border-postman',
  figma: 'border-figma',
};

function Tools() {
  const [data, setData] = useState({ tools: [] });

  useEffect(() => {
    fetch('/tools.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error loading tools:', error));
  }, []);

  const renderTools = (tool) => (
    <div
      key={tool.name}
      className={`mt-2 md:mt-4 md:mr-5 mr-3 p-2 border-2 rounded-md
        ${toolsMap[tool.name] || ''}`}
    >
      {tool.name.toUpperCase()}
    </div>
  );

  return (
    <div>
      <div className="md:text-2xl text-xl sm:text-xl font-light mb-2">
        TOOLS
      </div>

      <div className="flex flex-row md:text-2xl text-sm sm:text-base font-light">
        <div className="flex flex-wrap">
          {data.tools.map(renderTools)}
        </div>
      </div>
    </div>
  );
}

export default Tools;
