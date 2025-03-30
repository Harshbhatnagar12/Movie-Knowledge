import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

    const GetSerches = async () => {
       try{
       const {data} = await axios.get(`/trending/movie/day?query=${query}`);
       setsearches(data.results);
       } catch (error) {
         console.log("Error: ", error);
   
       }
     };
   
     useEffect(()=>{
      GetSerches();
     },[query]);
   

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
      <i className=" text-zinc-400 text-xl ri-search-line"></i>    
      <input onChange={(e)=>setquery(e.target.value)}
      value={query}
       className='w-[50%] text-zinc-200 mx-10 p-3 text-xl outline-none border-none bg-transparent ' type="text" placeholder='Search anything...' /> 
       {query.length > 0 && (
         <i onClick={()=>setquery("")}
          className="text-zinc-400 text-xl ri-close-line"
          ></i>
          )}
     

     <div className='w-[50%] max-h-[40vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded'>
      {searches.map((s, i) => (
        <Link
         key={i}
         className='text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300 font-semibold w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100 '
         >

      {/* <img src="" alt="" /> */}
      <span>{ s.original_name ||s.original_title}</span>
      </Link>
    ))}     
     </div>
    </div>
  );
};

export default Topnav
