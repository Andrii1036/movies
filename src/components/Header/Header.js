import React from 'react';
import {Link} from "react-router-dom";

import './Header.css'

import {ChangeLanguage, Search} from "../index";

const showUserMenu = () => {
    const menu = document.getElementById('userMenu')
    menu.classList.toggle('active')
}

const addActiveClass=(e)=>{
    const switchers=Array.from(document.getElementsByClassName('activeSwitch'))
    switchers.forEach(item=>item.classList.remove('activeSwitch'))
    e.target.classList.add('activeSwitch')
}

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header_container'}>
                <Link to={'/'}>
                    <div className={'header_icon'}></div>
                </Link>
                <div className={'header_pageSwitch'}>
                    <Link to={'/'}><p className={'pageSwitch activeSwitch'} onClick={addActiveClass}>Фільми</p></Link>
                    <p>/</p>
                    <Link to={'/TVshow'}><p className={'pageSwitch'} onClick={addActiveClass}>ТВ шоу</p></Link>
                </div>
                <div className={'header_rightSide'}>
                    <ChangeLanguage/>
                    <Search/>
                    <div className={"user"}>
                        <p>mt10-36</p>
                        <div className={'user_Icon'} onClick={showUserMenu}>M</div>
                        <div id={'userMenu'} className={'user_Menu'}>
                            <p>Пункт 1</p>
                            <p>Пункт 2</p>
                            <p>Пункт 3</p>
                            <p>Пункт 4</p>
                            <p>Пункт 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export {Header};