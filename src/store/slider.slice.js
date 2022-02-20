import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../services";

const initialState = {
    sliderItem: [],
    status:null,
    error:null
}

export const getSliderItem = createAsyncThunk(
    'slider/getSliderItem',
    async ({language}, {rejectWithValue}) => {
        try {
            const sliderItems = await moviesService.getTopRated({language});
            return sliderItems.results;
        }catch (e){
            return rejectWithValue(e.message)
        }
    }
)

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
    extraReducers: {
        [getSliderItem.pending]:(state)=>{
            state.status='pending'
            state.error=null
        },
        [getSliderItem.fulfilled]:(state,action)=>{
            state.sliderItem=action.payload.splice(0,5)
            state.status='done'
        },
        [getSliderItem.rejected]:(state,action)=>{},
    }
});

const sliderReducer = sliderSlice.reducer

export default sliderReducer