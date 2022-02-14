import React from 'react';
import {Link} from "react-router-dom";
import {transliterate} from "transliteration";

import './GenresItem.css'

const GenresItem = ({genre}) => {

    return (
        <div className={'genresItem'}>
            <Link to={`/${transliterate(genre.name)}-${genre.id}`} state={genre.id}>
                <p>
                    {genre.name}
                </p>
            </Link>
        </div>
    );
};

export {GenresItem};