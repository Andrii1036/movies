import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovie} from "../../store";
import {MoviesList} from "../../components";

const MoviesListPage = () => {

    const{movie,status,error}=useSelector(state => state.movieList)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getMovie())
    },[])

    return (
        <>
            <MoviesList movie={movie}/>
        </>
    );
};

export {MoviesListPage};