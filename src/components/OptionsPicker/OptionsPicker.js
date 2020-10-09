import React, {useEffect, useRef, useState} from "react";
import Swiper from "react-id-swiper";

import {useDispatch, useSelector} from "react-redux";
import {selectOption} from "../../actions/actions";
import {renderOptionIcon} from "../Icons/OptionsIcons";
import {AddCustomOptionModal} from "../Modals";

import './OptionsPicker.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const OptionsPicker = () => {

    const dispatch = useDispatch();
    const options = useSelector(state => state.options);
    const [modalShow, setModalShow] = useState(false);
    const mySwiper = useRef()

    useEffect(() => {
        if (mySwiper.current.swiper.isLocked) {
            mySwiper.current.classList.add('locked')
        } else {
            mySwiper.current.classList.remove('locked')
        }
    }, [options])

    const params = {
        spaceBetween: 15,
        slidesPerView: 10,
        shouldSwiperUpdate: true,
        watchOverflow: true,
        breakpoints: {
            992: {
                spaceBetween: 15,
                slidesPerView: 10
            },
            768: {
                spaceBetween: 15,
                slidesPerView: 7,
            },
            640: {
                spaceBetween: 15,
                slidesPerView: 5,
            },
            375: {
                spaceBetween: 15,
                slidesPerView: 4,
            },
            320: {
                spaceBetween: 15,
                slidesPerView: 3,
            }
        }
    }

    return (
        <div className="options-picker">
            <div className="options-picker__slider">
                <Swiper {...params} ref={mySwiper}>
                    {
                        options.map((option) => {
                            return (
                                <div key={option.id}
                                     onClick={() => dispatch(selectOption(option.id))}>
                                    <div className={`circle ${option.selected ? 'active' : ''}`}>
                                        {renderOptionIcon(option.id)}
                                    </div>
                                    <div className="option-title">{option.title}</div>
                                </div>
                            )
                        })
                    }
                    <div>
                        <div className="circle circle--add"
                             onClick={() => setModalShow(true)}>
                            <div className="plus"/>
                        </div>
                    </div>
                </Swiper>
                <div className="control-arrow control-arrow--prev"
                     onClick={() => mySwiper.current.swiper.slidePrev()}/>
                <div className="control-arrow control-arrow--next"
                     onClick={() => mySwiper.current.swiper.slideNext()}/>
            </div>
            <AddCustomOptionModal options={options}
                                  show={modalShow}
                                  onClose={() => setModalShow(false)}/>
        </div>
    );
}

export default OptionsPicker

