import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { asyncloadperson, removeperson } from '../store/actions/personAction'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './templates/Loading';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';

const PersonDetails = () =>  {
  const {pathname} = useLocation()
   const naviagate = useNavigate();
   const {id} = useParams();
   const {info} =  useSelector((state) => state.person);
   const dispatch = useDispatch();
   const [category, setcategory] = useState("movie");

   useEffect(() => {  
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
     }
   },[id]);


  return info ? 
    <div className=' w-screen bg-[#1F1E24] sm:h-[220vh] h-[380vh]  '>

          {/* part 1 navigation  */}
      
            <nav className='w-full h-[10vh] text-zinc-100 flex items-center text-sm sm:text-2xl mt-3 px-9 '>
            <Link  onClick={() => naviagate(-1)}
                  className="hover:text-[#6556CD] ri-arrow-left-line "
            ></Link>
            </nav>

          {/* {part 2 Left Poster and Details } */}

            <div className='w-full flex px-[10%] flex-col sm:flex-row '>
          <div className='sm:w-[20%] w-full ml-10 sm:ml-0'>
          <img 
      className='h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover'
       src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path
        }`}
         alt="" />
        <hr className='mt-3 mb-4 border-none h-[1px] bg-zinc-500'/>

        {/* Social Media Links  */}

        <div className=' text-2xl text-white flex gap-x-5 '>      
            <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
             <i className="ri-earth-fill"></i> 
            </a>

            <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
             <i className="ri-facebook-circle-fill"></i> 
            </a>

            <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
             <i className="ri-instagram-fill"></i> 
            </a>

            <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
             <i className="ri-twitter-x-fill"></i> 
            </a>

        </div>

        {/* Personal Info  */}

        <h1 className='text-2xl text-zinc-400 my-5 font-semibold'>
          Personal Info
        </h1>

        <h1 className='text-lg text-zinc-400 font-semibold'>
          Known For 
        </h1>

        <h1 className='text-zinc-400 '>
          {info.detail.known_for_department}
        </h1>

        <h1 className='text-lg text-zinc-400 font-semibold mt-3'>
          Gender
        </h1>

        <h1 className='text-zinc-400 '>
        {info.detail.gender ===2 ? "Male" : "Female"}
        </h1>

        <h1 className='text-lg text-zinc-400 font-semibold mt-3'>
          Birthday
        </h1>

        <h1 className='text-zinc-400 '>
        {info.detail.birthday}
        </h1>

        <h1 className='text-lg text-zinc-400 font-semibold mt-3'>
          Death Day
        </h1>

        <h1 className='text-zinc-400 '>
        {info.detail.deathday ? info.detail.deathday : "Still Alive"}
        </h1>

        <h1 className='text-lg text-zinc-400 font-semibold mt-3'>
          Place Of Birth
        </h1>

        <h1 className='text-zinc-400 '>
        {info.detail.place_of_birth}
        </h1>

        <h1 className='text-lg text-zinc-400 font-semibold mt-3'>
            Also Known As
        </h1>

        <h1 className='text-zinc-400 '>
        {info.detail.also_known_as.join(", ")}
        </h1>

          </div>

          {/* Part 3 right Details and Information  */}
          <div className='w-[80%] ml-[5%] '>

          <h1 className='text-6xl text-zinc-400 my-5 font-black'>
             {info.detail.name}
        </h1>

        <h1 className='text-xl text-zinc-400 font-semibold'>
          Biography 
        </h1>
        <p className='text-zinc-400 mt-3'>{info.detail.biography.slice(0, 1390)}</p>

        <h1 className='mt-5 mb-3 text-xl text-zinc-400 font-semibold'>
          Summary
        </h1>

        <HorizontalCards data={info.combindedCredits.cast}/>


        <div className='w-full flex  justify-between'>

        <h1 className='mt-5 text-xl text-zinc-400 font-semibold'>
          Acting
        </h1>
         

         <div className='sm:inline hidden'>
        <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setcategory(e.target.value)}/>
         </div>

        </div>

        <div className='w-full h-[50vh] text-zinc-400 mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5 '>

           {info[category + "Credits"].cast.map((c,i)=>  (
           <li key={i} className='hover: text-white duration-300 cursor-pointer'>
            <Link to={`/${category}/details/${c.id}`} className=''>  
              <span>
                {" "}
                {c.name || c.title || c.original_name || c.original_title}
              </span>
              <span className='ml-5 block'> 
                {c.character &&  `Character Name: ${c.character}` }
               </span>

            </Link>
            Movie Name
          </li>
        ))}

         

        </div>


          </div>

            </div>
      
    </div> : <Loading />
  
}

export default PersonDetails
