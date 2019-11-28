import React, { Component } from 'react';
import { Formik } from 'formik';
import { Layout, Steps, Row, Col, Button, Spin, message } from 'antd';
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
import Step9 from './Step9';
import Step10 from './Step10';
import Submission from '../../screens/Submission';
import moment from 'moment';
import axios from 'axios';
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
    'Step 10 of 10',
    'Submission'
];

export class ContentCreativeForm extends Component {
    state = {
        step: 1,
        loading: false
    }

    toggle = value => {
        this.setState({ loading: value });
    };

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

    handleSubmit = (values, formikBag) => {
        const {setSubmitting, validateForm, setTouched} = formikBag;
        
        if (this.state.step !== steps.length){
            setSubmitting(false);
            this.nextStep();
            validateForm();
            setTouched({});
            return;
        }

        //this.toggle(true);
        axios.post('https://www.sphclass.com.sg/guidedselling/api/sendmail.php', { values })
            .then(res => {
                //this.setState({ loading: false });
                message.info('Email sent.');
                console.log(res);
                console.log(res.data);
                setSubmitting(false);
            })
            .catch(function (error) {
                //this.setState({ loading: false });
                // handle error
                message.error('Error');
                console.log(error);
                setSubmitting(false);
            });
    };

    render() {
        const { step } = this.state;

        return (
            <Spin tip="Loading..." spinning={this.state.loading} delay={500}>
                <Layout>
                    <Header style={{ margin: '20px auto', backgroundColor: 'inherit' }}>
                        <Link to="/"><img style={{ maxHeight: '100%' }} src={ require('../../../images/logo.png') } alt="logo"></img></Link>
                    </Header>
                    <Content style={{ width: '90%', margin: 'auto' }}>
                        {step > 1 && step !== steps.length + 1 && (
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
                                launchDate: moment(Date.now()).format('DD/MM/YYYY'),
                                campaignEndDate: moment(Date.now()).format('DD/MM/YYYY'),
                                background: '',
                                ideation: '',
                                objectives: [],
                                keyChallenges: '',
                                targetAudience: [],
                                additionalAudience: [],
                                budget: 0
                            }}
                            onSubmit={this.handleSubmit}
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
                                    {step === 10 && (
                                        <Step9
                                            values={props.values}
                                            touched={props.touched}
                                            errors={props.errors}
                                            handleChange={props.handleChange}
                                            handleBlur={props.handleBlur}
                                            setFieldValue={props.setFieldValue}
                                        />
                                    )}
                                    {step === 11 && (
                                        <Step10
                                            values={props.values}
                                            touched={props.touched}
                                            errors={props.errors}
                                            handleChange={props.handleChange}
                                            handleBlur={props.handleBlur}
                                            setFieldValue={props.setFieldValue}
                                        />
                                    )}
                                    {step === 12 && (
                                        <Submission
                                            values={props.values}
                                            touched={props.touched}
                                            errors={props.errors}
                                            handleChange={props.handleChange}
                                            handleBlur={props.handleBlur}
                                        />
                                    )}
                                    <Row type="flex" justify="end">
                                        { step > 1 && step !== steps.length + 1 && (
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
                                    </Row>
                                </form>
                            )}
                        </Formik>
                    </Content>
                    <FooterSection />
                </Layout>
            </Spin>
        )
    }
}

export default ContentCreativeForm;