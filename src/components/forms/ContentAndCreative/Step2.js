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
                            <Text strong className={CustomStyle.labelText}>What do you hope to communicate with this campaign?</Text>
                        </div>
                        <Checkbox.Group
                            name='objectives'
                            value={this.props.values.objectives}
                            onChange={(checkedValue)=>this.props.setFieldValue('objectives', checkedValue)}
                        >
                            <Checkbox value="Awareness" className={CustomStyle.checkboxText}>Awareness</Checkbox>
                            <Checkbox value="Consideration" className={CustomStyle.checkboxText}>Consideration</Checkbox>
                            <Checkbox value="Desirability" className={CustomStyle.checkboxText}>Desirability</Checkbox>
                            <Checkbox value="Knowledge" className={CustomStyle.checkboxText}>Knowledge</Checkbox>
                            <Checkbox value="Preference" className={CustomStyle.checkboxText}>Preference</Checkbox>
                            <Checkbox value="Convertions" className={CustomStyle.checkboxText}>Convertions</Checkbox>
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
                            <Text strong className={CustomStyle.labelText}>What do you hope to achieve or deliver withe this campaign?</Text>
                        </div>
                        <TextArea
                            rows={4}
                            placeholder="Please provide the key challenges that campaign aims to resolve"
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