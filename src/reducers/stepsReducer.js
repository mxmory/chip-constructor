const handleStep = (steps, action) => {
    let idx = steps.findIndex((step) => {
        step.selectableContents.connectionTypes.value.map((item) => {
           return item.selected = item.id === action.payload.el.id;
        })
        return step.id === action.payload.currentStepId + 1
    })
    let newStep = steps[idx]
    newStep.completed = true
    return [
        ...steps.slice(0, idx), newStep, ...steps.slice(idx + 1)
    ]
}

const setDistance = (steps, action) => {
    let idx = steps.findIndex((step) => step.id === action.payload.id)
    return [
        ...steps.slice(0, idx), action.payload, ...steps.slice(idx + 1)
    ]
}

const stepsReducer = (steps, action) => {
    if (steps === undefined) {
        return [
            // Mock state STEPS
            {
                id: 1,
                title: 'Transmission Distance',
                completed: false,
                selectableContents: {
                    distance: {
                        title: 'distance',
                        value: 30
                    },
                    connectionTypes: {
                        title: 'type of connection',
                        value: [
                            {
                                id: 1,
                                title: 'Wi-Fi',
                                selected: false
                            },
                            {
                                id: 2,
                                title: 'Z-wave',
                                selected: false
                            },
                            {
                                id: 3,
                                title: 'WI-Fi',
                                selected: false
                            },
                            {
                                id: 4,
                                title: 'MBus',
                                selected: false
                            },
                            {
                                id: 5,
                                title: 'Z-wave',
                                selected: false
                            },
                            {
                                id: 6,
                                title: 'Wi-Fi',
                                selected: false
                            },
                            {
                                id: 7,
                                title: 'WI-Fi',
                                selected: false
                            },
                            {
                                id: 8,
                                title: 'MBus',
                                selected: false
                            },
                        ]
                    }
                }
            },
            {
                id: 2,
                title: 'Some Other Options',
                completed: false,
                selectableContents: {
                    distance: {
                        title: 'distance',
                        value: 10
                    },
                    connectionTypes: {
                        title: 'type of connection',
                        value: [
                            {
                                id: 1,
                                title: 'Wi-Fi',
                                selected: false
                            },
                            {
                                id: 2,
                                title: 'Z-wave',
                                selected: false
                            },
                            {
                                id: 3,
                                title: 'WI-Fi',
                                selected: false
                            },
                            {
                                id: 4,
                                title: 'MBus',
                                selected: false
                            },
                            {
                                id: 5,
                                title: 'Z-wave',
                                selected: false
                            },
                            {
                                id: 6,
                                title: 'Wi-Fi',
                                selected: false
                            },
                            {
                                id: 7,
                                title: 'WI-Fi',
                                selected: false
                            },
                            {
                                id: 8,
                                title: 'MBus',
                                selected: false
                            },
                        ]
                    }
                }
            },
            {
                id: 3,
                title: 'Lorem Ipsum',
                completed: false,
                selectableContents: {
                    distance: {
                        title: 'distance',
                        value: 40
                    },
                    connectionTypes: {
                        title: 'type of connection',
                        value: [
                            {
                                id: 1,
                                title: 'Wi-Fi',
                                selected: false
                            },
                            {
                                id: 2,
                                title: 'Z-wave',
                                selected: false
                            },
                            {
                                id: 3,
                                title: 'WI-Fi',
                                selected: false
                            },
                            {
                                id: 4,
                                title: 'MBus',
                                selected: false
                            },
                        ]
                    }
                }
            },
            {
                id: 4,
                title: 'Lorem ipsum dolor sit amet',
                completed: false,
                selectableContents: {
                    distance: {
                        title: 'distance',
                        value: 30
                    },
                    connectionTypes: {
                        title: 'type of connection',
                        value: [
                            {
                                id: 1,
                                title: 'Wi-Fi',
                                selected: false
                            },
                            {
                                id: 2,
                                title: 'Z-wave',
                                selected: false
                            },
                            {
                                id: 3,
                                title: 'WI-Fi',
                                selected: false
                            },
                            {
                                id: 4,
                                title: 'MBus',
                                selected: false
                            },
                            {
                                id: 5,
                                title: 'Z-wave',
                                selected: false
                            },
                            {
                                id: 6,
                                title: 'Wi-Fi',
                                selected: false
                            },
                            {
                                id: 7,
                                title: 'WI-Fi',
                                selected: false
                            },
                            {
                                id: 8,
                                title: 'MBus',
                                selected: false
                            },
                        ]
                    }
                }
            },
        ]
    }

    switch (action.type) {
        case 'steps/completeStep':
            return handleStep(steps, action)
        case 'steps/setDistance':
            return setDistance(steps, action)
        default:
            return steps
    }
}

export default stepsReducer
