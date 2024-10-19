import React from 'react'

function AboutMe() {
    return (
        <div>
            <div className='text-2xl md:text-2xl lg:text-3xl'>About Me</div>
            <div className='w-full md:w-4/5 text-lg md:text-xl lg:text-2xl font-light'>
                <p className='mt-8'>
                    I am a passionate frontend developer with a strong foundation in modern web technologies, including <span className='text-secondary'>JavaScript, React, Typescript and Next.js.</span>  I specialize in creating responsive, user-friendly interfaces with a focus on both performance and aesthetics.
                </p>
                <p className='mt-6'>
                    For state management, I am proficient with <span className='text-secondary'>Redux</span> and the <span className='text-secondary'>Context API.</span>  In terms of design and styling, I have experience with popular libraries like <span className='underline'>Chakra UI, Material UI, Tailwind CSS,and Bootstrap</span>, as well as CSS preprocessors such as Sass to streamline and enhance my workflow.
                </p>
                <p className='mt-6'>
                    For almost two years, I’ve been continuously honing my skills and expanding my expertise in frontend development. Currently, I am in my final year as a <span className='text-secondary'>Computer Science student, focusing on mathematics. </span> At 22 years old, I am eager to apply my knowledge to real-world projects and collaborate on innovative solutions.
                </p>
            </div>


        </div>
    )
}

export default AboutMe
