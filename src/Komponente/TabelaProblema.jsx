import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";

const TabelaProblema = props => {

    const vratiBojuTekstaZaStatus = (status) => {
        let statusColor = 'red';
        switch (status) {
            case 'PRIHVACENO':
                statusColor = 'green';
                break;
            case 'ZAVRSENO':
                statusColor = 'red';
                break;
            case 'NOVO':
                statusColor = 'orange';
                break;
            default:
                statusColor = 'red';
                break;
        }
        return statusColor;
    }

    return (
        <>
            <Table striped hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Problem</th>
                    <th>Opis</th>
                    <th>Prijavio</th>
                    <th>Datum prijave</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.listaPRoblema.map((item) => {
                        let statusColor = vratiBojuTekstaZaStatus(item.status);
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nazivProblema}</td>
                                <td>{item.opisProblema}</td>
                                <td>{item.user.name}</td>
                                <td>{item.datumPrijave}</td>
                                <td style={
                                    {
                                        color: statusColor
                                    }
                                }>{item.status}</td>
                            </tr>
                        )
                    })

                }
                </tbody>
            </Table>
        </>
);
};

TabelaProblema.propTypes = {
    listaPRoblema: PropTypes.array.isRequired,
};

export default TabelaProblema;