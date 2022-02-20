import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom";

import './FilmDetailPage.css'

import {getById} from "../../store";
import {imageBaseUrl} from "../../config/urls";
import {GenresItemName} from "../../components";
import {changeYear} from "../../store/local.slice";

const FilmsDetailsPage = () => {

    const {singleMovie, singleMovieStatus} = useSelector(state => state.movieList)
    const {backdrop_path, poster_path, title, release_date, genres, overview, credits, original_title,
        runtime,production_countries} = singleMovie
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [data, setData] = useState({
        genresId: [],
        director: {},
        year: ''
    })

    const {state: id} = useLocation()

    const addBackground = () => {
        const container = document.getElementById('filmMainInfo')
        const imageContainer = document.getElementById('filmMainInfo_image')
        container.style.backgroundImage = `url("${imageBaseUrl}/w1280/${backdrop_path}")`
        imageContainer.style.backgroundImage = `url("${imageBaseUrl}/w342/${poster_path}")`
    }

    useEffect(() => {
        dispatch(getById({id, append_to_response: 'videos,reviews,images,credits'}))
    }, [])

    useEffect(() => {
        if (singleMovieStatus === 'done') {
            let directorData = credits.crew.find(item => item.job === 'Director')
            let genresArray = []

            genres.map(item => genresArray.push(item.id))

            setData({
                ...data,
                year: release_date.split('-')[0],
                director: directorData,
                genresId: genresArray,
            })
            addBackground()
        }
    }, [singleMovieStatus])


    return (
        <div className={'filmDetailPage'}>
            {console.log(singleMovie)}
            <div id={'filmMainInfo'} className={'filmMainInfo'}>
                <div className={'filmMainInfo_fog'}>
                    <div id={'filmMainInfo_image'} className={'filmMainInfo_image'}>
                        <p onClick={()=>{navigate(-1)}}>{'\u276e'} {'\u00a0'}На попередню сторінку</p>
                    </div>
                    <div id={'filmInfo'} className={'filmInfo'}>
                        <h2>{title}
                            <Link to={`/`} onClick={()=>{
                                dispatch(changeYear(data.year))
                            }}>
                                <span>({data.year})</span>
                            </Link>
                        </h2>
                        <GenresItemName genre_ids={data.genresId}/>
                        <p>
                            Оригінальна назва:<span> {'\u0020'}"{original_title}"</span>
                        </p>
                        <p>
                            Країна:{production_countries && production_countries.map(item=><span key={item.name}>{'\u0020'}{item.name},</span>)}
                        </p>
                        <p>
                            Режисер:<span>{'\u0020'}{data.director.name}</span>
                        </p>
                        <p>
                            Тривалість: <span>{runtime} хв.</span>
                        </p>
                        <p>{'\u00a0\u00a0\u00a0\u00a0\u00a0'}{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {FilmsDetailsPage};