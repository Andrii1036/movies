import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services";

const initialState = {
    movie: [],
    status: null,
    error: null
}

export const getMovie = createAsyncThunk(
    'movie/getMovie',
    async (_, {rejectWithValue}) => {
        try {
            const movieList = await moviesService.getAll()
            return movieList.results
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieByGenre = createAsyncThunk(
    'movie/getMovieByGenre',
    async (genre, {rejectWithValue}) => {
        try {
            const movieListByGenre = await moviesService.getAll('',genre)
            return movieListByGenre.results
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: {
        [getMovie.pending]: (state) => {
            state.status = 'pending'
            state.error = 'null'
        },
        [getMovie.fulfilled]: (state, action) => {
            state.status = 'done'
            state.error = null
            state.movie = action.payload
        },
        [getMovieByGenre.fulfilled]:(state,action)=>{
            state.status='done'
            state.error=null
            state.movie=action.payload
        }
    }
});

const movieReducer = movieSlice.reducer

export default movieReducer