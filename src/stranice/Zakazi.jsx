import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axiosInstance from "../axios-instance/axios";
import useForm from "../hooks/UseForm";

const Zakazi = () => {

    const [usluge, setUsluge] = useState([]);

    useEffect(() => {
        axiosInstance.get('/usluge')
            .then((response) => {
                console.log(response);
                setUsluge(response.data.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const [formData, handleChange] = useForm({
        usluga_id: ''
    });

    const [poruka, setPoruka] = useState('');

    const zakaziUslugu = () => {
        console.log(formData);
        const user = JSON.parse(window.sessionStorage.getItem('user'));
        const data = {
            usluga_id: formData.usluga_id,
            user_id: user.id
        }

        if (data.usluga_id == 0) {
            setPoruka("Morate izabrati uslugu.");
            return;
        }

        console.log(data);

        axiosInstance.post('/zahtevi', data)
            .then((response) => {
                let responseData = response.data;
                console.log(responseData);
                if (responseData.status === 'success') {
                    let poruka = responseData.message + ". Dobicete dalja upustva na vasu registrovanu email adresu.";
                    setPoruka(poruka);
                } else {
                    setPoruka(responseData.message);
                }

            }).catch((error) => {
                console.log(error);
                setPoruka("Doslo je do greske, pokusajte ponovo.");
            })
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Posalji zahtev za uslugom</h2>
                        <Form>
                            <Form.Select name="usluga_id" onChange={handleChange} size="lg">
                                <option value="0">Izaberi uslugu</option>
                                {
                                    usluge && usluge.map((item) => {
                                        return (
                                            <option value={item.id} key={item.id}>{item.nazivUsluge}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            <hr/>
                            <Button onClick={zakaziUslugu} variant="primary" type="button">Zakazi uslugu</Button>
                        </Form>
                        <p>{poruka}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Zakazi;