import React from 'react';
import {Outlet} from "react-router-dom";

import './MoviesPage.css'

import {AsideGenres, Slider} from "../../components";

const MoviesPage = () => {
    return (
        <>
            <Slider/>
            <div className={'homePage_content'}>
                <AsideGenres/>
                <Outlet/>
            </div>
        </>
    );
};

export {MoviesPage};