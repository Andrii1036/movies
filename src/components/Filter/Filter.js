import React from 'react';

import './Filter.css'

import {ChangeYear, RenderStyle, SortVariable} from "../index";

const Filter = () => {
    return (
        <div className={'filter'}>
            <SortVariable/>
            <ChangeYear/>
            <RenderStyle/>
        </div>
    );
};

export {Filter};