import React, {useEffect, useRef, useState} from 'react'
import {useSelector} from "react-redux";
import {images} from '../../utils/images'
import {OrderModal} from "../Modals";

import './LiveView.scss'

const LiveView = () => {

    const [modalShow, setModalShow] = useState(false);

    const steps = useSelector(state => state.steps)
    const completedSteps = steps.filter((step) => step.completed)

    const liveViewLoaded = useRef(null)

    useEffect(() => {
        if (liveViewLoaded.current && window.innerWidth <= 640) { /*Прыжок на live view на мобилке после заполнения*/
            window.scrollTo({
                top: liveViewLoaded.current.offsetTop,
                behavior: 'smooth'
            })
        }
    }, [completedSteps])

    if (steps.length !== completedSteps.length) {
        return (
            <div className="live-view">
                <div className="live-view__warning">
                    Complete all steps to see your <div className="black">product</div>
                </div>
            </div>
        )
    }

    return (
        <div className="live-view" ref={liveViewLoaded}>
            <div className="live-view__top">
                <div className="live-view__title uppercase">White Label
                    <div>W-394900 XP</div>
                </div>
                <button className="btn btn--outline"
                        onClick={() => setModalShow(true)}>
                    Order Now
                </button>
                <OrderModal show={modalShow} onClose={() => setModalShow(false)}/>
            </div>
            <div className="live-view__text">
                <p className="bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, consequatur cumque deserunt
                    dignissimos enim ex inventore ipsam laborum necessitatibus nobis
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur cupiditate dolorem dolorum
                    eaque explicabo, harum magni modi nam necessitatibus nesciunt</p>
            </div>
            <div className="live-view__img">
                <img src={images['product.png']} alt=""/>
            </div>
            <span className="uppercase live-view__bottom">
                Live
                <span>View</span>
            </span>
        </div>
    )
}

export default LiveView
