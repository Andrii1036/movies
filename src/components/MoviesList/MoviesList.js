import React from 'react';

import './MoviesList.css';

import {MovieListCard} from "../MovieLictCard/MovieListCard";

const MoviesList = ({movie}) => {
    return (
        <div className={'movieList'}>
            {movie.map(item=><MovieListCard key={item.id} data={item}/>)}
        </div>
    );
};

export {MoviesList};