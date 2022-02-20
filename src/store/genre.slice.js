import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../services";

const initialState = {
    genreList: [],
    status: null,
    error: null
}

export const getGenreList = createAsyncThunk(
    'genre/getGenreList',
    async ({language}, {rejectWithValue}) => {
        try {
            const genreList = await genreService.getAll({language});
            return genreList
        } catch (e) {

        }
    }
)

export const genreListSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {},
    extraReducers: {
        [getGenreList.pending]:(state)=>{
            state.status='pending'
            state.error=null
        },
        [getGenreList.fulfilled]:(state,action)=>{
            state.genreList=action.payload
            state.status='done'
        }
    }

})

const genreListReducer = genreListSlice.reducer;

export default genreListReducer