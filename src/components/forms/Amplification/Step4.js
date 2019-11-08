import React, { Component } from 'react';
import { Row, Col, Typography, Select } from 'antd';

const { Text } = Typography;

export class Step4 extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <div><Text>COMPETITION</Text></div>
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="List key benchmark brands/product in your competitive landscape"
                            value={this.props.values.competitiveProduct}
                            onChange={(value)=>this.props.setFieldValue('competitiveProduct', value)} tokenSeparators={[',']}
                        ></Select>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step4;