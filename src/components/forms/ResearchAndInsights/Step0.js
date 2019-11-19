import React, { Component } from 'react';
import { Row, Col, Typography, Icon, Input, DatePicker } from 'antd';
import moment from 'moment';
import CustomStyle from '../../../style.module.css'; 

const { Title, Text } = Typography;

export class Step0 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} className={CustomStyle.headingLabel}>
                        <Title level={4}><Icon type="user" /> SPH LEAD/IC</Title>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>SALES/ACCOUNT LEAD</Text></div>
                        <Input
                            name="accountLead"
                            placeholder="Enter Name"
                            value={this.props.values.accountLead}
                            onChange={this.props.handleChange}
                            //helperText={(this.props.errors.accountLead && this.props.touched.accountLead) && this.props.errors.accountLead}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={24} className={CustomStyle.headingLabel}>
                        <Title level={4}><Icon type="folder-open" /> CLIENT INFORMATION</Title>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>ADVERTISER/AGENCY BRAND</Text></div>
                        <Input
                            name="advertiserBrand"
                            value={this.props.values.advertiserBrand}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            //helperText={(this.props.errors.advertiserBrand && this.props.touched.advertiserBrand) && this.props.errors.advertiserBrand}
                        />
                    </Col>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>NAME</Text></div>
                        <Input
                            name="name"
                            placeholder="Enter Name"
                            value={this.props.values.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            //helperText={(this.props.errors.name && this.props.touched.name) && this.props.errors.name}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={24} className={CustomStyle.headingLabel}>
                        <Title level={4}><Icon type="project" /> PROJECT THEME/PRODUCT</Title>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>PROJECT TITLE</Text></div>
                        <Input
                            name="projectTitle"
                            value={this.props.values.projectTitle}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            //helperText={(this.props.errors.projectTitle && this.props.touched.projectTitle) && this.props.errors.projectTitle}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={24} className={CustomStyle.headingLabel}>
                        <Title level={4}><Icon type="calendar" /> CAMPAIGN PERIOD</Title>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>LAUNCH DATE</Text></div>
                        <DatePicker
                            format="DD/MM/YYYY"
                            value={moment(this.props.values.launchDate, 'DD/MM/YYYY')}
                            onChange={(date,dateString)=>this.props.setFieldValue('launchDate', dateString)}
                            allowClear={false}
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>CAMPAIGN END DATE</Text></div>
                        <DatePicker
                            format="DD/MM/YYYY"
                            value={moment(this.props.values.campaignEndDate, 'DD/MM/YYYY')}
                            onChange={(date,dateString)=>this.props.setFieldValue('campaignEndDate', dateString)}
                            allowClear={false}
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step0;