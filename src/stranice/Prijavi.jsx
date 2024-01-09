import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import useForm from "../hooks/UseForm";
import axiosInstance from "../axios-instance/axios";
import TabelaProblema from "../komponente/TabelaProblema";

const Prijavi = () => {

    const [problemi, setProblemi] = useState([]);

    const [filtriraniProblemi, setFiltriraniProblemi] = useState(problemi);

    const filtrirajProbleme = (status) => {
        console.log(status);
        if (status === 'SVI') {
            setFiltriraniProblemi(problemi);
            return;
        }
        let filtriraniProblemi = problemi.filter((item) => {
            return item.status === status;
        });
        setFiltriraniProblemi(filtriraniProblemi);
    }

    useEffect(() => {
        axiosInstance.get('/problemi')
            .then((response) => {
                console.log(response);
                setProblemi(response.data.data);
                setFiltriraniProblemi(response.data.data);
            }).catch((error) => {
            console.log(error);
        });
    }, []);

    const [formData, handleChange] = useForm({
        naziv: '',
        opis: ''
    });

    const prijaviProblem = () => {
        console.log(formData);
        const user = JSON.parse(window.sessionStorage.getItem('user'));
        const data = {
            nazivProblema: formData.naziv,
            opisProblema: formData.opis,
            user_id: user.id
        }

        axiosInstance.post('/problemi', data)
            .then((response) => {
            console.log(response);
            window.location.href = '/prijavi';
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <Container>
                <div className="App-header">
                    <h1>Ovo je stranica</h1>
                    <p>
                        za prijavu problema koje muce gradjane
                    </p>
                </div>
                <Row>
                    <Col>
                        <h2>Prijavi problem</h2>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Problem</Form.Label>
                                <Form.Control onChange={handleChange} type="text" id="naziv" name="naziv" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Opis</Form.Label>
                                <Form.Control onChange={handleChange} as="textarea" name="opis" id="opis" rows={3} />
                            </Form.Group>
                            <hr/>
                            <Button variant="primary" onClick={prijaviProblem} type="button" >Prijavi </Button>
                        </Form>
                    </Col>
                    <Col>
                        <h2>Lista prijavljenih problema</h2>
                        <Button className="m-2" onClick={() => filtrirajProbleme('SVI')} variant="primary" type="button">Svi problemi</Button>
                        <Button className="m-2" onClick={() => filtrirajProbleme('NOVO')} variant="warning" type="button">Novo</Button>
                        <Button className="m-2" onClick={() => filtrirajProbleme('PRIHVACENO')} variant="success" type="button">Prihvaceno</Button>
                        <Button className="m-2" onClick={() => filtrirajProbleme('ZAVRSENO')} variant="danger" type="button">Zavrseno</Button>
                        <TabelaProblema listaPRoblema={filtriraniProblemi} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Prijavi;