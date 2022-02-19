import React from 'react';
import {useSelector} from "react-redux";

import {MoviesList, NavigationButton} from "../../components";

const FilmByYearPage = () => {

    const{movie}=useSelector(state => state.movieList)


    return (
        <div>
            <NavigationButton/>
            <MoviesList movie={movie}/>
        </div>
    );
};

export {FilmByYearPage};