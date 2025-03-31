import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'


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
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
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
        <div className="w-[50%] max-h-[40vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded shadow-lg">
          {searches.map((s,i) => (
            <Link
              key={i}
              to={`/movie/${s.id}`}
              className="text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300 font-semibold w-full p-5 flex justify-start items-center border-b-2 border-zinc-100"
            >
              {/* <img
                src={
                  s.poster_path
                    ? `https://image.tmdb.org/t/p/w200${s.poster_path}`
                    : "https://via.placeholder.com/100"
                }
                alt={s.original_title || s.original_name}
                className="w-10 h-10 rounded"
              /> */}
              <span className="ml-4">{s.original_title || s.original_name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
