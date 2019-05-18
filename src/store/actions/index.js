import {LOAD_NASA_START, LOAD_NASA_SUCCESS, LOAD_NASA_FAILURE} from './actionTypes'
import {loadItemsApi} from '../api'

export const loadNasa = () => async (dispatch) => {
    dispatch({type: LOAD_NASA_START})

    try {
        const items = await loadItemsApi()
        console.log('actions', items)
        dispatch({type: LOAD_NASA_SUCCESS, payload: items})
    } catch (err) {
        dispatch({type: LOAD_NASA_FAILURE, payload: err, error: true})
    }
}