import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {transliterate} from "transliteration";
import {useSelector} from "react-redux";

import './GenreItemsName.css'

const GenresItemName = ({genre_ids}) => {

    const {genreList} = useSelector(state => state.genreList);

    let genres = []

    for (let id of genre_ids) {
        let res = genreList.find(item => item.id === id)
        genres.push(res)
    }

    return (
        <>
            {genreList.length>0&&
                <div className={'itemsName'}>
                    <strong>Жанри:</strong>{genres.map(item => <Link
                    to={`/${transliterate(item.name)}-${item.id}`}
                    state={item.id}
                    key={item.id}><span>{item.name},</span></Link>)}
                </div>
            }
        </>
    );
};

export {GenresItemName};