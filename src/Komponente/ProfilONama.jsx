import React from 'react';
import PropTypes from 'prop-types';
import {Col, Image} from "react-bootstrap";
import bogdana from "../slike/bogdana.jpeg";

const ProfilONama = props => {
    return (
        <>
            <Col md={6}>
                <h2>{props.ime}</h2>
                <p>
                    {props.opis}
                </p>
                <Image className="img-thumbnail" src={props.slika} />
            </Col>
        </>
    );
};

ProfilONama.propTypes = {
    ime: PropTypes.string.isRequired,
    opis: PropTypes.string.isRequired,
    slika: PropTypes.string.isRequired
};

export default ProfilONama;