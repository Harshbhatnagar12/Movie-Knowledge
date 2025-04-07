import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { asyncloadtv, removetv } from '../store/actions/tvActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './templates/Loading';
import HorizontalCards from './templates/HorizontalCards';

const TvDetails = () => {
 
  const {pathname} = useLocation()
     const naviagate = useNavigate();
     const {id} = useParams();
     const {info} =  useSelector((state) => state.tv);
     const dispatch = useDispatch();
     console.log(info);
  
  
     useEffect(() => {  
      dispatch(asyncloadtv(id));
      return () => {
        dispatch(removeetv());
       }
     },[id]);

     return info ?  (
      <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }} 
    className='relative w-screen h-[180vh] px-[3%] mt-10'>
  
      {/* part 1 navigation  */}
  
        <nav className='w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl mt-0'>
        <Link  onClick={() => naviagate(-1)}
              class="hover:text-[#6556CD] ri-arrow-left-line mr-3 ml-5"
        ></Link>
        
        <a target='_blank' href={info.detail.homepage}>
        <i className="ri-external-link-fill"></i> Home Page
        </a>
  
        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
         <i className="ri-earth-fill"></i> Wiki
        </a>
       
        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a>
   
        </nav>
  
        {/* part 2 Poster and Details */}
        <div className='w-full flex '>
        <img 
        className='h-[50vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover'
         src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path
          }`}
           alt="" />
  
  
           <div className='content ml-[5%] '>
            <h1  className='text-4xl font-black text-white '>
              {info.detail.name ||
               info.detail.title || 
               info.detail.original_name ||
                info.detail.original.title}
  
                <small className='text-2xl font-bold text-zinc-200 '>
                 ({info.detail.first_air_date.split("-")[0]})
                </small>
                </h1>
  
        <div 
        className='flex text-white items-center gap-x-1 mt-3 mb-5'>
        <span className='right-[-10%] bottom-[30%] mt-2 rounded-full text-white w-[8vh] h-[8vh] flex justify-center items-center bg-yellow-600  text-xl font-semibold'>
        {(info.detail.vote_average*10).toFixed()} <sup>%</sup> 
        </span>
        
  
       <div className='flex w-[100%] items-center justify-center gap-x-4'>
       <h1 className='font-semibold mr-9 text-xl leading-3'>User Score</h1>
       <h1 className=''> {info.detail.first_air_date}</h1>
       <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
       <h1>{info.detail.runtime} min</h1>
       </div>
       
  
        </div>
  
        <h1 className='text-2xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
  
        <h1 className='text-2xl font-semibold italic text-white mt-5 '>Overview</h1>
        <p className='text-zinc-200'>{info.detail.overview}</p>
  
        <h1 className='text-2xl font-semibold italic text-white mt-5 '>Translation</h1>
        <p className='mb-10 text-zinc-200'>{info.translations.join(', ')}</p>
  
        <Link className=' py-3 bg-[#6556CD] rounded-lg px-10' to={`${pathname}/trailer`}>Play Trailer
        </Link>
            
           </div>
          
          </div>
  
     {/* Part 3 Platforms  */}
          <div className='w-[80%] flex flex-col ' >
               
   {info.watchproviders && info.watchproviders.buy  && (
            <div className='flex gap-x-10 items-center text-white '>
          <h1>Available on Buy</h1>
          {info.watchproviders.buy.map((w,i)=>(
            <img
            key={i}
            title={w.provider_name}
            className='w-[5vh] h-[5vh] object-cover reounded-md '
            src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
            />
          ))}
          </div> 
          )}
        </div>
  
  
        {/* Part 4 Recommendation  */}
        <hr className='mt-2 mb-4 border-none h-[2px] bg-zinc-500'/>
        <h1 className='text-3xl mt-7 mb-5 font-bold text-white '>Recommendations & Similar Items Stuff</h1>
        <HorizontalCards data = {info.recommendations.length > 0 ? info.recommendations : info.similar}/>
  
          <Outlet/>
      
  
  
  
      </div>
    ) : <Loading/>
}

export default TvDetails
