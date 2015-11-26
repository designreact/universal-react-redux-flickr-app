import '../../scss/main.scss'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoList from '../components/PhotoList'

export default class App extends Component {

    render() {
        const { config, strings } = this.props

        return (
            <div className="app-content">
                <Header strings={strings} config={config} onPhotoSearch={(text) => dispatch(photoSearch(text))}/>
                <PhotoList onFetchPhotos={(page) => dispatch(fetchPhotos(page))}/>
                <Footer strings={strings} config={config}/>
            </div>
        )
    }
}

App.propTypes = {
    config: PropTypes.object.isRequired,
    strings: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        config: state.configuration,
        strings: state.configuration.strings
    }
}

export default connect(
    mapStateToProps
)(App)