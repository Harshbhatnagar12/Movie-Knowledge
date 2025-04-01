import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

function HorizontalCards({data}) {
  return (
   
   
      <div className='w-[100%] flex overflow-y-hidden mb-3 p-5 '>
      {data.map((d,i) => <div key={i} className='min-w-[15%] mr-5 bg-zinc-900'>
        <img className='w-full h-[45%] object-center object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path || d.poster_path
        })`} alt="" />

        <div className='text-white p-2 mb-1 h-[15%] text-sm'>
        <h1 className='text-lg font-semibold'>{d.original_title || d.original_name || d.title || d.name}</h1>
        <p className=''>{d.overview.slice(0,40)}...<span className="text-zinc-500 "> more...</span> </p>
        </div>
     
      </div>)}
      </div>
   
    
  )
}

export default HorizontalCards
