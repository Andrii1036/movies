import React, {useEffect} from 'react';
import {imageBaseUrl} from "../../config/urls";
import {Link} from "react-router-dom";
import {transliterate} from "transliteration";

import './MovieListCardColumnStyle.css'

const MovieListCardColumnStyle = ({data}) => {

    const {title, id, poster_path}=data;
    const filmName = title.split(' ').join('')

    useEffect(() => {
        const imageBlock = document.getElementById(`movieListCardColumnStyle_image${id}`)
        imageBlock.style.backgroundImage = `url("${imageBaseUrl}/w185/${poster_path}")`

    }, []);

    return (
        <Link to={`/movie/${transliterate(filmName)}-${id}`} state={id}>
            <div className={'movieListCardColumnStyle'}>
                <h2>{title}</h2>
                <div id={`movieListCardColumnStyle_image${id}`} className={'movieListCardColumnStyle_image'}>
                </div>
            </div>

        </Link>

    );
};

export default MovieListCardColumnStyle;