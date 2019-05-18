const findItems = (array) => {
    let result = []
    array.forEach(item => {
        item.rocket.second_stage.payloads.forEach(payload => {
            if((payload.customers.includes("NASA") || payload.customers.includes("NASA (CRS)")) && item.launch_year === '2018') {
                result.push(item)
            }
        })
    })
    return result
}

export const getAllNasaSelector = state => {
    return state.nasa.length > 0 ?
    findItems(state.nasa)
    : null
}

export const getPayloadLengthSelector = (state, ownProps) => {
    console.log('!!!', ownProps)
    return 1
}