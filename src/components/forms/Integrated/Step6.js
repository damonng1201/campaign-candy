import React, { Component } from 'react';
import { Row, Col, Typography, Checkbox, Select } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title } = Typography;

export class Step6 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>CREATIVE FORMATS AVAILABLE</Title>
                        <Checkbox.Group
                            name='creativeFormat'
                            value={this.props.values.creativeFormat}
                            onChange={(checkedValue)=>this.props.setFieldValue('creativeFormat', checkedValue)}
                        >
                            <Checkbox value="Print" className={CustomStyle.checkboxText}>Print</Checkbox>
                            <Checkbox value="Digital" className={CustomStyle.checkboxText}>Digital</Checkbox>
                            <Checkbox value="Video" className={CustomStyle.checkboxText}>Video</Checkbox>
                            <Checkbox value="Out Of Home (Digital)" className={CustomStyle.checkboxText}>Out Of Home (Digital)</Checkbox>
                            <Checkbox value="Out Of Home (Static)" className={CustomStyle.checkboxText}>Out Of Home (Static)</Checkbox>
                            <Checkbox value="Microsite" className={CustomStyle.checkboxText}>Microsite</Checkbox>
                        </Checkbox.Group>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>New Material</Title>
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