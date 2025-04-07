import React from 'react'
import found from '/404.jpg'
const Notfound = () => {
  return (
    <div className='w-full h-full flex justify-center items-center '>
            <img className=' w-full object-cover'   src={found} alt="" />
      
    </div>
  )
}

export default Notfound
