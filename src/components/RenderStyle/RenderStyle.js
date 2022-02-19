import React from 'react';

import './RenderStyle.css'
import {useDispatch} from "react-redux";
import {columnStyle, rowStyle} from "../../store/local.slice";

const RenderStyle = () => {

    const dispatch = useDispatch()

    return (
        <div className={'renderStyle'}>
            <div className={'renderStyle_row'}
                 onClick={() => {
                     dispatch(rowStyle())
                 }}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className={'renderStyle_column'}
                 onClick={() => {
                     dispatch(columnStyle())
                 }}>
                <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            </div>
        </div>
    );
};

export {RenderStyle};