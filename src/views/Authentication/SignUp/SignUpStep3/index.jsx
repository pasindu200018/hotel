import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style.css'

const SignUpStep3 = (props) => {
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const confirmPasswordHandler = () => {
    if(password === confirmPassword){
      props.userRegister()
      setError(false)
    }else{
      setError(true)
    }
  };

  



  return (
    <Form className="w-100 smooth">
      <Row>
        <Col xxl={5} xl={7} lg={10} className="mx-auto">
          <h4 className=" mb-4 fw-bold font-scale-vf">Create password</h4>
          <h6 className=" mb-4">
            Use a minimum of 10 characters, including uppercare
            letters, lowercase letters and numbers.
          </h6>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => {props.updateStep(e),
            setPassword(e.target.value)
            }}
          />
          <Form.Label className="mt-4">Confirm password</Form.Label>
          <Form.Control
            name="chechPassword"
            placeholder="Confirm your password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
         {error ? 
            <span className={"text-danger m-1 fs-7"}>Password not matched</span> : null
          }
       

          <Button
            
            variant="dark"
            className="btn-rounded  btn-block mt-4"
            as={Link}
            // to="signup-step-4"
            onClick={()=>confirmPasswordHandler()}
          >
            {props.isLoading ? "Loading..." : "Create account"}        
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SignUpStep3;
