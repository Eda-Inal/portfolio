import React from 'react';

const badgeUrls = {
    materialui: "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=material-ui&logoColor=white",
    bootstrap: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    tailwind: "https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    chakra: "https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white",
  };
  

function Design() {
 
  const renderTool = (toolName, url) => (
    <div key={toolName} className="mt-2 md:mt-4 mr-2">
      <img src={url} alt={`${toolName} badge`} className="h-10" />
    </div>
  );

  return (
    <div>
      <div className="md:text-2xl text-md sm:text-xl font-light mb-2">
     LIBRARIES
      </div>

      <div className="flex flex-row flex-wrap md:text-2xl text-md sm:text-xl font-light">
      <div className="flex flex-wrap">
        {Object.entries(badgeUrls).map(([name, url]) => renderTool(name, url))}
      </div>
  </div> 
    </div>
  );
}

export default Design;