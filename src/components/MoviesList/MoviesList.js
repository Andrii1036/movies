import React from 'react';
import {useSelector} from "react-redux";

import './MoviesList.css';

import {MovieListCard,MovieListCardColumnStyle} from "../index";


const MoviesList = ({movie}) => {

    const {renderStyle} = useSelector(state => state.localChange)

    return (
        <>
            {renderStyle === 'row' &&
                <div className={'movieList'}>
                    {movie.map(item => <MovieListCard key={item.id} data={item}/>)}
                </div>}
            {renderStyle==='column' &&
                <div className={'movieList_column'}>
                    {movie.map(item => <MovieListCardColumnStyle key={item.id} data={item}/>)}
                </div>
            }
        </>

    );
};

export {MoviesList};