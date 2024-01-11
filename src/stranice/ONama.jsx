import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import ana from "../slike/ana.jpeg";
import bogdana from "../slike/bogdana.jpeg";
import ProfilONama from "../komponente/ProfilONama";

const ONama = () => {
    return (
        <div>
            <Row>
                <h1 className="text-center">O nama</h1>
                <p>
                    Kreatori ove aplikacije su studenti Fakulteta organizacionih nauka, smer Informacioni sistemi i tehnologije, koji su formirali tim sa ciljem da naprave aplikaciju koja će pomoći ljudima da lakše rešavaju probleme koji se tiču državnih usluga.
                </p>
            </Row>

            <Row>
                <ProfilONama ime="Ana Boskovic" opis="Ana je studentkinja 4. godine osnovnih akademskih studija na Fakultetu organizacionih nauka, smer Informacioni sistemi i tehnologije. U slobodno vreme se bavi sportom i voli da putuje sa Bogdanom." slika={ana}  />
                <ProfilONama ime="Bogdana Bradic" opis="Bogdana je studentkinja 4. godine osnovnih akademskih studija na Fakultetu organizacionih nauka, smer Informacioni sistemi i tehnologije. U slobodno vreme se bavi muzikom i voli da putuje sa Anom." slika={bogdana}  />
            </Row>
        </div>
    );
};

export default ONama;