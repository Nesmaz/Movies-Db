import React from 'react';


const MovieCard = ({movie})=>{

    return(

    <div className='Movie'>
        
         <div>
            <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
            alt={movie.Title}>
            </img>
        </div>

        <div className='info'>
            <p>{movie.Year}</p>
            <h3>{movie.Title}</h3>
        </div>

    </div>
    );
}

export default MovieCard;