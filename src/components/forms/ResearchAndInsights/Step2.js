import React, { Component } from 'react';
import { Row, Col, Typography, Icon, Checkbox, Input } from 'antd';
import CustomStyle from '../../../style.module.css';

const { TextArea } = Input;
const { Title, Text } = Typography;

export class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = { enableOthersField: this.props.values.objectiveOthers ? true : false }
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}><Icon type="global" /> OBJECTIVES</Title>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>What do you hope to validate from this research?</Text>
                        </div>
                        <Checkbox.Group
                            name='objectives'
                            value={this.props.values.objectives}
                            onChange={(checkedValue)=>this.props.setFieldValue('objectives', checkedValue)}
                        >
                            <Checkbox value="Brand awareness" className={CustomStyle.checkboxText}>Brand awareness</Checkbox>
                            <Checkbox value="Brand image" className={CustomStyle.checkboxText}>Brand image</Checkbox>
                            <Checkbox value="Consumer perception" className={CustomStyle.checkboxText}>Consumer perception</Checkbox>
                            <Checkbox value="Consumer attitudes" className={CustomStyle.checkboxText}>Consumer attitudes</Checkbox>
                            <Checkbox value="Buyer behavior" className={CustomStyle.checkboxText}>Buyer behavior</Checkbox>
                            <Checkbox value="Product satisfaction" className={CustomStyle.checkboxText}>Product satisfaction</Checkbox>
                            <Checkbox value="Consumer experience (good and bad)" className={CustomStyle.checkboxText}>Consumer experience (good and bad)</Checkbox>
                            <Checkbox value="Intent to purchase behavior" className={CustomStyle.checkboxText}>Intent to purchase behavior</Checkbox>
                            <Checkbox value="Others" className={CustomStyle.checkboxText} onChange={(e)=>{this.setState({enableOthersField:e.target.checked})}}>Others (Please specify)</Checkbox>
                        </Checkbox.Group>
                        {this.state.enableOthersField &&(
                            <Input 
                                name="objectiveOthers"
                                value={this.props.values.objectiveOthers}
                                onChange={this.props.handleChange}
                                style={{ width: 200 }}
                            />
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ padding: '1%' }}>
                        <Title level={4}><Icon type="key" /> KEY CHALLENGES</Title>
                        <div className={CustomStyle.labelContainer}>
                            <Text strong className={CustomStyle.labelText}>What do you wish to validate from your campaign?</Text>
                        </div>
                        <TextArea
                            rows={4}
                            name="keyChallenges"
                            value={this.props.values.keyChallenges}
                            onChange={this.props.handleChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Step2;