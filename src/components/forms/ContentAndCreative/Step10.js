import React, { Component } from 'react';
import { Row, Col, Typography, Icon, DatePicker, Checkbox } from 'antd';
import moment from 'moment';
import CustomStyle from '../../../style.module.css';

const { Title, Text } = Typography;

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
                            value={moment(this.props.values.completionDate)}
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
                            value={moment(this.props.values.presentationDate)}
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
                            <Checkbox value="Content/ Creative Proposal" className={CustomStyle.checkboxText}>Content/ Creative Proposal</Checkbox>
                        </Checkbox.Group>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step10;