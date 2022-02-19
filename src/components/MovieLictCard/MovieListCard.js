import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {transliterate} from "transliteration";

import './MovieListCard.css'

import {imageBaseUrl} from "../../config/urls";
import {GenresItemName} from "../GenresItemName/GenresItemName";

const MovieListCard = ({data}) => {
    // console.log(data);
    const {title, id, poster_path, overview, release_date, genre_ids} = data;
    const filmName = title.split(' ').join('')
    let year ='-'
    if(release_date){
        year=release_date.split('-')[0]
    }
    useEffect(() => {
        const imageBlock = document.getElementById(`movieListCard_image${id}`)
        imageBlock.style.backgroundImage = `url("${imageBaseUrl}/w185/${poster_path}")`

    }, []);

    return (
        <div className={'movieListCard'}>
            <Link to={`/movie/${transliterate(filmName)}-${id}`} state={id}>
                <div className={'movieListCard_title'}>
                    <h2>{title}</h2>
                </div>
            </Link>
            <div className={'movieListCard_body'}>
                <div className={'movieListCard_image'} id={`movieListCard_image${id}`}></div>
                <div className={'movieListCard_subtitle'}>
                    <p><strong>Рік:{'\u0020'}</strong>{year}</p>
                    <GenresItemName genre_ids={genre_ids}/>
                    <p>{'\u0020'}{overview}</p>
                    <p className={'release_date'}>{release_date}</p>
                </div>
            </div>
        </div>
    );
};

export {MovieListCard};