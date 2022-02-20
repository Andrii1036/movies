import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import './MovieListPage.css'

import {getMovie} from "../../store";
import {MoviesList} from "../../components";
import {pageFromParams, restartPage} from "../../store/local.slice";

const MoviesListPage = () => {

    const {movie} = useSelector(state => state.movieList)
    const {filmByYear}=useSelector(state => state.localChange)

    const dispatch = useDispatch()

    const [searchParams] = useSearchParams({})
    let page = searchParams.get('page')

    useEffect(() => {
        if (page === null) {
            dispatch(restartPage())
            page=1
        }

        dispatch(getMovie({pageNumber:page,primary_release_year:filmByYear}))
    }, [page,filmByYear]);

    useEffect(()=>{
        if(page){
            dispatch(pageFromParams(+page))
        }
    },[])

    return (
        <div className={'movieList_wrapper'}>
            <MoviesList movie={movie}/>
        </div>
    );
};

export {MoviesListPage};