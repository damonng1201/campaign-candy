import React, { Component } from 'react';
import { Formik } from 'formik';
import { Layout, Row, Col, Typography, Input, Select, DatePicker, InputNumber, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import FooterSection from '../../FooterSection';
import moment from 'moment';
import axios from 'axios';
import CustomStyle from '../../../style.module.css'; 

const { Header, Content } = Layout;
const { Text } = Typography;
const { Option } = Select;

const pubs = [
    'ST',
    'BT',
    'BH',
    'NP',
    'ZB',
    'SM',
    'WB'
];

const categories = [
    'Property',
    'Lifestyle',
    'Banking',
    'Travel'
];

const adPackages = [
    'Standard Banner | ROS - IMU (300x250)',
    'Social Cards | ROS Articles - IMU (300x250)',
    'Transitional Ad (Non-Video)'
];

const pubOptions = [];
for(let i=0; i<pubs.length; i++) {
    pubOptions.push(<Option key={pubs[i]}>{pubs[i]}</Option>);
}

const categoryOptions = [];
for(let i=0; i<categories.length; i++) {
    categoryOptions.push(<Option key={categories[i]}>{categories[i]}</Option>);
}

const adPackageOptions = [];
for(let i=0; i<adPackages.length; i++) {
    adPackageOptions.push(<Option key={adPackages[i]}>{adPackages[i]}</Option>);
}

export class DigitalAdsForm extends Component {
    state = {
        loading: false
    }

    toggle = value => {
        this.setState({ loading: value });
    };

    render() {
        return (
            <Spin tip="Loading..." spinning={this.state.loading} delay={500}>
                <Layout>
                    <Header style={{ margin: '20px auto', backgroundColor: 'inherit' }}>
                        <Link to="/"><img style={{ maxHeight: '100%' }} src={ require('../../../images/logo.png') } alt="logo"></img></Link>
                    </Header>
                    <Content style={{ width: '90%', margin: 'auto' }}>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                businessName: '',
                                email: '',
                                phone: '',
                                alternativeContact: '',
                                site: [],
                                category: '',
                                adPackage: '',
                                priceModel: 'CPM',
                                basePrice: 15,
                                quantity: 0,
                                campaignName: '',
                                campaignStartDate: moment(Date.now()).format('DD/MM/YYYY'),
                                campaignEndDate: moment(Date.now()).format('DD/MM/YYYY'),
                                budget: 0,
                                frequencyCap: 0
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                this.toggle(true);
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 1000);
                                /*axios.post('http://localhost:8888/api/sendmail.php', { values })
                                    .then(res => {
                                        this.toggle(false);
                                        console.log(res);
                                        console.log(res.data);
                                    })
                                    .catch(function (error) {
                                        this.toggle(false);
                                        // handle error
                                        console.log(error);
                                    });*/
                            }}
                        >
                            {props => (
                                <form onSubmit={props.handleSubmit}>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>FIRST NAME</Text></div>
                                            <Input
                                                name="firstName"
                                                value={props.values.firstName}
                                            />
                                        </Col>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>LAST NAME</Text></div>
                                            <Input
                                                name="lastName"
                                                value={props.values.lastName}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>BUSINESS NAME (OPTIONAL)</Text></div>
                                            <Input
                                                name="businessName"
                                                value={props.values.businessName}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>EMAIL</Text></div>
                                            <Input
                                                name="email"
                                                value={props.values.email}
                                            />
                                        </Col>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>PHONE</Text></div>
                                            <Input
                                                name="phone"
                                                value={props.values.phone}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>WHATSAPP/SKYPE/HANGOUT</Text></div>
                                            <Input
                                                name="alternativeContact"
                                                value={props.values.alternativeContact}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>SELECT SITE (ONE OR MULTIPLE)</Text></div>
                                            <Select
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                placeholder="Please select site"
                                                value={props.values.site}
                                                onChange={(value)=>props.setFieldValue('site', value)}
                                            >
                                                {pubOptions}
                                            </Select>
                                        </Col>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>SELECT CATEGORY</Text></div>
                                            <Select
                                                style={{ width: '100%' }}
                                                value={props.values.category}
                                                onChange={(value)=>props.setFieldValue('category', value)}
                                            >
                                                {categoryOptions}
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>SELECT AD PACKAGE</Text></div>
                                            <Select
                                                style={{ width: '100%' }}
                                                value={props.values.adPackage}
                                                onChange={(value)=>props.setFieldValue('adPackage', value)}
                                            >
                                                {categoryOptions}
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>PRICE MODEL</Text></div>
                                            <Input name="priceModel" value={props.values.priceModel} readOnly/>
                                        </Col>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>BASE PRICE</Text></div>
                                            <Input name="basePrice" value={props.values.basePrice} readOnly/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>CAMPAIGN NAME</Text></div>
                                            <Input
                                                name="campaignName"
                                                value={props.values.campaignName}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>SET CAMPAIGN START DATE</Text></div>
                                            <DatePicker
                                                format="DD/MM/YYYY"
                                                value={moment(props.values.campaignStartDate, 'DD/MM/YYYY')}
                                                onChange={(date,dateString)=>props.setFieldValue('campaignStartDate', dateString)}
                                                allowClear={false}
                                                style={{ width: '100%' }}
                                            />
                                        </Col>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>SET CAMPAIGN END DATE</Text></div>
                                            <DatePicker
                                                format="DD/MM/YYYY"
                                                value={moment(props.values.campaignEndDate, 'DD/MM/YYYY')}
                                                onChange={(date,dateString)=>props.setFieldValue('campaignEndDate', dateString)}
                                                allowClear={false}
                                                style={{ width: '100%' }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>BUDGET</Text></div>
                                            <InputNumber
                                                defaultValue={0}
                                                name="budget"
                                                value={props.values.budget}
                                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                onChange={value => props.setFieldValue('budget', value)}
                                                style={{ width: '100%' }}
                                            />
                                        </Col>
                                        <Col xs={24} sm={12} lg={12} className={CustomStyle.colPadding}>
                                            <div className={CustomStyle.labelContainer}><Text strong className={CustomStyle.labelText}>FREQUENCY CAP</Text></div>
                                            <InputNumber
                                                defaultValue={0}
                                                name="frequencyCap"
                                                value={props.values.frequencyCap}
                                                onChange={value => props.setFieldValue('frequencyCap', value)}
                                                style={{ width: '100%' }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row type="flex" justify="center">
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
            </Spin>
        )
    }
}

export default DigitalAdsForm;