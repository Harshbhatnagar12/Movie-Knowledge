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
    <div className=' w-full h-full mt-4 overflow-x-hidden'>
        <div className=' w-full  flex flex-wrap  items-center  '>
          <h1 className='text-sm sm:text-2xl font-semibold text-zinc-400 flex items-center'>
           <i  onClick={() => naviagate(-1)}
            className="hover:text-[#6556CD] cursor-pointer ri-arrow-left-line mr-3 ml-5"
            ></i>{""}
                Trending    
           </h1>


            <div className='w-[35%] sm:w-auto'>
           <Topnav/>
            </div>
           <div className='flex  w-[34%] sm:w-[60%] '> 
          <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=>setcategory(e.target.value)}/>
           <div className='w-[2%] sm:mr-3'></div>
           <div className='hidden sm:inline'>
           <Dropdown title="Duration" options={["week", "day", "month"]} func={(e)=>setduration(e.target.value)}/> 

           </div>
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

  ): <Loading/>  
}

export default Trending
