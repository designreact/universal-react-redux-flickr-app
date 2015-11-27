import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
    render() {
        let strings = this.props.strings,
            onPhotoSearch = this.props.onPhotoSearch,
            onUpdatePhotoSearchString = this.props.onUpdatePhotoSearchString

        return (
            <div className="header">
                <div className="header-search">
                    <form id="flickr-search"
                          onSubmit={e => {
                            e.preventDefault()
                            onPhotoSearch()
                          }}>
                        <input id="flickr-search-string"
                               type="text"
                               className="header-flickr-search-input"
                               maxLength="40"
                               placeholder={strings.header.searchInputText}
                               onChange={ e => {
                                 onUpdatePhotoSearchString(e.target.value)
                               }}/>
                        <input type="submit" className="header-flickr-search-button" value={strings.header.searchButtonText} />
                    </form>
                </div>
                <a className="header-flickr-logo" href="https://www.flickr.com">{strings.header.flickrCta}</a>
            </div>
        )
    }
}