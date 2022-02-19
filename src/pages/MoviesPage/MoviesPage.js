import React from 'react';
import {Outlet} from "react-router-dom";

import './MoviesPage.css'

import {AsideGenres, Filter, NavigationButton, Slider} from "../../components";

const MoviesPage = () => {
    return (
        <>
            <Slider/>
            <div className={'homePage_content'}>
                <AsideGenres/>
                <div className={'homePage_movies'}>
                    <Filter/>
                    <NavigationButton/>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export {MoviesPage};