import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './App.css'

import {Header} from './components';
import {FilmsDetailsPage, GenresMoviePage, MoviesListPage, MoviesPage, TVshowPage} from "./pages";
import {getGenreList} from "./store";

const App = () => {

    const {language} = useSelector(state => state.localChange)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenreList({language}))
    }, [language])

    return (
        <div className={'mainWrapper'}>
            <Header/>
            <div className={'contentWrapper'}>
                <Routes>
                    <Route path={'/'} element={<MoviesPage/>}>
                        <Route path={'/'} element={<MoviesListPage/>}/>
                        <Route path={':genre'} element={<GenresMoviePage/>}/>
                    </Route>
                    <Route path={'/TVshow'} element={<TVshowPage/>}/>
                    <Route path={'/movie/:filmName'} element={<FilmsDetailsPage/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;