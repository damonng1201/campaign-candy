import React, { Component } from 'react';
import { Row, Col, Typography, Checkbox, Input } from 'antd';

const { Text } = Typography;

const options = [
    { label: 'CPM', value: 'CPM' },
    { label: 'CPV', value: 'CPV' },
    { label: 'CPC', value: 'CPC' }
]

export class Step8 extends Component {
    constructor(props) {
        super(props);
        this.state = { enableOthersField: this.props.values.measurementOthers ? true : false }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>MEASUREMENT</Text></div>
                        <Checkbox.Group
                            name='measurement'
                            options={options}
                            value={this.props.values.measurement}
                            onChange={(checkedValue)=>this.props.setFieldValue('measurement', checkedValue)}
                        />
                        <Checkbox checked={this.props.values.measurementOthers} onChange={(e)=>{this.setState({enableOthersField:e.target.checked})}}>Others (Please specify)</Checkbox>
                        {this.state.enableOthersField &&(
                            <Input 
                                name="measurementOthers"
                                value={this.props.values.measurementOthers}
                                onChange={this.props.handleChange}
                            />
                        )}
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step8;