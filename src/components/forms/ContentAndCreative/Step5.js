import React, { Component } from 'react';
import { Row, Col, Typography, Input, Select } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const buyingCycles = [
    'Not in the market',
    'Lead but not ready to buy',
    'Ready to buy',
    'Existing customer',
    'Ready to buy and expand',
    'Not applicable'
];

const buyingCycleOptions = [];
for(let i=0; i<buyingCycles.length; i++) {
    buyingCycleOptions.push(<Option key={buyingCycles[i]}>{buyingCycles[i]}</Option>);
}

const tones = [
    'Serious',
    'Analytical',
    'Conversational / Informal',
    'Energetic',
    'Innovative / Disrupter',
    'Persuasive',
    'Friendly',
    'Heartfelt / Emotive',
    'Corporate / Informative',
    'Fun and Playful',
    'Urgent',
    'Artistic / Discriptive',
    'Instructive',
    'Others'
];

const toneOptions = [];
for(let i=0; i<tones.length; i++) {
    toneOptions.push(<Option key={tones[i]}>{tones[i]}</Option>);
}

export class Step5 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>PRAGMATIC STORY</Title>
                        <TextArea
                            rows={6}
                            name="pragmaticStory"
                            placeholder="Describe the practical features and benefits of the brand and product or service"
                            value={this.props.values.pragmaticStory}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>EMOTIVE STORY</Title>
                        <TextArea
                            rows={6}
                            name="emotiveStory"
                            placeholder="Describe the emotional benefits of the brand and product or service"
                            value={this.props.values.emotiveStory}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>BUYING CYCLE</Title>
                        <Select
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            value={this.props.values.buyingCycles}
                            onChange={(value)=>this.props.setFieldValue('buyingCycles', value)}
                        >
                            {buyingCycleOptions}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>TONE SELECTOR AND MESSAGING</Title>
                        <Select
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            value={this.props.values.tones}
                            onChange={(value)=>this.props.setFieldValue('tones', value)}
                        >
                            {toneOptions}
                        </Select>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step5;