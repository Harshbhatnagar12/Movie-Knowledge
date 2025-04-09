import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import logo from  '/logo.png'

const Sidenav = () => {

 
  return (
    <>  
  
    <div className='w-[25%] sm:w-[20%] h-full  border-r-2 border-zinc-400 p-3  '>
         <h1 className=' text-white font-bold  flex  '>
         {/* <i className="text-[#6556CD] ri-tv-fill mr-2"></i> */}
         <img className='h-16 w-16 sm:ml-6 md:ml-0   ' src="logo.png" alt="" />
          <span className=' hidden mt-3 lg:text-2xl lg:inline'> MovieVerse </span>  
        </h1>
        <nav className='flex flex-col text-zinc-400 text-md gap-1'>
        <h1 className='text-white font-semibold text-xl mt-1 mb-1'>New Feeds</h1>
        <Link to='/trending' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className=" mr-2 ri-fire-fill"></i> Trending</Link>
        <Link to='/popular' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-sparkling-2-fill"></i> Popular</Link>
        <Link to='/movie' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-movie-2-fill"></i> Movies</Link>
        <Link to='/tv' className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className="mr-2 ri-tv-fill"></i> Tv Show </Link>
        <Link to="/person" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 mb-3'><i className="mr-2 ri-team-fill"></i> People</Link>
        </nav>
        <hr className='border-none h-[1px] bg-zinc-400 ' />
        <nav className='flex flex-col text-zinc-400 text-md gap-1'>
        <h1 className='text-white font-semibold text-xl mt-7 '>Website <span className='hidden sm:inline  '> Information </span> </h1>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 mt-3 sm:p-3 '><i className="ml-5 ri-information-2-fill"></i> <span className='ml-3'> About </span></Link>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 '><i className=" mr-1 ri-phone-fill"></i> Contact Us</Link>
        </nav>
    </div>

   
    </>
      
  )
}

export default Sidenav
