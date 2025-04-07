import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    // console.log(data);
  return (
    <div 
    style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path || data.poster_path
        })`,
        backgroundPosition: 'center',
        backgroundPosition:'fit',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}
     className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%]'>
      <h1 className='text-3xl font-black text-white w-[70%]'>{data.original_title || data.original_name || data.title || data.name}</h1>
      <p className='w-[60%] text-white mt-1'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 ">more </Link> </p>
      <p className='text-white mb-2 pt-2 flex gap-[5.9px]'>
      <i className="text-yellow-500 ri-megaphone-fill "></i>{" "} {data.release_date || data.first_air_date || "No Information"}
      <i className="text-yellow-500 ri-album-fill ml-2 "></i>{" "} {data.media_type.toUpperCase() || "Movie"}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='bg-[#6556CD] p-3 rounded-md  text-white mt-2  '>
      Watch Trailer
      </Link>
    </div>
  )
}

export default Header
