import React, { Component } from 'react';
import { Row, Col, Typography, Input } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

export class Step3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>TARGET AUDIENCE/TRIBES</Title>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>Define your priority research target here</Text>
                        </div>
                        <TextArea
                            rows={6}
                            name="target"
                            placeholder="Name all the target groups that could be or must be part of the research, and why"
                            value={this.props.values.target}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>Customized set of audience</Text>
                        </div>
                        <TextArea
                            rows={6}
                            name="customizedAudience"
                            placeholder="Do you already have a customized set of audience we can reach out to (via your CRM, data portfolio) or will the researcher need to find them for you?"
                            value={this.props.values.customizedAudience}
                            onChange={this.props.handleChange}
                        />
                        <Text>Note that each segment is a different study and will warrant a varying cost</Text>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step3;