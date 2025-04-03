import React from 'react'
import loader from'/Loader.gif'

function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center '>
        <img className=' h-[80%] mr-[96vh] w-[90%] object-cover'   src={loader} alt="" />
      
    </div>
  )
}

export default Loading
