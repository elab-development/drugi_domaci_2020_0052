import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import useForm from '../hooks/UseForm';
import axios from '../axios-instance/axios';

const Login = () => {

    const onclick = () => {
        const data = axios.post('/login', formData)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error + 'error');
            });
        alert('Uspesno ste se ulogovali!');
        console.log(formData);
    }

    const onclickRegister = () => {
        alert('Uspesno ste se registrovali!');
        console.log(formDataRegister);
    }

    const initialState = {
        email: '',
        password: ''
    };

    const initialStateRegister = {
        nameRegister: '',
        emailRegister: '',
        passwordRegister: ''
    };

    const [formData, handleChange] = useForm(initialState);

    const [formDataRegister, handleChangeRegister] = useForm(initialStateRegister);

    return (
        <div>
            <Row>
                <h1>Login/Registracija forma</h1>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChange} name="email" type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} name="password" type="password" />
                        </Form.Group>
                        <Button onClick={onclick} variant="primary" type="button" >Login </Button>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Ime i prezime</Form.Label>
                            <Form.Control onChange={handleChangeRegister} name="nameRegister" type="text" placeholder="Ivica i Marica" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChangeRegister} name="emailRegister" type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChangeRegister} name="passwordRegister" type="password" />
                        </Form.Group>
                        <Button onClick={onclickRegister} variant="primary" type="button" >Registracija </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;