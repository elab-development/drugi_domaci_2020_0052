import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col} from "react-bootstrap";

const UslugaKartica = props => {
    const {id, naziv, opis, cena, kategorija, link} = props;

    const ulogovaniUser = window.sessionStorage.getItem('token') !== null;

    const btnText = naziv === 'Prijavi problem' ? 'Prijavi' : 'Zakazi';
    const btnClass = naziv === 'Prijavi problem' ? 'btn btn-success' : 'btn btn-primary';

    return (
        <>
            <Col key={id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{naziv}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{kategorija} ({cena} dinara)</Card.Subtitle>
                        <Card.Text>
                            {opis}
                        </Card.Text>
                        {
                            ulogovaniUser ?
                                <Card.Link className={btnClass} href={link}>{btnText}</Card.Link>
                                :
                                null
                        }
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

UslugaKartica.propTypes = {
    id: PropTypes.number.isRequired,
    naziv: PropTypes.string.isRequired,
    opis: PropTypes.string.isRequired,
    cena: PropTypes.string.isRequired,
    kategorija: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default UslugaKartica;