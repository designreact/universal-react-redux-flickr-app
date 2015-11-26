import fetch from 'isomorphic-fetch'
import * as types from '../constants/flickr'

function requestPhotos(data = {}) {
    return {
        type: types.REQUEST_PHOTOS,
        config: data
    }
}

function receivePhotos(data = {}) {
    return {
        type: types.RECEIVE_PHOTOS,
        photos: data
    }
}

export function updatePhotoSearchString(text = '') {
    return {
        type: types.UPDATE_PHOTO_SEARCH_STRING,
        string: text
    }
}

export function photoSearch(config, text) {
    return dispatch => {
        dispatch(requestPhotos())
        return fetch(config.serverUrl + 'search?string=' + encodeURIComponent(text))
            .then(response => response.json())
            .then(json => dispatch(receivePhotos(json)))
    }
}

export function fetchPhotos(config, page) {
    return dispatch => {
        dispatch(requestPhotos())
        return fetch()
            .then(response => response.json())
            .then(json => dispatch(receivePhotos(json)))
    }
}