import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pageNumber: 1,
    renderStyle:'row'
}

export const localChangeSlice = createSlice({
    name: 'localChange',
    initialState,
    reducers: {
        nextPage: (state) => {
            state.pageNumber+=1
        },
        prevPage: (state) => {
        state.pageNumber-=1
        },
        restartPage:(state)=>{
            state.pageNumber=1
        },
        pageFromParams:(state,action)=>{
            state.pageNumber=action.payload
        },
        rowStyle:(state)=>{
            state.renderStyle='row'
        },
        columnStyle:(state)=>{
            state.renderStyle='column'
        }

    }
})

export const {nextPage,prevPage,restartPage,pageFromParams,rowStyle,columnStyle}=localChangeSlice.actions

const localChangeReducer= localChangeSlice.reducer

export default localChangeReducer