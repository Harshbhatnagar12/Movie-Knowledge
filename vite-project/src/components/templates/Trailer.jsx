import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from './Notfound'


const Trailer = () => {
    const naviagate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes('movie') ? 'movie' : 'tv'; 
    const ytvideo = useSelector((state) => state[category].info.videos);
    console.log(ytvideo)
    
 
  return ytvideo ? (
    <div className='bg-[rgba(0,0,0,.9)] absolute top-0 z-[100] left-0 w-screen h-screen flex items-center justify-center'>
   <Link  onClick={() => naviagate(-1)}
            className="hover:text-[#6556CD] absolute ri-close-fill mr-3 ml-5 text-3xl text-white right-[1%] top-[0%]"
      ></Link>
     <ReactPlayer 
    controls
     height={550}
     width={1200} 
     url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
     />
    </div>
  ): <Notfound/>;
}

export default Trailer
