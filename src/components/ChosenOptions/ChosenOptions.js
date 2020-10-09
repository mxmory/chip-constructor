import React from 'react'
import {renderOptionIcon} from "../Icons/OptionsIcons";
import {useSelector} from "react-redux";

import './ChosenOptions.scss'

const ChosenOptions = () => {

    const options = useSelector(state => state.options);
    const activeOptions = options.filter((option) => option.selected)

    return (
        <div className="chosen-options">
            <div>choosen <span className="bold">options:</span></div>
            <ul className="chosen-options__list">
                {
                    activeOptions.map((option) => {
                        return (
                            <li className="circle"
                                key={option.id}>
                                {renderOptionIcon(option.id)}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ChosenOptions
