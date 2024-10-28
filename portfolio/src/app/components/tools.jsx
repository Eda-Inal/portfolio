import React from 'react';

const badgeUrls = {
  postman: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
  figma: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
  netlify: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
  vercel: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
  vite: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white",
};

function Tools() {
 
  const renderTool = (toolName, url) => (
    <div key={toolName} className="mt-2 md:mt-4 mr-2">
      <img src={url} alt={`${toolName} badge`} className="h-10" />
    </div>
  );

  return (
    <div>
      <div className="md:text-2xl text-md sm:text-xl font-light mb-2">
     TOOLS
      </div>

      <div className="flex flex-row flex-wrap md:text-2xl text-md sm:text-xl font-light">
      <div className="flex flex-wrap">
        {Object.entries(badgeUrls).map(([name, url]) => renderTool(name, url))}
      </div>
  </div> 
    </div>
  );
}

export default Tools;

