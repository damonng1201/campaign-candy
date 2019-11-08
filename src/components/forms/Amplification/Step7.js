import React, { Component } from 'react';
import { Row, Col, Typography, Checkbox } from 'antd';

const { Text } = Typography;

const options = [
    { label: 'Display (Print, Digital, OOH)', value: 'Display (Print, Digital, OOH)' },
    { label: 'Audio (Radio, Podcast)', value: 'Audio (Radio, Podcast)' },
    { label: 'Video', value: 'Video' },
    { label: 'Experiential', value: 'Experiential' }
]

export class Step7 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>AMPLIFICATION FORMATS</Text></div>
                        <Checkbox.Group
                            name='amplificationFormat'
                            options={options}
                            value={this.props.values.amplificationFormat}
                            onChange={(checkedValue)=>this.props.setFieldValue('amplificationFormat', checkedValue)}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step7;