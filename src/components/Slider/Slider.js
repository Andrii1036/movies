import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import "./Slider.css"

import {SliderItem} from "../SliderItem/SliderItem";
import {getSliderItem} from "../../store";

const Slider = () => {

    const {status, error, sliderItem} = useSelector(state => state.slider)
    const dispatch = useDispatch();

    let sliderPosition = 0
    let count = sliderItem.length

    const sliderNext = (side) => {
        const width = document.getElementById('slider').offsetWidth
        const sliderContainer = document.getElementById('slides_container')
        const prevButton = document.getElementById('prevButton')
        const nextButton = document.getElementById('nextButton')
        const maxPosition = width * count - width

        if (sliderPosition === 0) {
            prevButton.disabled = true
        } else {
            prevButton.disabled = false
        }

        if (sliderPosition === -maxPosition) {
            nextButton.disabled = true
        } else {
            nextButton.disabled = false
        }

        if (side === '-' && prevButton.disabled === false) {
            sliderPosition += width
            nextButton.disabled = false
        } else if (side === '+' && nextButton.disabled === false) {
            sliderPosition -= width
            prevButton.disabled = false
        }

        sliderContainer.style.left = `${sliderPosition}px`
    }

    let sliderSide = '+'

    const runSliderAuto = () => {
        const width = document.getElementById('slider').offsetWidth
        const maxPosition = width * count - width

        if (sliderPosition === -maxPosition) {
            sliderSide = '-'
        }
        if (sliderPosition === 0) {
            sliderSide = '+'
        }

        sliderNext(sliderSide)

    }

    useEffect(() => {
        dispatch(getSliderItem())
    }, [])

    useEffect(() => {
        let runSlider
        if (status === 'done') {
             runSlider = setInterval(runSliderAuto, 5000)
        }
        return()=>{
            clearInterval(runSlider)
        }
    }, [status])

    return (
        <div id={'slider'} className={'slider'}>

            <div id={'slides_container'} className={'slides_container'}>
                {sliderItem.map(item => <SliderItem key={item.id} item={item}/>)}
            </div>
            <button id={'prevButton'} onClick={() => sliderNext('-')}
                    className={'slider_navigation navigation_left'}>
                {'\u003c'}
            </button>
            <button id={'nextButton'} onClick={() => sliderNext('+')}
                    className={'slider_navigation navigation_right'}>
                {'\u003e'}
            </button>
        </div>
    );
};

export {Slider};