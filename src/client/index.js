import React from 'react'
import { render } from 'react-dom'

import App from '../common/containers/App'


function start () {
    let rootElement = document.getElementById('root')
    render(
        <App />
        rootElement
    )
}