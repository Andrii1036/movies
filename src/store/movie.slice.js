import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services";

const initialState = {
    movie: [],
    status: null,
    error: null,
    totalPages:null,
    singleMovie:{},
    singleMovieStatus:null
}

export const getMovie = createAsyncThunk(
    'movie/getMovie',
    async ({pageNumber,primary_release_year}, {rejectWithValue}) => {
        try {
            const movieList = await moviesService.getAll({pageNumber,primary_release_year})
            return movieList
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieByGenre = createAsyncThunk(
    'movie/getMovieByGenre',
    async ({genre,pageNumber,primary_release_year}, {rejectWithValue}) => {
        try {
            const movieListByGenre = await moviesService.getAll({genre,pageNumber,primary_release_year})
            return movieListByGenre
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);
export const getById=createAsyncThunk(
    'movie/getById',
    async({id,append_to_response},{rejectWithValue})=>{
        try {
            const movieById=await moviesService.getById({id,append_to_response})
            return movieById
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getByYear=createAsyncThunk(
    'movie/getByYear',
    async ({primary_release_year},{rejectWithValue})=>{
            try {
                const moviesByYear=await moviesService.getAll({primary_release_year})
                return moviesByYear
            }catch (e) {
                return rejectWithValue(e.message)
            }
    }
)

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
            state.movie = action.payload.results
            state.totalPages=action.payload.total_pages
        },
        [getMovieByGenre.fulfilled]:(state,action)=>{
            state.status='done'
            state.error=null
            state.movie=action.payload.results
            state.totalPages=action.payload.total_pages
        },
        [getById.pending]: (state) => {
            state.singleMovieStatus = 'pending'
            state.error = 'null'
        },
        [getById.fulfilled]:(state,action)=>{
            state.singleMovieStatus='done'
            state.error=null
            state.singleMovie=action.payload
        },
        [getByYear.fulfilled]:(state,action)=>{
            state.status = 'done'
            state.error = null
            state.movie = action.payload.results
            state.totalPages=action.payload.total_pages
        }
    }
});

const movieReducer = movieSlice.reducer

export default movieReducer