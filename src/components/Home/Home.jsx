import React,{ useEffect } from 'react'
import Movielist from '../MovieList/MovieList'
import './home.scss'

import {  useDispatch } from 'react-redux'
import { fetchMovies, fetchSeries } from '../../Redux/movieSlice/movieSlice'


function Home() {
    const dispatch = useDispatch();

    const textMovie = 'Marvel'
    const textSeries = 'Flash'
    
    useEffect (() => {
        dispatch(fetchMovies(textMovie))
        dispatch(fetchSeries(textSeries))
    },[dispatch])

    return (
        <div className='home-app'>
            <Movielist className='movielist' />
        </div>
    )
}

export default Home