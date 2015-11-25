import React, { Component, PropTypes } from 'react'

export default class PhotoList extends Component {

    render() {

        let photos;
        if (this.props.photos) {
            photos = this.props.photos.map((photo, index) =>
                    <PhotoThumb {...photo}
                        key={index}
                        />
                )
        }

        return (
            <div className="photo-list">
                {photos}
            </div>
        )
    }
}