import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    render() {
        let config = this.props.config
        return (
            <div className="footer">
                <a className="footer-link footer-github-link" href={config.gitHubUrl} >{config.strings.footer.gitHubLinkText}</a>
                <a className="footer-link footer-website-link" href={config.websiteUrl} >{config.strings.footer.websiteLinkText}</a>
            </div>
        )
    }
}