import {configureStore} from "@reduxjs/toolkit";

import sliderReducer from "./slider.slice";
import genreListReducer from "./genre.slice";
import movieReducer from "./movie.slice";
import localChangeReducer from "./local.slice";

const store= configureStore({
    reducer:{
        slider:sliderReducer,
        genreList:genreListReducer,
        movieList:movieReducer,
        localChange:localChangeReducer
    }
});

export default store;