import React, {useEffect} from 'react';
import {imageBaseUrl} from "../../config/urls";
import {Link} from "react-router-dom";
import {transliterate} from "transliteration";

import './MovieListCardColumnStyle.css'
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieListCardColumnStyle = ({data}) => {

    const {title, id, poster_path,vote_average}=data;
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
                <div className={'stars'}>
                    <StarRatings
                        numberOfStars={10}
                        starDimension={'18px'}
                        starSpacing={'1px'}
                        rating={vote_average}
                        starRatedColor={'gold'}
                        starEmptyColor={'rgb(183, 181, 183)'}
                    />
                </div>
            </div>

        </Link>

    );
};

export {MovieListCardColumnStyle};