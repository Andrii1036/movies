import React from 'react';

import './Filter.css'

import {ChangeYear,RenderStyle} from "../index";

const Filter = () => {
    return (
        <div className={'filter'}>
            Filter
            <ChangeYear/>
            <RenderStyle/>
        </div>
    );
};

export {Filter};