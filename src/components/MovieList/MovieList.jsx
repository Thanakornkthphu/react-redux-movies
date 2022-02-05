import React from 'react'
import { useSelector } from 'react-redux'

import MovieCard from '../MovieCard/MovieCard'
import SeriesCard from '../MovieCard/SeriesCard'
import './movielist.scss'
import error from '../../assets/error.png'

function MovieList() {
    const movies = useSelector(state => state.movies.dataMovies)
    const series = useSelector(state => state.movies.dataSeries)

    return (
        <div className='movie-list'>
            <div className="movie-item">
            <h2>Movies</h2>
                <div className="movie-card">
                    {movies.Response === 'True' ? (
                        movies.Search.map((movie) => (
                            <MovieCard data={movie} key={movie.imdbID} />
                        ))
                    ) : movies.Response === 'False' ? ( 
                    <img src={error} alt="#" />
                    ) 
                    : ( <span>Loading...</span> )}
                </div>

                <h2>Series</h2>
                <div className="series-card">
                    {series.Response === 'True' ? (
                        series.Search.map((movie) => (
                            <SeriesCard data={movie} key={movie.imdbID} />
                        ))
                    ) : series.Response === 'False' ? ( 
                        <img src={error} alt="#" />
                    ) 
                    : ( <span>Loading...</span> )}
                </div>

            </div>
        </div>
    )
}

export default MovieList;
