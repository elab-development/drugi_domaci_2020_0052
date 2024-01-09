import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Kontakt = () => {
    return (
        <>
            <Container>
                <div className="App-header">
                    <h1>Kontakt</h1>
                    <p>
                        Kontaktirajte nas
                    </p>
                </div>
                <Row>
                    <Col>
                        <div className="mt-3">
                            <h3>Adresa</h3>
                            <p>
                                Jove Ilica 156
                            </p>
                            <h3>Telefon</h3>
                            <p>
                                011 222 333
                            </p>
                            <h3>Email</h3>
                            <p>e-uprava@gmail.com</p>
                        </div>
                    </Col>
                    <Col>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.3917357105665!2d20.472625376201577!3d44.77281847930253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a705762824603%3A0x9fdb2efbad66bab9!2sJove%20Ili%C4%87a%20156%2C%20Beograd!5e0!3m2!1sen!2srs!4v1704547164449!5m2!1sen!2srs"
                            width="600" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Kontakt;