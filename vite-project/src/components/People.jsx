import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Dropdown from './templates/Dropdown';
import Topnav from './templates/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './templates/Loading';
import Cards from './templates/Cards';

const People = () => {

    document.title = "Online Straming ";
    const naviagate = useNavigate();
    const [category, setcategory] = useState('popular');
    const [duration, setduration] = useState('day');
    const [person, setperson] = useState([]);
   const [page, setpage] = useState(1);
   const [hasMore, sethasMore] = useState(true);

   const GetPerson = async () => {

    try {
      const {data} = await axios.get(`/person/${category}?page=${page}`);

      if(data.results.length > 0 ){
          setperson((prevState) =>[...prevState,...data.results]);
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
    if(person.length === 0) {
        GetPerson()
    }else{
         setpage(1)
         setperson([]);
         GetPerson();
    }
}


  useEffect(() => {
  refreshHandler();
  },[category]);



  return person.length > 0 ? (
    <div className=' w-screen h-screen  mt-4'>
        <div className=' w-full  flex items-center  '>
          <h1 className='text-2xl font-semibold text-zinc-400'>
           <i  onClick={() => naviagate(-1)}
            class="hover:text-[#6556CD] ri-arrow-left-line mr-3 ml-5"
            ></i>{""}
                People 
           </h1>

           <Topnav/>
          
        </div>

        <InfiniteScroll 
        dataLength={person.length}
        next={GetPerson}
        hasMore={true}
        loader={<h1>Loading...</h1>}
        >

        <Cards data={person} title="Person"/>
        </InfiniteScroll>
    </div>  
  ): <div className='ml-[96vh]'><Loading/> </div>  
}

export default People;
