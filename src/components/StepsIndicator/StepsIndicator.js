import React from 'react'

import './StepsIndicator.scss'

const StepsIndicator = ({steps}) => {

    const completedSteps = steps.filter((step) => step.completed)

    return (
        <div className="steps-indicator">
            <div className="steps-indicator__levels">
                {
                    steps.map((step) => {
                        return (
                            <div key={step.id}
                                 className={`steps-indicator__circle 
                                             ${step.completed ? 'completed' : ''}`}/>
                        )
                    })
                }

            </div>
            <div className="steps-indicator__text">
                Complete {completedSteps.length} steps of {steps.length}
            </div>
        </div>
    )
}

export default StepsIndicator
