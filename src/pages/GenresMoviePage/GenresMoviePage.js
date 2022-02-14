import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

import {getMovieByGenre} from "../../store";
import {MoviesList} from "../../components";


const GenresMoviePage = () => {

    const{movie}=useSelector(state => state.movieList)

    const dispatch=useDispatch()
    let {genre}=useParams()
    let {state} = useLocation()
    let genreId=null
    if(state){
        genreId=state
    }else{
        genreId=genre.split('-')
        genreId=genreId[genreId.length-1]
    }

    useEffect(()=>{
        dispatch(getMovieByGenre(genreId))
    },[genre])

    return (
        <div>
            <MoviesList movie={movie}/>
        </div>
    );
};

export {GenresMoviePage};