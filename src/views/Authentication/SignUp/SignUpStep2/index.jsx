import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style.css'

const SignUpStep2 = (props) => {

  return (
    <Form className="w-100 smooth">
      <Row>
        <Col xxl={5} xl={7} lg={10} className="mx-auto">
          <h4 className=" mb-4 fw-bold font-scale-vf">
            Authorized person contact details
          </h4>
          <h6 className=" mb-4">
            Your full name and phone number are needed to ensure the
            security of your liveinhotels account.
          </h6>
          <Row>
            <Col sm={6}>
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="fname"
                placeholder="Enter your first name"
                type="text"
                onChange={(e) => props.updateStep(e)}
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lname"
                placeholder="Enter your last name"
                type="text"
                onChange={(e) => props.updateStep(e)}
              />
            </Col>
            <Form.Label className="mt-3">Phone number</Form.Label>
            <InputGroup className="mb-3">
              <DropdownButton
                name="ccode"
                variant="outline-secondary"
                title="+94"
                id="input-group-dropdown-1"
                onChange={(e) => props.updateStep(e)}
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Something else here
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">
                  Separated link
                </Dropdown.Item>
              </DropdownButton>
              <Form.Control
                name="mobile"
                aria-label="Text input with dropdown button"
                placeholder="00 0000 000"
                onChange={(e) => props.updateStep(e)}
              />
            </InputGroup>
          </Row>
          <p>{`We'll text a two-factor authentication code to this number when you sign in`}</p>


          <Button
            onClick={() => props.setSignUpStep(3)}
            variant="dark"
            className="btn-rounded btn-uppercase btn-block mt-4"
            as={Link}
          >
            Next
          </Button>


        </Col>
      </Row>
    </Form>
  );
};

export default SignUpStep2;
