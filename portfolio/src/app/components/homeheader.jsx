import React from 'react'

function Header() {
  return (
    <div className='flex flex-col lg:text-4xl md:text-3xl text-2xl w-4/5 mx-auto'>
      <div>Eda Işil İnal</div>
      <div className='flex sm:flex-row md:mt-6 flex-col'>
        <div>I'm a </div>
        <div className='sm:ml-2 md:ml-5 text-secondary'>Front-End Developer</div>
      </div>
    </div>
  )
}

export default Header
