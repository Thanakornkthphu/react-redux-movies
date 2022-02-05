import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies, fetchSeries } from '../../Redux/movieSlice/movieSlice'

import './header.scss'

function Header() {
    const [search, setSearch] = useState('') 
    const dispatch = useDispatch();

    const submitSearch = (e) => {
        e.preventDefault();
        if(search === '') {
            alert('Input some movies or series do you want')
        } else {
            dispatch(fetchMovies(search));
            dispatch(fetchSeries(search));
            setSearch('');
        }
        console.log('Search input :', search);
    }

    return (
        <div className='header'>
            <div className="logo">
                <a href='/' className='Link'>
                    <h1>OMDB API</h1>
                </a>
            </div>

            <form onSubmit={submitSearch}>
                <input type='text' 
                    placeholder='Search' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
                <button type='submit'> Search </button>
            </form>
        </div>
    )
}

export default Header
