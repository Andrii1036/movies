import React from 'react';

import './MoviesList.css';

import {MovieListCard} from "../MovieLictCard/MovieListCard";
import {useSelector} from "react-redux";
import MovieListCardColumnStyle from "../MovieListCardColumnStyle/MovieListCardColumnStyle";

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