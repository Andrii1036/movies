import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {transliterate} from "transliteration";
import {useSelector} from "react-redux";

import './MovieListCard.css'

import {imageBaseUrl} from "../../config/urls";

const MovieListCard = ({data}) => {

    const {genreList} = useSelector(state => state.genreList);

    const {title, id, poster_path, overview, release_date, genre_ids} = data;
    const filmName = title.split(' ').join('')
    const year = release_date.split('-')[0]

    let genres = []

    for (let id of genre_ids) {
        let res = genreList.find(item => item.id === id)
        genres.push(res)
    }

    useEffect(() => {
        const imageBlock = document.getElementById(`movieListCard_image${id}`)
        imageBlock.style.backgroundImage = `url("${imageBaseUrl}/w185/${poster_path}")`

    }, []);

    return (
        <div className={'movieListCard'}>
            <Link to={`/movie/${transliterate(filmName)}`}>
                <div className={'movieListCard_title'}>
                    <h2>{title}</h2>
                </div>
            </Link>
            <div className={'movieListCard_body'}>
                <div className={'movieListCard_image'} id={`movieListCard_image${id}`}></div>
                <div className={'movieListCard_subtitle'}>
                    <p><strong>Рік:{'\u0020'}</strong>{year}</p>
                    {genres.length>0&&<div><strong>Жанри:</strong>{genres.map(item => <Link
                        to={`/${transliterate(item.name)}-${item.id}`}
                        state={item.id}
                        key={item.id}><span>{item.name},</span></Link>)}
                    </div>}
                    <p>{'\u0020'}{overview}</p>
                    <p className={'release_date'}>{release_date}</p>
                </div>
            </div>
        </div>
    );
};

export {MovieListCard};