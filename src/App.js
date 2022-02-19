import React, {useEffect} from 'react';
import {Routes,Route} from "react-router-dom";

import './App.css'

import {Header} from './components';
import {FilmsDetailsPage, GenresMoviePage, MoviesListPage, MoviesPage, TVshowPage} from "./pages";
import {useDispatch} from "react-redux";
import {getGenreList} from "./store";

const App = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getGenreList())
    },[])

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