import React, { Component } from 'react';
import { Row, Col, Typography, Checkbox, Input } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

const options = [
    { label: 'Awareness', value: 'awareness' },
    { label: 'Consideration', value: 'consideration' },
    { label: 'Convertions', value: 'convertions' },
    { label: 'Others (Please Specify)', value: 'others' }
]

export class Step2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>OBJECTIVES</Text></div>
                        <Checkbox.Group
                            name='objectives'
                            options={options}
                            value={this.props.values.objectives}
                            onChange={(checkedValue)=>this.props.setFieldValue('objectives', checkedValue)}
                        />
                        <Input style={{ width: 200 }}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>KEY CHALLENGES</Text></div>
                        <TextArea
                            rows={4}
                            placeholder="Please provide the key challenges that campaign aims to resolve"
                            name="keyChallenges"
                            value={this.props.values.keyChallenges}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step2;