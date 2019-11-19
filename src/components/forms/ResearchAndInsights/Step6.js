import React, { Component } from 'react';
import { Row, Col, Typography, Input } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

export class Step6 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>CREATIVE FORMATS AVAILABLE</Title>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>Please confirm types of material for research</Text>
                        </div>
                        <TextArea
                            rows={6}
                            name="researchMaterial"
                            value={this.props.values.researchMaterial}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step6;