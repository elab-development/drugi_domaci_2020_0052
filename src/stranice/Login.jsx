import React from 'react';
import {Button, Form} from "react-bootstrap";
import useForm from '../hooks/UseForm';

const Login = () => {

    const onclick = () => {
        alert('Uspesno ste se ulogovali!');
    }

    const initialState = {
        email: '',
        password: ''
    };

    const [formData, handleChange] = useForm(initialState);

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} name="email" type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} name="password" type="password" />
                </Form.Group>
                <Button onClick={onclick} variant="primary" type="submit" >Login </Button>
            </Form>
        </div>
    );
};

export default Login;