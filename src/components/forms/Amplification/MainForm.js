import React, { Component } from 'react';
import { Formik } from 'formik';
import { Layout, Steps, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import FooterSection from '../../FooterSection';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import moment from 'moment';
import CustomStyle from '../../../style.module.css'; 

const { Step } = Steps;
const { Header, Content } = Layout;

const steps = [
    'Step 1 of 10', 
    'Step 2 of 10', 
    'Step 3 of 10', 
    'Step 4 of 10', 
    'Step 5 of 10', 
    'Step 6 of 10', 
    'Step 7 of 10', 
    'Step 8 of 10', 
    'Step 9 of 10', 
    'Step 10 of 10'
];

export class AmplificationForm extends Component {
    state = {
        step: 1
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState ({
            step: step + 1
        });
    }

    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    render() {
        const { step } = this.state;

        return (
            <Layout>
                <Header style={{ margin: '20px auto', backgroundColor: 'inherit' }}>
                    <Link to="/"><img style={{ maxHeight: '100%' }} src={ require('../../../images/logo.png') } alt="logo"></img></Link>
                </Header>
                <Content style={{ width: '90%', margin: 'auto' }}>
                    {step > 1 && (
                        <Steps className={CustomStyle.steps} size="small" current={this.state.step - 2}>
                            {steps.map(item => (
                                <Step key={item} />
                            ))}
                        </Steps>
                    )}
                    <Formik
                        initialValues={{
                            accountLead: '',
                            advertiserBrand: '',
                            name: '',
                            projectTitle: '',
                            launchDate: moment(Date.now()),
                            campaignEndDate: moment(Date.now()),
                            background: '',
                            ideation: '',
                            objectives: [],
                            keyChallenges: '',
                            targetAudience: [],
                            additionalAudience: []
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {props => (
                            <form onSubmit={props.handleSubmit}>
                                {step === 1 && (
                                    <Step0
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                {step === 2 && (
                                    <Step1
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                    />
                                )}
                                {step === 3 && (
                                    <Step2
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                {step === 4 && (
                                    <Step3
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                {step === 5 && (
                                    <Step4
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                {step === 6 && (
                                    <Step5
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                {step === 7 && (
                                    <Step6
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                {step === 8 && (
                                    <Step7
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                {step === 9 && (
                                    <Step8
                                        values={props.values}
                                        touched={props.touched}
                                        errors={props.errors}
                                        handleChange={props.handleChange}
                                        handleBlur={props.handleBlur}
                                        setFieldValue={props.setFieldValue}
                                    />
                                )}
                                <Row type="flex" justify="end">
                                    { step > 1 && (
                                        <Col className={ CustomStyle.btnContainer }>
                                            <Button type="primary" onClick={this.previousStep}>
                                                Back
                                            </Button>
                                        </Col>
                                    )}
                                    { step < steps.length + 1 && (
                                        <Col className={ CustomStyle.btnContainer }>
                                            <Button type="primary" onClick={this.nextStep}>
                                                Next
                                            </Button>
                                        </Col>
                                    )}
                                    <Col className={ CustomStyle.btnContainer }>
                                        <Button type="danger" htmlType="submit" disabled={props.isSubmitting}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        )}
                    </Formik>
                </Content>
                <FooterSection />
            </Layout>
        )
    }
}

export default AmplificationForm;