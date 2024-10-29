'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function ToolsImages() {
    const [data, setData] = useState({ tools: [], design: [] });
    useEffect(() => {
        Promise.all([fetch('/tools.json'), fetch('/design.json')])
            .then(async ([toolsRes, designRes]) => ({
                tools: await toolsRes.json(),
                design: await designRes.json(),
            }))
            .then((combinedData) => setData({
                tools: combinedData.tools.tools,
                design: combinedData.design.design,
            }))
            .catch((error) => console.error('Error loading data:', error));
    }, []);

    const renderImage = (item) => (
        <div
            key={item.name}
            className="relative w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] 
        rounded-full overflow-hidden border-2 mr-4 mt-4"
        >
            <Image
                src={item.src}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                alt={`${item.name} logo`}
            />
        </div>
    );

    return (
        <div>
            <div className="flex mt-12 flex-wrap">
                {data.tools.map(renderImage)}
                {data.design.map(renderImage)}
            </div>
        </div>
    );
}

export default ToolsImages;

