import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeYear, pageFromParams} from "../../store/local.slice";
import {useSearchParams} from "react-router-dom";

const ChangeYear = () => {

    const {filmByYear} = useSelector(state => state.localChange)
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams({})
    const currentParams = Object.fromEntries([...searchParams]);

    useEffect(() => {
        const select = document.getElementById('changeYear')

        for (let i = 2022; i >=1874; i--) {
            let option = document.createElement('option')
            option.value = i
            option.innerText = i
            option.id = `year${i}`
            select.appendChild(option)
        }
    }, [])

    useEffect(() => {
        if(filmByYear){
            const selectedOption=document.getElementById(`year${filmByYear}`)
            selectedOption.selected=true
        }
    }, [])

    return (
        <select id={'changeYear'} onChange={(e) =>{
            setSearchParams({...currentParams, page: 1})
            dispatch(pageFromParams(1))
            if (e.target.value === '0') {
                dispatch(changeYear(null))
            } else {
                dispatch(changeYear(e.target.value))
            }

        }}>
            <option id={'year0'} value={'0'}>Рік</option>
        </select>
    );
};

export {ChangeYear};