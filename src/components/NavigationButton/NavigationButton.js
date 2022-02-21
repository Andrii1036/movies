import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {nextPage, prevPage} from "../../store/local.slice";
import {useSearchParams} from "react-router-dom";

const NavigationButton = () => {

    const {totalPages} = useSelector(state => state.movieList)
    const {pageNumber} = useSelector(state => state.localChange)

    const dispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams({})
    const currentParams = Object.fromEntries([...searchParams]);

    useEffect(() => {
            setSearchParams({...currentParams, page: pageNumber})
    }, [pageNumber])

    return (
        <div>
            <button onClick={() => {
                if (pageNumber > 1) {
                    dispatch(prevPage())
                }
            }}>
                назад
            </button>
            <button onClick={() => {
                if (pageNumber < totalPages) {
                    dispatch(nextPage())
                }
            }}>
                вперед
            </button>
        </div>
    );
};

export {NavigationButton};