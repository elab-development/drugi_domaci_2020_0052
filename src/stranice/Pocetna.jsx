import React, {useEffect} from 'react';
import axiosInstance from "../axios-instance/axios";
import {Carousel, Container, Image, Row} from "react-bootstrap";
import slika1 from "../slike/slider/1.jpeg";
import slika2 from "../slike/slider/2.jpeg";
import slika3 from "../slike/slider/4.jpeg";

const Pocetna = () => {

    return (
        <>
            <Container>
                <div className="App-header">
                    <h1>Dobrodošli</h1>
                    <p>
                        na sajt E-uprave
                    </p>
                </div>
                <Row>
                    <Carousel className="mt-3" fade >
                        <Carousel.Item>
                            <Image src={slika1} fluid={true}/>
                            <Carousel.Caption>
                                <h3>Dobrodošli</h3>
                                <p>Mi Vam možemo pomoci</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={slika2}  fluid={true}/>
                            <Carousel.Caption>
                                <h3>Ne morate više čekati u redovima</h3>
                                <p>Sada možete i online odraditi birokratske usluge</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={slika3} fluid={true} />
                            <Carousel.Caption>
                                <h3>Birokratija na dohvat ruke</h3>
                                <p>
                                    Konačno možete odraditi sve usluge iz udobnosti svog doma
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <p className="mt-3">E-uprava je informativni sajt koji Vam pruža mogućnost da na što brži i efikasniji način dođete do odgovara koja se tiču različitih vrsta usluga. Višečasovno čekanje u opštini i drugim ustanovama možete zameniti jednim klikom na uslugu koja Vas zanima i tako doći do traženog odgovora.  Takođe, u što kraćem vremenskom roku bićete obavešteni i informisani o svim novonastalim promenama. Ukoliko imate bilo kakvih dodatnih pitanja ili problema prilikom traženja određenih usluga, budite slobodni da nas kontaktirate u bilo kom trenutku.</p>
                </Row>
            </Container>
        </>
    );
};

export default Pocetna;