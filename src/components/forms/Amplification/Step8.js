import React, { Component } from 'react';
import { ErrorMessage } from 'formik';
import { Row, Col, Typography, Checkbox, Input } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title, Text } = Typography;

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
                        <Title level={4}>MEASUREMENT</Title>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>How is this measured? What would be your KPI to deliver?</Text>
                        </div>
                        <Checkbox.Group
                            name='measurement'
                            value={this.props.values.measurement}
                            onChange={(checkedValue)=>this.props.setFieldValue('measurement', checkedValue)}
                        >
                            <Checkbox value="CPM" className={CustomStyle.checkboxText}>CPM</Checkbox>
                            <Checkbox value="CPV" className={CustomStyle.checkboxText}>CPV</Checkbox>
                            <Checkbox value="CPC" className={CustomStyle.checkboxText}>CPC</Checkbox>
                            <Checkbox value="Others" className={CustomStyle.checkboxText} onChange={(e)=>{this.setState({enableOthersField:e.target.checked})}}>Others (Please specify)</Checkbox>
                        </Checkbox.Group>
                        <ErrorMessage name="measurement" render={msg => <div className={CustomStyle.errorMsg}>{msg}</div>} />
                        {this.state.enableOthersField &&(
                            <Input 
                                name="measurementOthers"
                                value={this.props.values.measurementOthers}
                                onChange={this.props.handleChange}
                                style={{ width: 200 }}
                            />
                        )}
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step8;