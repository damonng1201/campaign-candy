import React, { Component } from 'react';
import { Row, Col, Typography, Select } from 'antd';

const { Text } = Typography;
const { Option } = Select;

const targetAudiences = [
    'Gen Z',
    'Mobile Millenials',
    'Millennial Parents',
    'Millennial PMEBs',
    'New Homeowners',
    'Premium millennials',
    'Trendy millennials',
    'Gen X',
    'Parents with Teenagers',
    'Gen X PMEBs',
    'Yummy Mummies',
    'Modern Daddies',
    'Singletons',
    'Gen X males',
    'Merdeka Gen',
    'Digitally Savvy',
    'Active Aging',
    'Empty Nesters',
    'Luxury Seekers',
    'Stylish Spenders',
    'Aspirants',
    'Crazy Rich Asians',
    'Food lovers',
    'Modern Foodies',
    'Racial Community',
    'Malay Community',
    'Traditional',
    'Modern',
    'New citizens/residents',
    'Expats',
    'PRCs',
    'Singapore Inc',
    'Next Gen Towkways',
    'Working adults',
    'Highly strung Singaporeans',
    'Value seekers',
    'Experiential seekers',
    'Grocery buyers',
    'HENRYs of Singapore',
    'Home owners looking to upgrade',
    'Home owners keen on investments',
    'Luxury travellers',
    'Key Business influencers',
    'Gamers',
    'P25+ with PI > $5k'
];

const options = [];
for(let i=0; i<targetAudiences.length; i++) {
    options.push(<Option key={targetAudiences[i]}>{targetAudiences[i]}</Option>);
}

export class Step3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>TARGET AUDIENCES</Text></div>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            value={this.props.values.targetAudiences}
                            onChange={(value)=>this.props.setFieldValue('targetAudiences', value)}
                        >
                            {options}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>ADDITIONAL AUDIENCES</Text></div>
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="Please enter"
                            value={this.props.values.additionalAudiences}
                            onChange={(value)=>this.props.setFieldValue('additionalAudiences', value)} tokenSeparators={[',']}
                        ></Select>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step3;