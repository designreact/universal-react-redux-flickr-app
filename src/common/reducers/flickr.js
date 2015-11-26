import * as types from '../constants/flickr'

export default function flickr(state = {}, action) {
    switch (action.type) {
        case types.UPDATE_PHOTO_SEARCH_STRING:
            return Object.assign({}, state, {searchString:action.string})
        case types.REQUEST_PHOTOS:
            return Object.assign({}, state, {requesting:true})
        case types.RECEIVE_PHOTOS:
            return Object.assign({}, state, {photos:action.photos, requesting:false})
        default:
            return state
    }
}