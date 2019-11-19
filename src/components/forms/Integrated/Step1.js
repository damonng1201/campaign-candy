import React, { Component } from 'react';
import { Row, Col, Icon, Typography, Radio, Input } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

export class Step1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}><Icon type="build" /> Background</Title>
                        <Radio.Group 
                            name="background"
                            value={this.props.values.background}
                            onChange={this.props.handleChange}>
                            <Radio value="b2b">B to B</Radio>
                            <Radio value="b2c">B to C</Radio>
                        </Radio.Group>
                        
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}><Icon type="bulb" /> IDEATION</Title>
                        <TextArea
                            rows={4}
                            name="ideation"
                            placeholder="Please provide a brief idea of what your campaign about"
                            value={this.props.values.ideation}
                            onChange={this.props.handleChange}
                            //helperText={(this.props.errors.ideation && this.props.touched.ideation) && this.props.errors.ideation}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step1;