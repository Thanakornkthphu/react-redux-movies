import React,{ useEffect } from 'react'
import { fetchMoviesAndSeriesDetail } from '../../Redux/movieSlice/movieSlice'
import { removeDataMoviesAndSeriesDetail } from '../../Redux/movieSlice/movieSlice'
import  { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './moviedetail.scss'

function MovieDetail() {
    const params = useParams();
    const data = useSelector(state => state.movies.dataMoviesAndSeriesDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesAndSeriesDetail(params.imdbID));
        return () => {
            dispatch(removeDataMoviesAndSeriesDetail());
        }
    },[dispatch, params.imdbID])

    return (
        <div>
            <div className="Detail-container">
                {Object.keys(data).length > 0 ? (
                    <div className="section">
                        <div className="poster">
                            <img src={data.Poster} alt={data.Titile} />
                        </div>

                        <div className="info">
                            <h4 className='info__type'>{data.Type}</h4>
                            <h1 className='info__title'>{data.Title}</h1>
                            <span className='info__rating'>  
                                {data.imdbRating < 0 ? (
                                    <span className='red'><i className="fas fa-star"/> IMDB Rating : {data.imdbRating} </span>
                                ) : (
                                    <span className='green'><i className="fas fa-star"/> IMDB Rating  : {data.imdbRating} </span>
                                )}
                            </span>
                            <span className='info__vote'><i className="fas fa-thumbs-up"/> IMDB Vote  : {data.imdbVotes} </span>
                            <span className='info__year'><i className="fas fa-calendar-week"/> Year : {data.Year} </span>
                            <span className='info__runtime'> <i className="fas fa-clock"/> : {data.Runtime}.</span>
                            <p className='info__plot'>{data.Plot}</p>

                            <div className="info__bottom">
                                <div>
                                    <div className="title">
                                        <span>Director</span>
                                    </div>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <div className="title">
                                        <span>Genre</span>
                                    </div>
                                    <span>{data.Genre}</span>
                                </div>
                                <div>
                                    <div className="title">
                                        <span>Language</span>
                                    </div>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <div className="title">
                                        <span>Awards</span>
                                    </div>
                                    <span>{data.Awards}</span>
                                </div>
                            </div>
                        </div>
                </div>
            
                ) : (
                    <h1 className='loading'> Loading...</h1>
                )}
            </div>
        </div>
    )
}

export default MovieDetail

