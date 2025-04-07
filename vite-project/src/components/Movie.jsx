import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';
import Topnav from './templates/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './templates/Loading';
import Cards from './templates/Cards';

const Movie = () => {

    document.title = "Online Straming ";
    const naviagate = useNavigate();
    const [category, setcategory] = useState('now_playing');
    const [duration, setduration] = useState('day');
    const [movie, setmovie] = useState([]);
   const [page, setpage] = useState(1);
   const [hasMore, sethasMore] = useState(true);

   const GetMovie = async () => {

    try {
      const {data} = await axios.get(`/movie/${category}?page=${page}`);

      if(data.results.length > 0 ){
          setmovie((prevState) =>[...prevState,...data.results]);
          setpage(page + 1);

      }else{
         sethasMore(false);
      }
      
    } catch (error) {
      console.log("Error data:", error);
    }
  };

//   console.log("trending")

const refreshHandler = () => {
    if(movie.length === 0) {
        GetMovie()
    }else{
         setpage(1)
         setmovie([]);
         GetMovie();
    }
}


  useEffect(() => {
  refreshHandler();
  },[category]);


  return movie.length > 0 ? (
    <div className=' w-screen h-screen mt-4'>
        <div className=' w-full  flex items-center  '>
          <h1 className='text-2xl font-semibold text-zinc-400'>
           <i  onClick={() => naviagate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-3 ml-5"
            ></i>{""}
                Movie <small className='text-sm text-zinc-600 ml-2'> ({category}) </small>
           </h1>

           <Topnav/>
           <div className='mr-6'>
           <Dropdown title="Category" options={["popular", "top_rated", "upcoming", "now_playing"]} func={(e)=>setcategory(e.target.value)}/>
           </div>
          
        </div>

        <InfiniteScroll 
        dataLength={movie.length}
        next={GetMovie}
        hasMore={true}
        loader={<h1>Loading...</h1>}
        >

        <Cards data={movie} title="Movie"/>
        </InfiniteScroll>
    </div>  
  ): <div className='ml-[96vh]'><Loading/> </div>  
}

export default Movie
