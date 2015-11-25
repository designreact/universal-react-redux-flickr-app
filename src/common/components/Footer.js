import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <a class="footer-github-link" href={gitHubUrl}>{gitHubLinkText}</a>
                <a class="footer-website-link" href={websiteUrl}>{websiteLinkText}</a>
            </div>
        )
    }
}