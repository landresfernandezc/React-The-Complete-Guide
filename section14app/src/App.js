import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null)
  async function fetchMoviesHandler() {
    setIsLoading(true)
    setError(null)
    try{
      const response = await fetch('https://swapi.dev/api/film/');
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      
      const transformMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformMovies)
    }catch(error){
      setError(error.message)
    }
    setIsLoading(false);
  }
  //Multiple ternary expression
  //{!isLoading && movies.length >0 ? <MoviesList movies={movies} /> : !isLoading && movies.length === 0 ?<p>Found no movies</p> : <p>Loading.....</p> } 
  let content='';
  if(!isLoading && movies.length > 0){
    content=<MoviesList movies={movies} />
  }
  if(!isLoading && movies.length === 0 && !error){
    content=<p>Found no movies</p> 
  }
  if(isLoading){
    content=<p>Loading.....</p>;
  }
  if(!isLoading && error ){
    content=<p>{error}</p>
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} /> } 
       {isLoading && <p>Loading.....</p>}
       {!isLoading && movies.length === 0 && !error && <p>Found no movies</p> }
       {!isLoading && error && <p>{error}</p>} */
       content}
      </section>
    </React.Fragment>
  );
}

export default App;
