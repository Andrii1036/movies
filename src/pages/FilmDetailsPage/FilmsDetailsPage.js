import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useSearchParams} from "react-router-dom";

import './FilmDetailPage.css'

import {getById, getByYear} from "../../store";
import {imageBaseUrl} from "../../config/urls";
import {GenresItemName} from "../../components";

const FilmsDetailsPage = () => {

    const {singleMovie} = useSelector(state => state.movieList)
    const {backdrop_path, poster_path, title, release_date, genres, overview, credits} = singleMovie
    const dispatch = useDispatch()

    const [genresId, setGenresId] = useState([])
    const [director,setDirector]=useState({})
    const [year,setYear]=useState()
    // const year =

    const {state: id} = useLocation()

    const [searchParams,setSearchParams]=useSearchParams()

    const getGenresId = () => {
        let arr = []
        genres.map(item => arr.push(item.id))
        setGenresId(arr)
    }

    const addBackground = () => {
        const container = document.getElementById('filmMainInfo')
        const imageContainer = document.getElementById('filmMainInfo_image')
        container.style.backgroundImage = `url("${imageBaseUrl}/w1280/${backdrop_path}")`
        imageContainer.style.backgroundImage = `url("${imageBaseUrl}/w342/${poster_path}")`
    }

    useEffect(() => {
        dispatch(getById({id, append_to_response: 'videos,reviews,images,credits'}))
    }, [])

    useEffect(()=>{
        if(release_date){
            setYear(release_date.split('-')[0])
        }
    },[release_date])

    useEffect(() => {
        if (backdrop_path) {
            addBackground()
        }
    }, [backdrop_path])

    useEffect(() => {
        if (genres) {
            getGenresId()
        }
    }, [genres])

    useEffect(()=>{
        if(credits){
            setDirector(credits.crew.find(item=>item.job==='Director'))
        }
    },[credits])

    return (
        <div className={'filmDetailPage'}>
            {console.log(singleMovie)}
            <div id={'filmMainInfo'} className={'filmMainInfo'}>
                <div className={'filmMainInfo_fog'}>
                    <div id={'filmMainInfo_image'} className={'filmMainInfo_image'}></div>
                    <div id={'filmInfo'} className={'filmInfo'}>
                        {release_date && <h2>{title}
                            <Link to={`/?year=${year}`} >
                                <span>({release_date.split('-')[0]})</span>
                            </Link>
                        </h2>}
                        <GenresItemName genre_ids={genresId}/>
                        {credits &&
                            <p>
                                Режисер:{director.name}
                            </p>
                        }
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {FilmsDetailsPage};