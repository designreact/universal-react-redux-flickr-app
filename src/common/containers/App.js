import React, { Component, PropTypes } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoList from '../components/PhotoList'

export default class App extends Component {
    render() {
        return (
            <Header />
            <PhotoList />
            <Footer />
        )
    }
}