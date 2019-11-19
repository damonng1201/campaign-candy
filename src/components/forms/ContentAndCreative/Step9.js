import React, { Component } from 'react';
import { Row, Col, Typography, InputNumber } from 'antd';

const { Title } = Typography;

export class Step9 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}>BUDGET</Title>
                        <InputNumber
                            defaultValue={0}
                            name="budget"
                            value={this.props.values.budget}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={value => this.props.setFieldValue('budget', value)}
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step9;