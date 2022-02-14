import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {transliterate} from "transliteration";

import './SliderItem.css'

import {imageBaseUrl} from "../../config/urls";

const SliderItem = ({item}) => {

    const filmName = item.title.split(' ').join('')

    useEffect(() => {
        const sliderItem = document.getElementById(`sliderItem${item.id}`)
        sliderItem.style.backgroundImage = `url("${imageBaseUrl}/w1280/${item.backdrop_path}")`
    }, [])

    return (
        <Link to={`/movie/${transliterate(filmName)}-${item.id}`} state={item.id} id={`sliderItem${item.id}`} className={'sliderItem'}>
            <div>
                <h2>{item.title}</h2>
                <p>{item.overview}</p>
            </div>
        </Link>

    );
};

export {SliderItem};