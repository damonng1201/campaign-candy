import React, { Component } from 'react';
import { ErrorMessage } from 'formik';
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
                            <Checkbox value="Image" className={CustomStyle.checkboxText}>Image</Checkbox>
                            <Checkbox value="Audio" className={CustomStyle.checkboxText}>Audio</Checkbox>
                            <Checkbox value="Video" className={CustomStyle.checkboxText}>Video</Checkbox>
                            <Checkbox value="Article" className={CustomStyle.checkboxText}>Article</Checkbox>
                            <Checkbox value="HTML5" className={CustomStyle.checkboxText}>HTML5</Checkbox>
                            <Checkbox value="HTML5 + Video" className={CustomStyle.checkboxText}>HTML5 + Video</Checkbox>
                        </Checkbox.Group>
                        <ErrorMessage name="creativeFormat" render={msg => <div className={CustomStyle.errorMsg}>{msg}</div>} />
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