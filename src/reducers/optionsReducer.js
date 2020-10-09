const handleOption = (options, action) => {
    let idx = options.findIndex((option) => option.id === action.payload)
    let newOption = options[idx]
    newOption.selected = !newOption.selected
    return [
        ...options.slice(0, idx), newOption, ...options.slice(idx + 1)
    ]
}

const optionsReducer = (options, action) => {
    if (options === undefined) {
        return [
            // Mock state OPTIONS
            {
                id: 1,
                title: 'Temperature',
                description: 'Lorem Ipsum',
                selected: false
            },
            {
                id: 2,
                title: 'Cloud Temperature',
                description: 'Lorem Ipsum',
                selected: true
            },
            {
                id: 3,
                title: 'Dust Temperature',
                description: 'Lorem Ipsum',
                selected: true
            },
            {
                id: 4,
                title: 'Water Temperature',
                description: 'Lorem Ipsum',
                selected: false
            },
            {
                id: 5,
                title: 'Temperature',
                description: 'Lorem Ipsum',
                selected: true
            },
            {
                id: 6,
                title: 'Temperature',
                description: 'Lorem Ipsum',
                selected: false
            },
            {
                id: 7,
                title: 'Cloud Temperature',
                description: 'Lorem Ipsum',
                selected: false
            },
            {
                id: 8,
                title: 'Dust Temperature',
                description: 'Lorem Ipsum',
                selected: false
            },
        ]
    }

    switch (action.type) {
        case 'optionsPicker/selectOption':
            return handleOption(options, action)
        case 'optionsPicker/addCustomOption':
            return [...options, action.payload]
        default:
            return options
    }
}

export default optionsReducer
