import React from 'react'
import loader from'/Loader.gif'

function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center '>
        <img className=' h-[60%] w-[60%] object-cover '   src={loader} alt="" />
      
    </div>
  )
}

export default Loading
