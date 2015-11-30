import React, { Component, PropTypes } from 'react'

export default class PhotoThumb extends Component {
    render() {

        let url = 'https://farm' +
            this.props.farm + '.staticflickr.com/' +
            this.props.server + '/' +
            this.props.id + '_' +
            this.props.secret,
            displayPhoto = this.props.displayPhoto

        return (
            <div className="photo-list-thumb"
                 onClick={()=>{displayPhoto(url + '_c.jpg', true)}}>
                <img src={url + '_q.jpg'} />
            </div>
        )
    }
}