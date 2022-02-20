import React, {useEffect} from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

import {getMovieByGenre} from "../../store";
import {MoviesList} from "../../components";
import {pageFromParams, restartPage} from "../../store/local.slice";


const GenresMoviePage = () => {

    const {movie} = useSelector(state => state.movieList)
    const {filmByYear} = useSelector(state => state.localChange)
    const{language}=useSelector(state => state.localChange)
    const dispatch = useDispatch()

    let [searchParams, setSearchParams] = useSearchParams()

    let page = searchParams.get('page')

    let {genre} = useParams()
    let {state} = useLocation()
    let genreId = null

    if (state) {
        genreId = state
    } else {
        genreId = genre.split('-')
        genreId = genreId[genreId.length - 1]
    }

    useEffect(() => {
        if (page === null) {
            dispatch(restartPage())
        }
        dispatch(getMovieByGenre({genre: genreId, pageNumber: page, primary_release_year: filmByYear,language}))
    }, [genre, page, filmByYear,language]);

    useEffect(() => {
        if (page) {
            dispatch(pageFromParams(+page))
        }
    }, [])

    return (
        <div>
            <MoviesList movie={movie}/>
        </div>
    );
};

export {GenresMoviePage};