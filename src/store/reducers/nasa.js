import {LOAD_NASA_SUCCESS} from '../actions/actionTypes'

const initialState = {
    nasa: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_NASA_SUCCESS:
            console.log('reducer', payload)
            return payload
        default: return state
    }
}