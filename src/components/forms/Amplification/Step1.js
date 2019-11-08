import React, { Component } from 'react';
import { Row, Col, Typography, Radio, Input } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

export class Step1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>Background</Text></div>
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
                        <div><Text>IDEATION</Text></div>
                        <TextArea
                            rows={4}
                            name="ideation"
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