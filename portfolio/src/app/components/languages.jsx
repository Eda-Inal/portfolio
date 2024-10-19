import React from 'react'

function Languages() {
    let languages1 = [{
        "name": "HTML",
        "color": "text-html"
    }, {
        "name": "CSS",
        "color": "text-css"
    },
    {
        "name": "JAVASCRIPT",
        "color": "text-js"
    },
    {
        "name": "REACT",
        "color": "text-react"
    }];
    let languages2 = [{
        "name": "REDUX",
        "color": "text-redux"
    },
    {
        "name": "TYPESCRIPT",
        "color": "text-ts"
    },
    {
        "name": "NEXT JS",
        "color": "text-nextjs"
    },
    {
        "name": "SASS",
        "color": "text-sass"
    }]

    return (
        <div>
            <div className='md:text-2xl text-md sm:text-xl font-light mb-4 '>Crafting modern, responsive websites with:
            </div>
            <div className='flex flex-row md:text-2xl text-md sm:text-xl font-light '>
                <div className='flex flex-col'>
                    {
                        languages1.map((language) => (
                            <div className={`${language.color} md:mt-4 mt-2'`}>{language.name}</div>
                        ))
                    }

                </div>
                <div className='flex flex-col ml-16 md:ml-28'>
                    {
                        languages2.map((language) => (
                            <div className={`${language.color} md:mt-4 mt-2'`}>{language.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Languages
