import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pageNumber: 1,
    renderStyle: 'row',
    filmByYear: null,
    language:'en',
    sort_by:null
}

export const localChangeSlice = createSlice({
    name: 'localChange',
    initialState,
    reducers: {
        nextPage: (state) => {
            state.pageNumber += 1
        },
        prevPage: (state) => {
            state.pageNumber -= 1
        },
        restartPage: (state) => {
            state.pageNumber = 1
        },
        pageFromParams: (state, action) => {
            state.pageNumber = action.payload
        },
        rowStyle: (state) => {
            state.renderStyle = 'row'
        },
        columnStyle: (state) => {
            state.renderStyle = 'column'
        },
        changeYear:(state,action)=>{
            state.filmByYear=action.payload
        },
        changeLanguage :(state,action)=>{
            state.language=action.payload
        },
        sort:(state,action)=>{
            state.sort_by=action.payload
        }

    }
})

export const {
    nextPage, prevPage, restartPage, pageFromParams, rowStyle,columnStyle,changeYear,changeLanguage,sort
} = localChangeSlice.actions

const localChangeReducer = localChangeSlice.reducer

export default localChangeReducer