import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    render() {
        let strings = this.props.strings
        let config = this.props
        return (
            <div className="footer">
                <a className="footer-github-link" href={config.gitHubUrl}>{strings.footer.gitHubLinkText}</a>
                <a className="footer-website-link" href={config.websiteUrl}>{strings.footer.websiteLinkText}</a>
            </div>
        )
    }
}