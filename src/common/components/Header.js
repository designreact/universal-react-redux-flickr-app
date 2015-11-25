import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="header-search">
                    <form id="flickr-search">
                        <input type="text" class="header-flickr-search-input" maxlength="40" placeholder={searchInputText}>
                        <input type="submit" class="header-flickr-search-button" value={searchButtonText}>
                    </form>
                </div>
                <a class="header-flickr-logo" href="https://www.flickr.com">Go to Flickr Homepage</a>
            </div>
        )
    }
}