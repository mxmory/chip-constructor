import React, {useEffect, useState} from 'react'
import StepsIndicator from "../StepsIndicator/StepsIndicator";
import {useDispatch, useSelector} from "react-redux";
import {completeStep, setDistance} from "../../actions/actions";
import Slider from 'rc-slider';
import {images} from '../../utils/images'

import 'rc-slider/assets/index.css';
import './Steps.scss'

const Steps = () => {

    const dispatch = useDispatch()
    const steps = useSelector(state => state.steps)
    const [currentStepId, setCurrentStepId] = useState(0)
    const currentStep = steps[currentStepId]

    useEffect(() => {
        setCurrentStepId(getFirstIncompleteStep())
    }, [])

    const getFirstIncompleteStep = () => {
        return steps.findIndex((step) => !step.completed)
    }

    const navigateSteps = (amount) => {
        setCurrentStepId(prevState => prevState + amount)
    }

    const handleInput = (value) => {
        currentStep.selectableContents.distance.value = value
        dispatch(setDistance(currentStep))
    }

    return (
        <div className="steps">
            <StepsIndicator steps={steps}/>
            <div className="steps__wrap">
                <div className="steps__title">
                    {currentStep.title.substring(0, currentStep.title.lastIndexOf(" "))}
                    <span className="orange">{currentStep.title.split(" ").splice(-1)}</span>
                </div>
                <div className="steps__selectables">
                    <div className="steps__distance">
                        <div className="wrapper">
                                <span className="sub-title uppercase">choose
                                    <span className="orange"> distance</span>
                                </span>
                            <div className="current">
                                <span className="uppercase current__title">current
                                    <span className="current__index">distance:</span>
                                </span>
                                <span className="ultrabold steps__distance-value">
                                    {currentStep.selectableContents.distance.value}
                                    <span className="orange">m</span>
                                </span>
                            </div>
                        </div>
                        <Slider min={0}
                                max={50}
                                onChange={handleInput}
                                defaultValue={currentStep.selectableContents.distance.value}
                                value={currentStep.selectableContents.distance.value}
                        />
                        <div className="range-interval">
                            <div className="range-interval__value">0m</div>
                            <div className="range-interval__value">50m</div>
                        </div>
                    </div>
                    <div className="steps__items">
                        <span className="sub-title uppercase">Choose
                            <span className="orange"> type of connection</span>
                        </span>
                        <div className="steps__items-inner">
                            {
                                currentStep.selectableContents.connectionTypes.value.map((el) => {
                                    return (
                                        <div className={`card ${el.selected ? 'active' : ''}`}
                                             key={el.id}
                                             onClick={() => dispatch(completeStep({currentStepId, el}))}>
                                            <img src={images[`logo_${el.title.toLowerCase()}.svg`]} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="steps__btns">
                <button className={`step-btn step-btn--next 
                                    ${(currentStepId !== steps.length - 1
                    && currentStep.completed) ? 'active' : ''}`}
                        onClick={() => navigateSteps(1)}>
                    <img src={images['arrow_circle.svg']} alt="next step"/>
                </button>
                <button className={`step-btn step-btn--prev 
                                    ${currentStepId !== 0 ? 'active' : ''}`}
                        onClick={() => navigateSteps(-1)}>
                    <img src={images['arrow_circle.svg']} alt="prev step"/>
                </button>
            </div>
            <div className="steps__bottom">
                <button className="btn"
                        onClick={() => navigateSteps(1)}
                        disabled={(currentStepId === steps.length - 1
                               || !currentStep.completed)}>Next Step
                </button>
            </div>

        </div>
    )
}

export default Steps
