import React from 'react';
import PropTypes from 'prop-types';

const Saradnik = props => {
    const {picture, first, last, email, phone} = props;
    return (
        <>
            <div className="col-md-3 p-3">
                <div className="card">
                    <img src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{first} {last}</h5>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{phone}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

Saradnik.propTypes = {
    picture: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Saradnik;