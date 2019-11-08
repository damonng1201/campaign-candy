import React, { Component } from 'react'
import { Layout, Typography } from 'antd';
import Logo from '../../images/logo.gif';
import { Link } from 'react-router-dom';
import FooterSection from '../FooterSection';

const { Content } = Layout;
const { Paragraph, Text } = Typography;

const classes = {
    logo: {
        width: '100%'
    }
};

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Content style={{ maxWidth: 700, margin: 'auto' }}>
                        <div>
                            <img src={Logo} style={classes.logo} alt="logo" />
                        </div>
                        <Typography style={{ padding: 20 }}>
                            <Paragraph>Welcome to <Text strong>Campaign Candy</Text>.</Paragraph>

                            <Paragraph>The briefing app for submitting <Text strong>marketing campaign proposal</Text> requests to SPH and Sweet - the Creative and Content team at SPH.</Paragraph>

                            <Paragraph>This briefing app has been created so we can gather all the important information we need in order to develop a successful marketing campaign for you. Please try and complete all of the fields.</Paragraph>

                            <Paragraph>Your proposal request may be for <Text strong>media, creative, content</Text> - any of these on their own or together as an integrated holistic marketing campaign.</Paragraph>

                            <Paragraph>It only takes a few minutes to complete the brief and we will get back to you with our proposal as soon as possible - normally within a week.</Paragraph>

                            <Paragraph>If you need the proposal urgently please let your <Text strong>SPH Account Manager</Text> or Sweet Client Solutions Manager know and we will do our best to expedite the proposal development process. Please keep in mind that the process of developing big ideas that work can take some time to work through.</Paragraph>

                            <Paragraph>We are grateful for your brief and excited to have the opportunity to work with you to ensure your marketing is a big success.</Paragraph>

                            <Paragraph>Have a Sweet Day!</Paragraph>
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/createbrief">
                                    Create Brief
                                </Link>
                            </div>
                        </Typography>
                    </Content>
                    <FooterSection />
                </Layout>
            </React.Fragment>
        )
    }
}

export default Home
