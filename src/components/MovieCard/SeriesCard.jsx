import React from 'react'
import { Link } from 'react-router-dom'

import './moviecard.scss'

function SeriesCard({ data }) {

    return (
        <div>
            <div className='container-card'>
                <div className="card">
                    <Link to={`/movie/${data.imdbID}`} className='link'>
                        <img src={data.Poster} alt={data.Title} />
                        <div className="movie-info">
                            <div className="title">
                                <p>{data.Title}</p>
                            </div>
                            <div className="year">
                                <p>Year {data.Year}</p>
                            </div>
                        </div>
                            <button className='button'>
                                <div>
                                    <span>View Details</span>
                                </div>
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SeriesCard
