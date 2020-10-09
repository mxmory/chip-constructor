/*---------- options ----------*/

export const addCustomOption = (newOption) => {
    return {
        type: 'optionsPicker/addCustomOption',
        payload: newOption
    }
}

export const selectOption = (optionId) => {
    return {
        type: 'optionsPicker/selectOption',
        payload: optionId
    }
}

/*---------- steps ----------*/

export const completeStep = (stepId) => {
    return {
        type: 'steps/completeStep',
        payload: stepId
    }
}

export const setDistance = (currentStep) => {
    return {
        type: 'steps/setDistance',
        payload: currentStep
    }
}



