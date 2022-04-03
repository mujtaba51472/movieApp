import './App.css';
import axios from 'axios'
import React , {useEffect, useState} from 'react'
import searchIcon from './search.svg'
import MovieCard from './MovieCard';
// key a9193a82
const API_URL= 'http://www.omdbapi.com?apikey=a9193a82';
const movie1=
  {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

function App() {
  const [movie, setmovie] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  console.log('first', movie)


  const searchMovies =async (title)=>{
    const res = await  axios(`${API_URL}&s=${title}`)
   const data = await res.data.Search;
   setmovie(data)
 
  }
  useEffect(()=>{
    searchMovies("King")

  },[])
  
  return (
    <div className="app">
    
   <h1>MovieLand</h1>
   <div className='search'>
     <input type="text" placeholder='search for a movie' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
     <img src={searchIcon} alt="search"   onClick={()=>{searchMovies(searchTerm)}}/>
   </div>
   <div className="container">
     {
       movie.map(movie=> ( <MovieCard movie1={movie} />))
     }
    
   
   </div>
  
    </div>
  );
}

export default App;
