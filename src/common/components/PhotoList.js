import React, { Component, PropTypes } from 'react'
import PhotoThumb from './PhotoThumb'

export default class PhotoList extends Component {

    render() {

        let photos, loadingStrip,
            fetchPhotos = this.props.fetchPhotos

        if (this.props.flickr.photos) {
            photos = this.props.flickr.photos.photo.map((photo, index) =>
                <PhotoThumb {...photo}
                    key={index}
                />
            )
        }

        if (this.props.flickr.requesting) loadingStrip = (
            <div className="photo-list-loading-strip">Loading photos, please wait...</div>
        )

        //todo jump to top when new search is performed
        //todo distribute or center thumbs in list-content

        return (
            <div className="photo-list">
                <div className="photo-list-content"
                     onScroll={(e) => {
                        let currentScroll = e.target.scrollTop + e.target.clientHeight,
                            scrollHeight = e.target.scrollHeight

                        if (currentScroll + 150 > scrollHeight) {
                            fetchPhotos();
                        }
                     }
                    }>
                    <div className="photo-list-photos">
                        {photos}
                    </div>
                </div>
                {loadingStrip}
            </div>
        )
    }
}