import React, { Component, PropTypes } from 'react'

export default class PhotoList extends Component {
    render() {
        return (
            <div class="photo-list">
                {this.props.photos.map((photo, index) =>
                    <PhotoThumb {...photo}
                        key={index}
                    />
                )}
            </div>
        )
    }
}