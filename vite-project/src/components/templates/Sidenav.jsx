import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'

const Sidenav = () => {

 
  return (
    <>
  
    <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-3 '>
         <h1 className='text-2xl text-white font-bold mt-1'>
         <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span className='text-2xl '> Movie Stream </span>  
        </h1>
        <nav className='flex flex-col text-zinc-400 text-md gap-1'>
        <h1 className='text-white font-semibold text-xl mt-7 mb-1'>New Feeds</h1>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-fire-fill"></i> Trending</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-sparkling-2-fill"></i> Popular</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-movie-2-fill"></i> Movies</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-tv-fill"></i> Tv Show </Link>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 mb-3'><i className="mr-2 ri-team-fill"></i> People</Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400 ' />
        <nav className='flex flex-col text-zinc-400 text-md gap-1'>
        <h1 className='text-white font-semibold text-xl mt-7 '>Website Information</h1>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-information-2-fill"></i>About</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className=" mr-1 ri-phone-fill"></i> Contact Us</Link>
        </nav>
    </div>
    </>
      
  )
}

export default Sidenav
