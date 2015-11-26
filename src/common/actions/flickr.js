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
        strings: data
    }
}

export function photoSearch(text) {
    return dispatch => {
        dispatch(requestPhotos())
        return fetch()
            .then(response => response.json())
            .then(json => dispatch(receivePhotos(json)))
    }
}

export function fetchPhotos(page) {
    return dispatch => {
        dispatch(requestPhotos())
        return fetch()
            .then(response => response.json())
            .then(json => dispatch(receivePhotos(json)))
    }
}