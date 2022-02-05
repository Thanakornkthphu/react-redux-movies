import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { APIKey } from './../../Api/MovieApiKey'


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (search) => {
        const response = await axios.get(`https://www.omdbapi.com?apikey=${APIKey}&s=${search}&type=movie`)
        return response.data
    }
  );

export const fetchSeries = createAsyncThunk(
    'movies/fetchSeries',
    async (search) => {
        const response = await axios.get(`https://www.omdbapi.com?apikey=${APIKey}&s=${search}&type=series`)
        return response.data
    }
  );

export const fetchMoviesAndSeriesDetail = createAsyncThunk(
    'movies/fetchMoviesAndSeriesDetail',
    async (imdbID) => {
        const response = await axios.get(`https://www.omdbapi.com?apikey=${APIKey}&i=${imdbID}&plot=full`)
        return response.data
    }
  );  

const initialState = {
    dataMovies: [],
    dataSeries: [],
    dataMoviesAndSeriesDetail: [],
}

const movieSlice = createSlice({
    name : 'movies',
    initialState,
    reducers: {
        removeDataMoviesAndSeriesDetail: (state) => {
            state.dataMoviesAndSeriesDetail = {}
        }
    },
    extraReducers: {
        [fetchMovies.pending]: () => {
            console.log('pending')
        },
        [fetchMovies.fulfilled]: (state, action) => {
            console.log('sucsessfully', action.payload)
            return {...state, dataMovies: action.payload}
        },
        [fetchMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchSeries.fulfilled]: (state, action) => {
            console.log('sucsessfully', action.payload)
            return {...state, dataSeries: action.payload}
        },
        [fetchMoviesAndSeriesDetail.fulfilled]: (state, action) => {
            console.log('sucsessfully', action.payload)
            return {...state, dataMoviesAndSeriesDetail: action.payload}
        },
    }
})

export const { removeDataMoviesAndSeriesDetail } = movieSlice.actions;
export default movieSlice.reducer;