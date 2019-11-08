import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export class FooterSection extends Component {
    render() {
        return (
            <React.Fragment>
                <Footer style={{ maxWidth: 700, margin: 'auto' }}>
                    <a href="https://www.sph.com.sg/legal/sph_privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://www.sph.com.sg/legal/pdpa.html" target="_blank" rel="noopener noreferrer">Personal Data Protection</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="https://sph.com.sg/legal/website_tnc.html" target="_blank" rel="noopener noreferrer">Terms And Conditions</a>
                </Footer>
            </React.Fragment>
        )
    }
}

export default FooterSection
