import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommanFooter1 from '../../CommanFooter1';
import * as Icons from 'tabler-icons-react';

import '../../../../styles/css/signup.css'
import SimpleHeader from '../../SimpleHeader';

const Signup = (props) => {
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
                                                <span className='fs-7 text-light'>Step 2 of 2</span>
                                                <h4 className="font-scale-vf">Tell us a little about your property</h4>
                                                <p className='fw-bolder text-black'>Property name</p>
                                                <Form.Group className='inp-Box'>
                                                    <Form.Label>Enter your property name</Form.Label>
                                                    <Form.Control onChange={(e) => { setPropertyName(e.target.value) }} placeholder="Kaasdcc" type="text" />
                                                </Form.Group>

                                                <p className='fw-bolder text-black'>Property Type</p>

                                                <Form.Group className='inp-Box'>
                                                    <Form.Label>Select property type</Form.Label>
                                                    <Form.Select onChange={(e) => { setcity(e.target.value) }} >
                                                        <option value="">-Select-</option>
                                                        <option value="1">Abidabi</option>
                                                        <option value="1">Abidabi</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <p className='fw-bolder text-black'>Number of rooms</p>
                                                <Form.Control onChange={(e) => { setStreetAddress(e.target.value) }} placeholder="Enter Number of rooms" type="text" />

                                                <p className='fw-bolder text-black'>Legal name of your property</p>
                                                <Form.Control onChange={(e) => { setStreetAddress(e.target.value) }} placeholder="Enter Legal name of your property" type="text" />

                                                <p className='fw-bolder text-black'>Currency</p>
                                                <Form.Group className='inp-Box'>
                                                    <Form.Label>Select currency</Form.Label>
                                                    <Form.Select onChange={(e) => { setcity(e.target.value) }} aria-label="Select currency">
                                                        <option value="">United Arab Emirates Dirhams</option>
                                                        <option value="1">lkr</option>
                                                        <option value="1">kud</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <p className='fw-bolder text-black'>Does this property work with a channel manager? &nbsp;&nbsp;<span className='text-light'><Icons.InfoSquare /></span></p>
                                                <Form.Group>
                                                    <Form.Check
                                                        type='radio'
                                                        name='yes1'
                                                        id='1'
                                                        label="yes" />

                                                    <Form.Check
                                                        name='yes1'
                                                        type='radio'
                                                        id='1'
                                                        label="No" />
                                                </Form.Group>

                                                <p className='fw-bolder text-black'>Is this property part of a chain? &nbsp;&nbsp;<span className='text-light'><Icons.InfoSquare /></span></p>
                                                <Form.Group>
                                                    <Form.Check
                                                        type='radio'
                                                        name='yes1'
                                                        id='1'
                                                        label="yes" />

                                                    <Form.Check
                                                        name='yes1'
                                                        type='radio'
                                                        id='1'
                                                        label="No" />
                                                </Form.Group>

                                                <Button variant='dark' className="btn-rounded  btn-block mb-3" as={Link} to="/dashboard" >Next</Button>
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

export default Signup
