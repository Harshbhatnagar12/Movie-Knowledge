import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import axios from '../utils/axios'
import Header from './templates/Header';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';


function Home() {
    document.title = 'Movie Straming | Home Page';
    
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState('all');
    
    const GetHeaderWallpaper = async () => {

      try {
        const {data} = await axios.get(`/trending/all/day`);
        let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
        setwallpaper(randomdata);
       
        
      } catch (error) {
        console.log("Error data:", error);
      }
    };
    // console.log(wallpaper);  



    const GetTrending = async () => {

      try {
        const {data} = await axios.get(`/trending/${category}/day`);
        // let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
        settrending(data.results);
      
       
        
      } catch (error) {
        console.log("Error data:", error);
      }
    };

    useEffect(()=>{
      GetTrending()
     !wallpaper && GetHeaderWallpaper();
    },[category]);


  return wallpaper && trending ? (
 <>
 <Sidenav/>
 <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
 <Topnav/>
 <Header data={wallpaper}/>
 
        <div className='my-3 p-3 flex justify-between'>
        <h1 className=' text-2xl text-zinc-400 font-semibold'>Trending</h1>
         <Dropdown title='Filter' options={['tv', 'movie', 'all']}   />
        </div>

 <HorizontalCards data={trending}  func={(e) => setcategory(e.target.value)}/>
 </div>

 </>
  ): <h1 className='text-white ml-[100vh] flex items-center justify-center font-semibold'>Loading...</h1>
}

export default Home
