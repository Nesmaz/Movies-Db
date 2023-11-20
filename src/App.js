import './App.css';
import { useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import { FaSearch } from 'react-icons/fa';

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=528ebacd"

function App() {

  
// const movie1 = {
//   "Title": "The Dark Knight",
//   "Year": "2008",
//   "imdbID": "tt0468569",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
// };

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
      const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data);
      }

      useEffect(() =>{
        searchMovies('The Dark')
      }, [])

  return (
    <div className="App">
      <h1>Movies Land</h1>
      <div className='search'>
        <input
          placeholder='Search For a movie'
          value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}>
        </input>
        <FaSearch
        onClick={() => {searchMovies(searchTerm)}}
        />
      </div>
      {
        movies?.length > 0
        ? (<div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) :
        (
            <div className='empty'>
              <h3>No movies found</h3>
            </div>
        )
      }
      </div>
  );
}

export default App;
