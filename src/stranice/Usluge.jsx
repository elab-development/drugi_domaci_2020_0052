import React, {useEffect} from 'react';
import axiosInstance from "../axios-instance/axios";
import {Container, Row} from "react-bootstrap";
import UslugaKartica from "../komponente/UslugaKartica";

const Usluge = () => {

    const [data, setData] = React.useState(null);

    useEffect(() => {
        axiosInstance.get('/usluge')
            .then((response) => {
                console.log(response);
                setData(response.data.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Container>
                <div className="App-header">
                    <h1>Usluge</h1>
                    <p>
                        koje nudimo
                    </p>
                </div>
                <Row className="mt-3">
                        {
                            data && data.map((item) => {
                                let link = item.nazivUsluge === 'Prijavi problem' ? '/prijavi' : '/zakazi';
                                return (
                                    <UslugaKartica key={item.id} id={item.id} naziv={item.nazivUsluge} opis={item.opisUsluge} cena={item.cenaUsluge} kategorija={item.kategorija.naziv} link={link} />
                                )
                            })
                        }
                </Row>
            </Container>
        </>
    );
};

export default Usluge;