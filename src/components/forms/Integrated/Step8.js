import React, { Component } from 'react';
import { Row, Col, Typography, Checkbox } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title } = Typography;

export class Step8 extends Component {
    constructor(props) {
        super(props);
        this.state = { enableOthersField: this.props.values.measurementOthers ? true : false }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>MEASUREMENT</Title>
                        <Checkbox.Group
                            name='measurement'
                            value={this.props.values.measurement}
                            onChange={(checkedValue)=>this.props.setFieldValue('measurement', checkedValue)}
                        >
                            <Checkbox value="Awareness" className={CustomStyle.checkboxText}>Awareness</Checkbox>
                            <Checkbox value="Engagement" className={CustomStyle.checkboxText}>Engagement</Checkbox>
                            <Checkbox value="Advocacy - Shares" className={CustomStyle.checkboxText}>Advocacy - Shares</Checkbox>
                            <Checkbox value="Lead Generation" className={CustomStyle.checkboxText}>Lead Generation</Checkbox>
                            <Checkbox value="Social Followers" className={CustomStyle.checkboxText}>Social Followers</Checkbox>
                            <Checkbox value="Sales" className={CustomStyle.checkboxText}>Sales</Checkbox>
                            <Checkbox value="Competition Entries" className={CustomStyle.checkboxText}>Competition Entries</Checkbox>
                            <Checkbox value="Event Attendance" className={CustomStyle.checkboxText}>Event Attendance</Checkbox>
                        </Checkbox.Group>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step8;