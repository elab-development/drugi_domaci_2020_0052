import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";

const Tabela = props => {

    const {zahtevi} = props;
    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Ime i prezime</th>
                    <th>Usluga</th>
                    <th>Datum</th>
                </tr>
                </thead>
                <tbody>

                {
                    zahtevi && zahtevi.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.user.name}</td>
                                <td>{item.usluga.nazivUsluge}</td>
                                <td>{item.datumUsluge}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>
        </>
    );
};

Tabela.propTypes = {
   zahtevi: PropTypes.array.isRequired
};

export default Tabela;