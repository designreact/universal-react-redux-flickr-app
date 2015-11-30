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

export function displayPhoto(url, show) {
    return {
        type: types.SHOW_PHOTO,
        currentPhoto: {
            url:url,
            show: show
        }
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

export function fetchPhotos(config, flickr) {
    let page = flickr.photos.page + 1
    return dispatch => {
        dispatch(requestPhotos())
        return fetch(config.serverUrl +
                    'search?string=' + encodeURIComponent(flickr.searchString) +
                    '&page=' + page)
            .then(response => response.json())
            .then(json => {

                //todo confirm correct place to handle concat logic
                let photo = flickr.photos.photo
                if (photo.length) json.photo = photo.concat(json.photo)

                dispatch(receivePhotos(json))
            })
    }
}