import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';
import Topnav from './templates/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './templates/Loading';
import Cards from './templates/Cards';

const Popular = () => {
    document.title = "Online Straming ";
    const naviagate = useNavigate();
    const [category, setcategory] = useState('movie');
    const [duration, setduration] = useState('day');
    const [popular, setpopular] = useState([]);
   const [page, setpage] = useState(1);
   const [hasMore, sethasMore] = useState(true);

   const GetPopular = async () => {

    try {
      const {data} = await axios.get(`${category}/popular?page=${page}`);

      if(data.results.length > 0 ){
          setpopular((prevState) =>[...prevState,...data.results]);
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
    if(popular.length === 0) {
        GetPopular()
    }else{
         setpage(1)
         setpopular([]);
         GetPopular();
    }
}


  useEffect(() => {
  refreshHandler();
  },[category]);




  return popular.length > 0 ? (
    <div className=' w-screen h-screen mt-4'>
        <div className=' w-full  flex items-center  '>
          <h1 className='text-2xl font-semibold text-zinc-400'>
           <i  onClick={() => naviagate(-1)}
            class="hover:text-[#6556CD] ri-arrow-left-line mr-3 ml-5"
            ></i>{""}
                Popular    
           </h1>

           <Topnav/>
           <div className='mr-6'>
           <Dropdown  title="Category" options={["tv", "movie"]} func={(e)=>setcategory(e.target.value)}/>
           </div>
           
        </div>

        <InfiniteScroll 
        dataLength={popular.length}
        next={GetPopular}
        hasMore={true}
        loader={<h1>Loading...</h1>}
        >

        <Cards data={popular} title={category}/>
        </InfiniteScroll>
    </div>  
  ): <div className='ml-[96vh]'><Loading/> </div>  
    
}

export default Popular
