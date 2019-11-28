import React, { Component } from 'react';
import { ErrorMessage } from 'formik';
import { Row, Col, Typography, Icon, DatePicker, Checkbox, Input } from 'antd';
import moment from 'moment';
import CustomStyle from '../../../style.module.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

export class Step10 extends Component {
    constructor(props) {
        super(props);
        this.state = { enableOthersField: this.props.values.deliverableOthers ? true : false }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} className={CustomStyle.headingLabel}>
                        <Title level={4}><Icon type="calendar" /> TIMELINE FOR DELIVERY</Title>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>When do you want this work to be done?</Text>
                        </div>
                        <DatePicker
                            format="DD/MM/YYYY"
                            value={moment(this.props.values.completionDate, 'DD/MM/YYYY')}
                            onChange={(date,dateString)=>this.props.setFieldValue('completionDate', dateString)}
                            allowClear={false}
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>When do you need the final analysis or presentation?</Text>
                        </div>
                        <DatePicker
                            format="DD/MM/YYYY"
                            value={moment(this.props.values.presentationDate, 'DD/MM/YYYY')}
                            onChange={(date,dateString)=>this.props.setFieldValue('presentationDate', dateString)}
                            allowClear={false}
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>DELIVERABLES</Title>
                        <Checkbox.Group
                            name='deliverables'
                            value={this.props.values.deliverables}
                            onChange={(checkedValue)=>this.props.setFieldValue('deliverables', checkedValue)}
                        >
                            <Checkbox value="Media Schedule" className={CustomStyle.checkboxText}>Media Schedule</Checkbox>
                            <Checkbox value="Media Deck(ppt)" className={CustomStyle.checkboxText}>Media Deck(ppt)</Checkbox>
                            <Checkbox value="Post Reports" className={CustomStyle.checkboxText}>Post Reports</Checkbox>
                            <Checkbox value="Others" className={CustomStyle.checkboxText} onChange={(e)=>{this.setState({enableOthersField:e.target.checked})}}>Others (Please specify)</Checkbox>
                        </Checkbox.Group>
                        <ErrorMessage name="deliverables" render={msg => <div className={CustomStyle.errorMsg}>{msg}</div>} />
                        {this.state.enableOthersField &&(
                            <Input 
                                name="deliverableOthers"
                                value={this.props.values.deliverableOthers}
                                onChange={this.props.handleChange}
                                style={{ width: 200 }}
                            />
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>OTHER MANDATES</Title>
                        <TextArea
                            rows={4}
                            placeholder="Please specify e.g.: avoid weekend, avoid public holiday"
                            name="otherMandates"
                            value={this.props.values.otherMandates}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step10;