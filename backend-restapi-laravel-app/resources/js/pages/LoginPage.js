import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Navigate} from "react-router-dom";

class LoginPage extends Component {
    constructor(){
        super();
        this.state={
            validationError:'',
            auth:false,
        }
    }

    loginHandler=()=>{
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let data={
            email:email,
            password:password,
        };
        // validation
        var validation = 1;
        if(email){
            var emailPattern = /^\S+@\S+\.\S+$/;
            if(!emailPattern.test(email)){
                this.setState({validationError:"Email is not valid"});
                validation=0;
            }
            else{
                this.setState({validationError:" "});
                validation = 1;
            }
        }
        if(password.length <= 0){
            this.setState({validationError:"Password Empty!"});
            validation = 0;
        }
        // validation close

        if(validation == 1){
            axios.post('/onLogin',data)
                .then(res=>{
                    if(res.data == 1 && res.status== 200){
                        toast.success("Success");
                        this.setState({auth:true});
                    }
                    else if(res.data == 0){
                        toast.error("Fail!");
                    }
                })
                .catch(e=>{
                    toast.error("Fail!");
                    this.setState({auth:false});
                })
        }

    }

    render() {
        // Authentication check
        if(this.state.auth == true){
            return <Navigate replace  to="/home" />;
        }
        else{
            return (
                <Fragment>
                    <Container>
                        <title>Login</title>
                        <Row className="justify-content-center">
                            <Col sm={12} md={6} lg={6} >
                                <div className="mt-5 p-3" style={{backgroundColor: '#a2e7f5',fontFamily: 'Bahnschrift SemiBold',}} >
                                    <Form>
                                        <h3 className="text-center">Login</h3>
                                        <h5 className="text-center">Portfolio App</h5><hr/>
                                        <h5 style={{color:'red'}}>{this.state.validationError}</h5>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" id="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" id="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button className="btn addButton w-100" onClick={this.loginHandler}>Submit</Button>
                                    </Form>
                                </div>

                            </Col>
                        </Row>
                        {/* toast message container */}
                        <ToastContainer />
                    </Container>
                </Fragment>
            );
        }

    }
}

export default LoginPage;
