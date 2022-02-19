import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import './MovieListPage.css'

import {getMovie} from "../../store";
import {MoviesList} from "../../components";
import {pageFromParams, restartPage} from "../../store/local.slice";

const MoviesListPage = () => {

    const {movie} = useSelector(state => state.movieList)
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams({})
    let page = searchParams.get('page')
    let year = searchParams.get('year')

    useEffect(() => {
        if (page === null) {
            dispatch(restartPage())
            page=1
        }
        if(year===null){
            year=''
        }
        dispatch(getMovie({pageNumber:page,primary_release_year:year}))
    }, [page,year]);

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