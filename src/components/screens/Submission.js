import React, { Component } from 'react';
import { ErrorMessage } from 'formik';
import { Row, Col, Typography, Input, Button } from 'antd';
import CustomStyle from '../../style.module.css'; 

const { Title, Text } = Typography;
const { TextArea } = Input;

export class Submission extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={ require('../../images/did_it.jpg') } alt="logo" style={{ maxWidth: '100%' }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <Title>YOU DID IT!</Title>
                            <Title level={4}>YOUR BRIEF IS DONE :)</Title>
                            <Text className={CustomStyle.labelText}>SHARE THIS BRIEF</Text>
                        </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={20}>
                        <TextArea
                            rows={6}
                            name="email"
                            placeholder="Enter email addresses"
                            value={this.props.values.email}
                            onChange={this.props.handleChange}
                        />
                        <ErrorMessage name="email" render={msg => <div className={CustomStyle.errorMsg}>{msg}</div>} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ textAlign: 'center' }}><Text>Separate multiple email addresses with commas</Text></div>
                        <div style={{ textAlign: 'center' }}><Text>Example - stacy@email.com, john@gmail.com</Text></div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col>
                        <div style={{ margin: '50px 0' }}>
                            <Button type="danger" htmlType="submit">
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Submission;
