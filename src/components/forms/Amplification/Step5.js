import React, { Component } from 'react';
import { ErrorMessage } from 'formik';
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
                            name="message"
                            value={this.props.values.message}
                            onChange={this.props.handleChange}
                        />
                        <ErrorMessage name="message" render={msg => <div className={CustomStyle.errorMsg}>{msg}</div>} />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step5;