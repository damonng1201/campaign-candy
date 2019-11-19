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
                            <Text strong className={CustomStyle.labelText}>What would you be testing/researching on?</Text>
                        </div>
                        <TextArea
                            rows={6}
                            name="research"
                            value={this.props.values.research}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step5;