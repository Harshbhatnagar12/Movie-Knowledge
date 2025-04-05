import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './templates/Loading';

const Moviedetails = () => {
   const naviagate = useNavigate();
   const {id} = useParams();
   const {info} =  useSelector((state) => state.movie);
   const dispatch = useDispatch();

   useEffect(() => {  
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
     }
   },[]);

  return info ?  (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      }} 
  className='w-screen h-screen px-[10%]'>

    {/* part 1 navigation  */}

      <nav className='w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl'>
      <Link  onClick={() => naviagate(-1)}
            class="hover:text-[#6556CD] ri-arrow-left-line mr-3 ml-5"
      ></Link>
      
      <a target='_blank' href={info.detail.homepage}>
      <i class="ri-external-link-fill"></i>
      </a>

      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
       <i class="ri-earth-fill"></i>
      </a>
     
      <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a>
 
      </nav>

      {/* part 2 Poster and Details */}
      <div>
        
      </div>
   
    </div>
  ) : <Loading/>
};

export default Moviedetails
