import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Layout, Row, Col, Button, Spin, message } from 'antd';
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

//const { Step } = Steps;
const { Header, Content } = Layout;

const StepZero = {
    label: 'Step 0',
    validationSchema: Yup.object().shape({
        accountLead: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Sales/Account Lead is required'),
        advertiserBrand: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Advertiser/Agency Brand is required'),
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required'),
        projectTitle: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Project Title is required'),
        launchDate: Yup.string()
            .required('Launch Date is required'),
        campaignEndDate: Yup.string()
            .required('Campaign End Date is required')
    })
};

const StepOne = {
    label: 'Step 1',
    validationSchema: Yup.object().shape({
        background: Yup.string().required('Please select Background'),
        ideation: Yup.string().required('Ideation is required')
    })
};

const StepTwo = {
    label: 'Step 2',
    validationSchema: Yup.object().shape({
        objectives: Yup.array().required('At least one objective is required'),
        objectiveOthers: Yup.string().when('objectives', {
            is: 'Others',
            then: Yup.string().required('Other field is required')
        }),
        keyChallenges: Yup.string().required('Key Challenges is required')
    })
};

const StepThree = {
    label: 'Step 3',
    validationSchema: Yup.object().shape({
        targetAudience: Yup.array().required('At least one Target Audience is required')
    })
};

const StepFour = {
    label: 'Step 4',
    validationSchema: Yup.object().shape({
        competitiveProduct: Yup.array().required('At least one Benchmark Brand/Product is required')
    })
};

const StepFive = {
    label: 'Step 5',
    validationSchema: Yup.object().shape({
        message: Yup.string().required('Message is required')
    })
};

const StepSix = {
    label: 'Step 6',
    validationSchema: Yup.object().shape({
        creativeFormat: Yup.array().required('At least one Creative Format is required')
    })
};

const StepSeven = {
    label: 'Step 7',
    validationSchema: Yup.object().shape({
        amplificationFormat: Yup.array().required('At least one Amplification Format is required')
    })
};

const StepEight = {
    label: 'Step 8',
    validationSchema: Yup.object().shape({
        measurement: Yup.array().required('At least one Measurement is required')
    })
};

const StepNine = {
    label: 'Step 9',
    validationSchema: Yup.object().shape({
        budget: Yup.number().min(1)
    })
};

const StepTen = {
    label: 'Step 10',
    validationSchema: Yup.object().shape({
        deliverables: Yup.array().required('At least one Deliverable is required')
    })
};

const StepSubmission = {
    label: 'Step Submission',
    validationSchema: Yup.object().shape({
        email: Yup.string().matches(/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/g, {
            message: 'Your input contains invalid email(s)',
            excludeEmptyString: true 
        }).required('Email is required')
    })
};

const steps = [
    StepZero,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix,
    StepSeven,
    StepEight,
    StepNine,
    StepTen,
    StepSubmission
];

export class AmplificationForm extends Component {
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

        this.toggle(true);
        axios.post('https://www.sphclass.com.sg/guidedselling/api/sendmail.php', { values })
            .then(res => {
                this.toggle(false);
                message.info('Email sent.');
                console.log(res);
                console.log(res.data);
                setSubmitting(false);
            })
            .catch(function (error) {
                this.toggle(false);
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
                                objectiveOthers: '',
                                keyChallenges: '',
                                targetAudience: [],
                                additionalAudience: [],
                                competitiveProduct: [],
                                message: '',
                                creativeFormat: [],
                                amplificationFormat: [],
                                measurement: [],
                                measurementOthers: '',
                                budget: 0,
                                completionDate: moment(Date.now()).format('DD/MM/YYYY'),
                                presentationDate: moment(Date.now()).format('DD/MM/YYYY'),
                                deliverables: '',
                                deliverableOthers: '',
                                otherMandates: '',
                                email: ''
                            }}
                            validationSchema={steps[this.state.step - 1].validationSchema}
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
                                        { step > 1 && step !== steps.length && (
                                            <Col className={ CustomStyle.btnContainer }>
                                                <Button type="primary" onClick={this.previousStep}>
                                                    Back
                                                </Button>
                                            </Col>
                                        )}
                                        { step < steps.length && (
                                            <Col className={ CustomStyle.btnContainer }>
                                                <Button type="primary" onClick={props.handleSubmit}>
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

export default AmplificationForm;