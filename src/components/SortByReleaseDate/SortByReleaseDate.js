import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sort} from "../../store/local.slice";

const SortByReleaseDate = () => {

    const {sort_by} = useSelector(state => state.localChange)
    const dispatch = useDispatch()

    const sortByDate = () => {
        if (sort_by === 'primary_release_date.asc') {
            dispatch(sort('primary_release_date.desc'))
        }else if(sort_by === 'primary_release_date.desc'){
            dispatch(sort('primary_release_date.asc'))
        }else{
            dispatch(sort('primary_release_date.desc'))
        }
    }

    return (
        <div onClick={() => sortByDate()}>
            за датою
        </div>
    );
};

export {SortByReleaseDate};