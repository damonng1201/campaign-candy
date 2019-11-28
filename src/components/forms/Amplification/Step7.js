import React, { Component } from 'react';
import { ErrorMessage } from 'formik';
import { Row, Col, Typography, Checkbox } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title } = Typography;

export class Step7 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>AMPLIFICATION FORMATS</Title>
                        <Checkbox.Group
                            name='amplificationFormat'
                            value={this.props.values.amplificationFormat}
                            onChange={(checkedValue)=>this.props.setFieldValue('amplificationFormat', checkedValue)}
                        >
                            <Checkbox value="Display (Print, Digital, OOH)" className={CustomStyle.checkboxText}>Display (Print, Digital, OOH)</Checkbox>
                            <Checkbox value="Audio (Radio, Podcast)" className={CustomStyle.checkboxText}>Audio (Radio, Podcast)</Checkbox>
                            <Checkbox value="Video" className={CustomStyle.checkboxText}>Video</Checkbox>
                            <Checkbox value="Experiential" className={CustomStyle.checkboxText}>Experiential</Checkbox>
                        </Checkbox.Group>
                        <ErrorMessage name="amplificationFormat" render={msg => <div className={CustomStyle.errorMsg}>{msg}</div>} />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step7;