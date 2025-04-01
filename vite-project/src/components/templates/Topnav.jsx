import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import noimage from '/noimage.jpg';


const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {

    try {
      const {data} = await axios.get(`/search/movie?query=${query}`,{
    });
      setsearches(data.results );
     
      
    } catch (error) {
      console.log("Error data:", error);
    }
  };

  useEffect(()=>{
    GetSearches();
   },[query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[20%]">
      <i className="text-zinc-400 text-xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-3 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search movies..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-xl ri-close-line cursor-pointer"
        ></i>
      )}

  
      {searches.length > 0 && query.length > 0 && (
        <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%] overflow-auto rounded shadow-lg">
          {searches.map((s,i) => (
            <Link
              key={i}
              to={`/movie/${s.id}`}
              className="text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300 font-semibold w-full p-5 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
              className='w-[17vh] h-[13vh] object-cover mr-6 rounded shadow-lg'
                src={s.backdrop_path || s.profile_path || s.poster_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}`: noimage}   alt=""
              />
              <span className="ml-4">{s.original_title || s.original_name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
