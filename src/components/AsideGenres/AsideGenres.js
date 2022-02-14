import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './AsideGenres.css'

import {GenresItem} from "../GenresItem/GenresItem";
import {getGenreList} from "../../store";


const AsideGenres = () => {

    const{status,error,genreList}=useSelector(state => state.genreList)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getGenreList())
    },[])

    return (
        <aside className={'asideGenres'}>
            <h3>Жанри</h3>
            <nav>
                {genreList.map(genre=><GenresItem key={genre.id} genre={genre}/>)}
            </nav>
        </aside>
    );
};

export {AsideGenres};