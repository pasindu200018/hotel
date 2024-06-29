import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommanFooter1 from '../../CommanFooter1';
import '../../../../styles/css/signup.css'
import SimpleHeader from '../../SimpleHeader';

const SignUpStep5 = (props) => {
    const [address, setaddress] = useState("");
    const [propertyName, setPropertyName] = useState("");
    const [city, setcity] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [unitNumber, setunitNumber] = useState("");
    const [area, setarea] = useState("");
    const [zipCode, setzipCode] = useState("");

    return (
        <div className="hk-pg-wrapper py-0">
            <div className="hk-pg-body py-0">
                <Container fluid>
                    <Row className="auth-split">
                        <SimpleHeader />
                        <Col xl={7} lg={6} md={7} sm={10} className="position-relative mx-auto">
                            <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                                <Form className="w-100">
                                    <Row>
                                        <Col xxl={7} xl={7} lg={10} className="mx-auto " gap={5}>
                                            <Stack gap={3} className='form-step'>
                                                <span className='fs-7 text-light'>Step 1 of 2</span>
                                                <h4 className="font-scale-vf">Let's start with the basics</h4>
                                                <p className='fw-bolder text-black'>Name of property</p>

                                                <p>Please provide the official name of your property, for example the one you use on your own website.</p>
                                                <Form.Control onChange={(e) => { setPropertyName(e.target.value) }} placeholder="Enter your property name" type="text" />

                                                <p className='fw-bolder text-black'>Property address</p>
                                                <p>Please provide your address using Latin or Roman characters. The Latin or Roman alphabet uses characters like a, b, and c.</p>

                                                <p className='fw-bolder text-black'>City</p>
                                                <Form.Group className='inp-Box'>
                                                    <Form.Label>Select the city</Form.Label>
                                                    <Form.Select onChange={(e) => { setcity(e.target.value) }}>
                                                        <option value="1">Abidabi</option>
                                                        <option value="1">Abidabi</option>
                                                        <option value="1">Abidabi</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <p className='fw-bolder text-black'>Street address</p>
                                                <Form.Control onChange={(e) => { setStreetAddress(e.target.value) }} placeholder="Enter street address" type="text" />

                                                <p className='fw-bolder text-black'>Unit number</p>
                                                <Form.Control onChange={(e) => { setunitNumber(e.target.value) }} placeholder="Enter unit number" type="text" />

                                                <p className='fw-bolder text-black'>Area</p>
                                                <Form.Group className='inp-Box'>
                                                    <Form.Label>Select area</Form.Label>
                                                    <Form.Select onChange={(e) => { setarea(e.target.value) }}>
                                                        <option value="1">Al Reem Island</option>
                                                        <option value="1">Al Reem Island</option>
                                                        <option value="1">Al Reem Island</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <p className='fw-bolder text-black'>Zip code</p>
                                                <Form.Control onChange={(e) => { setzipCode(e.target.value) }} placeholder="Enter zip code" type="text" />

                                                <Button variant='dark' className="btn-rounded  btn-block mb-3" as={Link} to="signup-step-6" >Next</Button>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            {/* Page Footer */}
                            <CommanFooter1 />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default SignUpStep5
