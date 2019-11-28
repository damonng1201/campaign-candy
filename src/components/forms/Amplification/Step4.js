import React, { Component } from 'react';
import { ErrorMessage } from 'formik';
import { Row, Col, Typography, Select } from 'antd';
import CustomStyle from '../../../style.module.css';

const { Title } = Typography;

export class Step4 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>COMPETITION</Title>
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="List key benchmark brands/product in your competitive landscape"
                            value={this.props.values.competitiveProduct}
                            onChange={(value)=>this.props.setFieldValue('competitiveProduct', value)} tokenSeparators={[',']}
                        ></Select>
                        <ErrorMessage name="competitiveProduct" render={msg => <div className={CustomStyle.errorMsg}>{msg}</div>} />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step4;