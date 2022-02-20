import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import './ChangeLanguage.css'

import {changeLanguage} from "../../store/local.slice";

const ChangeLanguage = () => {

    const dispatch = useDispatch()

    const showLanguageItems = () => {
        const languageVariable = document.getElementById('languageVariable')
        languageVariable.classList.toggle('active')
    }

    const activeLanguage=(value)=>{
        dispatch(changeLanguage(value))
        const languageSwitcher = document.getElementById('languageSwitcher')
        languageSwitcher.style.backgroundImage=`url("../../../image/flag-${value}.png")`
        showLanguageItems()
    }

    useEffect(() => {
        const languageSwitcher = document.getElementById('languageSwitcher')
        languageSwitcher.addEventListener('click', showLanguageItems, true)
    }, [])

    return (
        <div id={'languageWrapper'} className={'languageWrapper'}>
            <div id={'languageSwitcher'} className={'languageSwitcher'}>
                <p className={'activeLanguage'}>Змінити мову <span>{'\u2bc6'}</span></p>
            </div>
            <div id={'languageVariable'} className={'languageVariable'}>
                <p onClick={()=>{activeLanguage('en')}} id={'en'}>Англійська</p>
                <p onClick={()=>{activeLanguage('uk')}} id={'uk'}>Українська</p>
                <p onClick={()=>{activeLanguage('ru')}} id={'ru'}>Російська</p>
            </div>
        </div>
    );
};

export {ChangeLanguage};