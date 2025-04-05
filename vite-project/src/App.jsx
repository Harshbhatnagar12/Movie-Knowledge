import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie' 
import Tvshows from './components/Tvshows'
import People from './components/People'
import Moviedetails from './components/moviedetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'



function App() {
 

  return (
  <div className='bg-[#1F1E24] w-screen h-screen flex  '>
    <Routes>
      <Route path='/' element={<Home />} />     
      <Route path='/trending' element={<Trending />} />     
      <Route path='/popular' element={<Popular />} />     
      <Route path='/movie' element={<Movie />}/> 
      <Route path='/movie/details/:id' element={<Moviedetails/>} />     
      <Route path='/tv' element={<Tvshows />}/>
      <Route path='tv/details/:id' element={<TvDetails/>}/>  
      <Route path='/person' element={<People />}/> 
      <Route path='/person/details/:id' element={<PersonDetails/>} />
   
    </Routes>
  
  </div>
  )
}

export default App
