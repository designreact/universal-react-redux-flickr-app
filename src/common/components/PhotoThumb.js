import React, { Component, PropTypes } from 'react'

export default class PhotoThumb extends Component {
    render() {

        let url = 'https://farm' +
            this.props.farm + '.staticflickr.com/' +
            this.props.server + '/' +
            this.props.id + '_' +
            this.props.secret + '_q.jpg'

        return (<div className="photo-thumb"><img src={url} /></div>)
    }
}