import React, { Component, PropTypes } from 'react'
import PhotoThumb from './PhotoThumb'

export default class PhotoList extends Component {

    render() {

        let photos, loadingStrip, photoPreview,
            fetchPhotos = this.props.fetchPhotos,
            displayPhoto = this.props.displayPhoto,
            currentPhoto = this.props.flickr.currentPhoto

        if (this.props.flickr.photos) {
            photos = this.props.flickr.photos.photo.map((photo, index) =>
                <PhotoThumb {...photo}
                    key={index}
                    displayPhoto={displayPhoto}
                />
            )
        }

        if(currentPhoto && currentPhoto.show) photoPreview =   (<div className="photo-preview">
                                                                    <div className="photo-preview-content">
                                                                        <img src={currentPhoto.url} />
                                                                    </div>
                                                                </div>)

        if (this.props.flickr.requesting) loadingStrip = (
            <div className="photo-list-loading-strip">Loading photos, please wait...</div>
        )

        //todo jump to top when new search is performed
        //todo distribute or center thumbs in list-content

        return (
            <div className="photo-list" ref="photoList">
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
                {photoPreview}
                {loadingStrip}
            </div>
        )
    }
}