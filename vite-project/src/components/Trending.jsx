import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../utils/axios';
import Cards from './templates/Cards';
import Loading from './templates/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    document.title = "Online Straming " ;
    const naviagate = useNavigate();
    const [category, setcategory] = useState('all');
    const [duration, setduration] = useState('day');
    const [trending, settrending] = useState([]);
   const [page, setpage] = useState(1);
   const [hasMore, sethasMore] = useState(true);

    const GetTrending = async () => {

        try {
          const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);

          if(data.results.length > 0 ){
              settrending((prevState) =>[...prevState,...data.results]);
              setpage(page + 1);

          }else{
             sethasMore(false);
          }
          // let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
        //   settrending(data.results);
        
         
          
        } catch (error) {
          console.log("Error data:", error);
        }
      };

    //   console.log("trending")

    const refreshHandler = () => {
        if(trending.length === 0) {
            GetTrending()
        }else{
             setpage(1)
             settrending([]);
             GetTrending();
        }
    }


      useEffect(() => {
      refreshHandler();
      },[category, duration]);

  return trending.length > 0 ? (
    <div className=' w-screen h-screen mt-4'>
        <div className=' w-full  flex items-center  '>
          <h1 className='text-2xl font-semibold text-zinc-400'>
           <i  onClick={() => naviagate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-3 ml-5"
            ></i>{""}
                Trending    
           </h1>

           <Topnav/>
           <div className='flex mr-6'> 
          <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=>setcategory(e.target.value)}/>
           <div className='w-[2%] mr-3'></div>
           <Dropdown title="Duration" options={["week", "day", "month"]} func={(e)=>setduration(e.taregt.value)}/> 
           </div>
           
        </div>

        <InfiniteScroll 
        dataLength={trending.length}
        next={GetTrending}
        hasMore={true}
        loader={<h1>Loading...</h1>}
        >

        <Cards data={trending} title={category}/>
        </InfiniteScroll>
    </div>  

  ): <div className='ml-[96vh]'><Loading/> </div>  
}

export default Trending
