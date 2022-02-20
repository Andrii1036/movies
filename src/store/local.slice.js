import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pageNumber: 1,
    renderStyle: 'row',
    filmByYear: null,
    language:'en'
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
            console.log(action.payload);
        },
        changeLanguage :(state,action)=>{
            state.language=action.payload
        }

    }
})

export const {
    nextPage, prevPage, restartPage, pageFromParams, rowStyle,columnStyle,changeYear,changeLanguage
} = localChangeSlice.actions

const localChangeReducer = localChangeSlice.reducer

export default localChangeReducer