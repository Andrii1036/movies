import React from 'react';
import {useForm} from "react-hook-form";

import './Search.css'

import {moviesService} from "../../services";

const Search = () => {

    const {register, handleSubmit} = useForm()

    const search = ({search}) => {
        moviesService.getByName(search, 'uk')
            .then(value => console.log(value))
    }
    const delPlaceholder = () => {
        const input = document.getElementById('search')
        input.placeholder=''
    }

    return (
        <form onSubmit={handleSubmit(search)} className={'search'}>
            <input id={'search'} type="search" {...register('search')} placeholder={'Пошук фільму...'}
                   onFocus={delPlaceholder}/>
            <button>OK</button>
        </form>
    );
};

export {Search};