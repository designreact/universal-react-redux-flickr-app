import '../../scss/main.scss'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoList from '../components/PhotoList'

import { updatePhotoSearchString, photoSearch, fetchPhotos } from '../actions/flickr'

export default class App extends Component {

    render() {
        const { dispatch, config, strings, searchString, photos} = this.props

        return (
            <div className="app-content">
                <Header strings={strings}
                        config={config}
                        onPhotoSearch={() => dispatch(photoSearch(config, searchString))}
                        onUpdatePhotoSearchString={(string) => dispatch(updatePhotoSearchString(string))}
                />
                <PhotoList photos={photos}/>
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
        strings: state.configuration.strings,
        searchString: state.flickr.searchString,
        photos: state.flickr.photos
    }
}

export default connect(
    mapStateToProps
)(App)