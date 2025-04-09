import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data, title}) => {

    const truncateText = (text, limit) => {
        if (!text) return "No description available"; // Fallback for undefined/null
        text = String(text); // Ensure it's a string
        if (text.length <= limit) return text;
        const truncated = text.slice(0, limit);
        return truncated.slice(0, truncated.lastIndexOf(" ")) ;
      };
      
  return (
    <div className='flex flex-wrap w-full h-full p-[1%] bg-[#1F1E24] '>
      {data.map((c,i)=>
      <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative w-[30vh] ml-[8%]  mb-[5%] mt-9' key={i}>
      <img 
      className='h-[50vh] sm:ml-0 ml-8 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover' src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.profile_path || c.poster_path
        }`}
         alt="" />
         <h1 className='text-2xl sm:ml-0 ml-14 text-zinc-200 mt-3 font-semibold '>

      {/* {c.original_title || c.original_name || c.title || c.name} */}
      {truncateText(c.original_title || c.original_name || c.title || c.name || c.profile_path, 20)}

         </h1>

   {c.vote_average && (
    <div className='absolute right-[-10%] bottom-[30%] text-white w-[8vh] h-[8vh] flex justify-center items-center bg-yellow-600 rounded-full text-xl font-semibold'>
      {(c.vote_average*10).toFixed()} <sup>%</sup> 
      </div>
     )}
 

      </Link>)}
    </div>
  )
}

export default Cards
