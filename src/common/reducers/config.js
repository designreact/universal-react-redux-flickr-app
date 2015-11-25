import * as types from '../constants/config'

export default function appConfig(state = {}, action) {
    switch (action.type) {
        case types.SET_CONFIG:
            return Object.assign({}, state, action.config)
        case types.SET_STRINGS:
            return Object.assign({}, state, {strings:action.strings})
        default:
            return state
    }
}