import fetch from 'isomorphic-fetch'
import * as types from '../constants/config'

function receiveConfig(data) {
    return {
        type: types.SET_CONFIG,
        config: data
    }
}

function receiveStrings(data) {
    return {
        type: types.SET_STRINGS,
        strings: data
    }
}

export function fetchConfig() {
    return dispatch => {
        return fetch('./config.json')
            .then(response => response.json())
            .then(json => dispatch(receiveConfig(json)))
    }
}

export function fetchStrings(config) {
    return dispatch => {
        return fetch('./locales/' + config.locale + '.json')
            .then(response => response.json())
            .then(json => dispatch(receiveStrings(json)))
    }
}