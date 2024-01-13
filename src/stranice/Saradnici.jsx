import React, {useEffect, useState} from 'react';
import axiosInstance from "../axios-instance/axios";
import Saradnik from "../komponente/Saradnik";
const Saradnici = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = () => {
        axiosInstance.get('https://randomuser.me/api/?results=8')
            .then((response) => {
                console.log(response.data.results);
                setData(response.data.results);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="App-header">
                <h1>Nasi saradnici</h1>
            </div>
            <div className="container">
                <h1 className="text-center">Saradnici iz raznih drzava</h1>
                <div className="row m-3">
                    {
                        data && data.map((item, index) => {
                            return (
                                <Saradnik key={index} picture={item.picture.large} first={item.name.first} last={item.name.last} email={item.email} phone={item.phone}  />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Saradnici;