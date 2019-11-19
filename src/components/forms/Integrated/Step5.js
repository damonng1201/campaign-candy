import React, { Component } from 'react';
import { Row, Col, Typography, Input } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

export class Step5 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>COMMUNICATION / MESSAGE / PROPOSITION</Title>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>What is/will be your key digital campaign creative message?</Text>
                        </div>
                        <TextArea
                            rows={4}
                            name="creativeMessage"
                            value={this.props.values.creativeMessage}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>Is there a single thing we should focus on?</Text>
                        </div>
                        <TextArea
                            rows={4}
                            name="focus"
                            value={this.props.values.focus}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>What is the key message in media?</Text>
                        </div>
                        <TextArea
                            rows={4}
                            name="keyMessage"
                            value={this.props.values.keyMessage}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step5;