import { combineReducers } from 'redux'

import configuration from './config'
import flickr from './flickr'

const rootReducer = combineReducers({
    configuration,
    flickr
})

export default rootReducer