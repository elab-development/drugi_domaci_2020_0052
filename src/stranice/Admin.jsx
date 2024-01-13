import React from 'react';
import axiosInstance from "../axios-instance/axios";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Chart} from "react-google-charts";
import Tabela from "../komponente/Tabela";

const Admin = () => {

    const [usluge, setUsluge] = React.useState(null);

    const [zahtevi, setZahtevi] = React.useState([]);

    const [sviZahtevi, setSviZahtevi] = React.useState([]);

    const [chartData, setChartData] = React.useState([
        ['Usluga', 'Broj usluga']
    ]);

    React.useEffect(() => {
        axiosInstance.get('/chart')
            .then((response) => {
                console.log(response);
                let data = response.data.data;

                const chartPodaci = data.map((item) => {
                    return (
                        [item.nazivUsluge, item.total]
                    )
                });

                const sviPodaci = [['Usluga', 'Broj usluga'], ...chartPodaci];

                console.log(sviPodaci);
                setChartData(sviPodaci);
            }).catch((error) => {
                console.log(error);
            });
    },[]);

    React.useEffect(() => {
        console.log('usluge');
        axiosInstance.get('/usluge')
            .then((response) => {
                console.log(response);
                let data = response.data.data;


                setUsluge(data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const filtrirajZahteve = (id) => {
        console.log('zahtevi');
        axiosInstance.get('/zahtevi-usluge/' + id)
            .then((response) => {
                console.log(response);
                let data = response.data.data;
                setZahtevi(data);
            }).catch((error) => {
                console.log(error);
            });
    }

    React.useEffect(() => {
        axiosInstance.get('/zahtevi')
            .then((response) => {
                console.log(response);
                let data = response.data.data;
                setSviZahtevi(data);
                setBrojStranica(Math.ceil(data.length / zahteviPoStranici));
                setPaginiraniZahtevi(data.slice(0, zahteviPoStranici));
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const zahteviPoStranici = 10;

    const [brojStranica, setBrojStranica] = React.useState(0);

    let nizBrojeva = [];

    for (let i = 1; i <= brojStranica; i++) {
        nizBrojeva.push(i);
    }

    const [paginiraniZahtevi, setPaginiraniZahtevi] = React.useState([]);

    const paginiraj = (broj) => {
        console.log('paginacija');
        axiosInstance.get('/zahtevi-paginacija?page=' + broj + '&page_size=' + zahteviPoStranici)
            .then((response) => {
                console.log(response);
                let data = response.data.data;
                setPaginiraniZahtevi(data);
            }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className="App-header">
                <h1>Admin stranica</h1>
            </div>
            <Container>
                <Row>
                    <Col>
                    {
                        usluge && usluge.map((item) => {
                            return (
                                <Button key={item.id} className="m-2" onClick={() => filtrirajZahteve(item.id)}>{item.nazivUsluge}</Button>
                            )
                        })
                    }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabela zahtevi={zahtevi} />
                    </Col>
                </Row>
                <h1>Graficki prikaz podataka</h1>
                <Row>
                    <Col>
                        <Chart
                            chartType="PieChart"
                            data={chartData}
                            width="100%"
                            height="400px"
                        />
                    </Col>
                </Row>
                <h1>Paginacija zahteva</h1>
                <Row>
                    <Col>
                        <Tabela zahtevi={paginiraniZahtevi} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {
                            nizBrojeva && nizBrojeva.map((item) => {
                                return (
                                    <Button key={item} className="m-2 btn-dark" onClick={() => paginiraj(item)}>{item}</Button>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Admin;