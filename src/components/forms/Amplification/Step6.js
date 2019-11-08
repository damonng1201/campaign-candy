import React, { Component } from 'react';
import { Row, Col, Typography, Checkbox, Select } from 'antd';

const { Text } = Typography;

const options = [
    { label: 'Image', value: 'Image' },
    { label: 'Audio', value: 'Audio' },
    { label: 'Video', value: 'Video' },
    { label: 'Article', value: 'Article' },
    { label: 'HTML5', value: 'HTML5' },
    { label: 'HTML5 + Video', value: 'HTML5 + Video' }
]

export class Step6 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>CREATIVE FORMATS AVAILABLE</Text></div>
                        <Checkbox.Group
                            name='creativeFormat'
                            options={options}
                            value={this.props.values.creativeFormat}
                            onChange={(checkedValue)=>this.props.setFieldValue('creativeFormat', checkedValue)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>New Material</Text></div>
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="Please specify"
                            value={this.props.values.newMaterial}
                            onChange={(value)=>this.props.setFieldValue('newMaterial', value)} tokenSeparators={[',']}
                        ></Select>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step6;