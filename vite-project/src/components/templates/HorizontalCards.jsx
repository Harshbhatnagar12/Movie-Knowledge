import React from 'react'
import { Link } from 'react-router-dom';


// We use truncate Bcz some Overview data are undifined or Null that reason slice directly can't used. 
const truncateText = (text, limit) => {
    if (!text) return "No description available"; // Fallback for undefined/null
    text = String(text); // Ensure it's a string
    if (text.length <= limit) return text;
    const truncated = text.slice(0, limit);
    return truncated.slice(0, truncated.lastIndexOf(" ")) ;
  };

function HorizontalCards({data}) {

  return (
   
   
      <div className='w-[100%] flex overflow-y-hidden mb-3 p-5  '>
      {data.map((d, i) => <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] h-[35vh] mr-5 bg-zinc-900'>
        <img className='w-full h-[45%] object-center object-cover' src={`https://image.tmdb.org/t/p/original/${ d.backdrop_path || d.profile_path || d.poster_path
        }`} alt="" />

        <div className='text-white p-0 sm:p-2 mb-2 h-[15%] text-sm '>
        <h1 className='text-sm sm:text-lg font-semibold'>{d.original_title || d.original_name || d.title || d.name}</h1>
        <p className=''>{truncateText(d.overview, 45)}<span className="text-zinc-500"> more...</span></p>
        </div>
  
      </Link> )}
       
      </div>    
   );
 };

export default HorizontalCards;
