import React, { Component } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import FooterSection from '../FooterSection';
import CustomStyle from '../../style.module.css'; 

const { Header, Content } = Layout;
const { Title } = Typography;

export class CreateBrief extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Header style={{ margin: '20px auto auto', backgroundColor: 'inherit' }}>
                        <Link to="/"><img style={{ maxHeight: '100%' }} src={ require('../../images/logo.png') } alt="logo"></img></Link>
                    </Header>
                    <Content style={{ width: '90%', margin: '20px auto auto', textAlign: 'center' }}>
                        <Row type="flex" justify="center">
                            <Col md={24} lg={24}>
                                <Typography>
                                    <Title level={2} style={{color: '#0b878f', margin: '50px 0'}}>Choose your brief type:</Title>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={24} md={12} lg={6}>
                                <Link to="/amplification">
                                    <img className={CustomStyle.briefTypeImg} src={ require("../../images/amplification.png") } alt="Amplification"></img>
                                    <Title level={4} strong className={CustomStyle.briefType}>AMPLIFICATION</Title>
                                </Link>
                            </Col>
                            <Col sm={24} md={12} lg={6}>
                                <Link to="/content-creative">
                                    <img className={CustomStyle.briefTypeImg} src={ require("../../images/content_creative.png") } alt="Content and Creative"></img>
                                    <Title level={4} className={CustomStyle.briefType}>CONTENT &amp; CREATIVE</Title>
                                </Link>
                            </Col>
                            <Col sm={24} md={12} lg={6}>
                                <Link to="/integrated">
                                    <img className={CustomStyle.briefTypeImg} src={ require("../../images/integrated.png") } alt="Integrated"></img>
                                    <Title level={4} className={CustomStyle.briefType}>INTEGRATED</Title>
                                </Link>
                            </Col>
                            <Col sm={24} md={12} lg={6}>
                                <Link to="/research-insights">
                                    <img className={CustomStyle.briefTypeImg} src={ require("../../images/research_insights.png") } alt="Research and Insights"></img>
                                    <Title level={4} className={CustomStyle.briefType}>RESEARCH &amp; INSIGHTS</Title>
                                </Link>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col md={24} lg={24}>
                                <Link to="/digital-ads">
                                    <Title level={4} style={{color: '#0b878f', margin: '50px 0'}}>DIGITAL ADS</Title>
                                </Link>
                            </Col>
                        </Row>
                    </Content>
                    <FooterSection />
                </Layout>
            </React.Fragment>
        )
    }
}

export default CreateBrief
