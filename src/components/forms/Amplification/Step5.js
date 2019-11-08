import React, { Component } from 'react';
import { Row, Col, Typography, Input } from 'antd';

const { Text } = Typography;
const { TextArea } = Input;

export class Step5 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>COMMUNICATION / MESSAGE / PROPOSITION</Text></div>
                        <TextArea
                            rows={4}
                            name="message"
                            placeholder="What is/will be your key digital campaign creative message"
                            value={this.props.values.message}
                            onChange={this.props.handleChange}
                            //helperText={(this.props.errors.message && this.props.touched.message) && this.props.errors.message}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step5;