import React, {useState} from 'react';
import {Button, Col, Form, Row, Alert} from "react-bootstrap";
import useForm from '../hooks/UseForm';
import axios from "../axios-instance/axios";

const Login = () => {

    const [loginErrors, setLoginErrors] = useState([]);
    const [message, setMessage] = useState(null);

    const onclick = () => {
        setLoginErrors([]);
        const data = axios.post('/login', formData)
            .then((response) => {
                console.log(response);
                let token = response.data.data.token;
                let user = response.data.data.user;

                window.sessionStorage.setItem('token', token);
                window.sessionStorage.setItem('user', JSON.stringify(user));
                window.location.href = '/';
            }).catch((error) => {
                console.log(error);
                setLoginErrors(["Greska prilikom logovanja! Proverite podatke"]);
            });
    }

    const onclickRegister = () => {
        const postData = {
            name: formDataRegister.nameRegister,
            email: formDataRegister.emailRegister,
            password: formDataRegister.passwordRegister,
            confirm_password: formDataRegister.passwordRegister
        }

        setLoginErrors([]);
        const data = axios.post('/register', postData)
            .then((response) => {
                setMessage("Uspesno ste se registrovali, molimo vas, loginujte se sa ovim podacima!");
            }).catch((error) => {
                setLoginErrors(["Greska prilikom registracije! Proverite podatke"]);
            });
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
                    {
                        loginErrors.map((error, index) => {
                            return (
                                <p key={index}>{error}</p>
                            )
                        })
                    }
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Ime i prezime</Form.Label>
                            <Form.Control onChange={handleChangeRegister} name="nameRegister" type="text" placeholder="Petar Petrovic" />
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
                    {
                        message && <Alert className="mt-3" title="Uspesno" variant="success" > {message} </Alert>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Login;