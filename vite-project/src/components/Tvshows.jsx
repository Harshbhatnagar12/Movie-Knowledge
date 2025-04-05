import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';
import Topnav from './templates/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './templates/Loading';
import Cards from './templates/Cards';

const Tvshows = () => {

    document.title = "Online Straming ";
    const naviagate = useNavigate();
    const [category, setcategory] = useState('airing_today');
    const [duration, setduration] = useState('day');
    const [tv, setmovie] = useState([]);
   const [page, setpage] = useState(1);
   const [hasMore, sethasMore] = useState(true);

   const GetTv = async () => {

    try {
      const {data} = await axios.get(`/tv/${category}?page=${page}`);

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
    if(tv.length === 0) {
        GetTv()
    }else{
         setpage(1)
         setmovie([]);
         GetTv();
    }
}


  useEffect(() => {
  refreshHandler();
  },[category]);


  return tv.length > 0 ? (
    <div className=' w-screen h-screen mt-4'>
        <div className=' w-full  flex items-center  '>
          <h1 className='text-2xl font-semibold text-zinc-400'>
           <i  onClick={() => naviagate(-1)}
            class="hover:text-[#6556CD] ri-arrow-left-line mr-3 ml-5"
            ></i>{""}
                Tv Shows <small className='text-sm text-zinc-600 ml-2'> ({category}) </small>
           </h1>

           <Topnav/>
           <div className='mr-6'>
           <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]} func={(e)=>setcategory(e.target.value)}/>
           </div>
          
        </div>

        <InfiniteScroll 
        dataLength={tv.length}
        next={GetTv}
        hasMore={true}
        loader={<h1>Loading...</h1>}
        >

        <Cards data={tv} title="tv"/>
        </InfiniteScroll>
    </div>  
  ):<div className='ml-[96vh]'><Loading/> </div>  
}

export default Tvshows
