import React from 'react'
import Photo from '../components/photo'

function SideBar() {
  return (
    <div className='container md:w-2/5 w-4/5 h-40 md:h-screen border-r-2'  >
    <div className='  flex flex-col  md:items-center ' >
 
<Photo/>

    </div>
    </div>
  )
}

export default SideBar
