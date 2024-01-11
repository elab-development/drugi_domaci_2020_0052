import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";

const Faq = () => {

    const faq = [
        {
            id: 1,
            pitanje: "Da li postoji ograničen broj usluga koje mogu biti istovremeno zatražene?",
            odgovor: "Ne postoji ograničen broj usluga koje možete zatražiti, ali ne postoji mogućnost izvršavanja više usluga istovremeno."
        },
        {
            id: 2,
            pitanje: "Da li postoji mogućnost rangiranja hitnosti zahteva za određenim uslugama?",
            odgovor: "Naravno. Ukoliko postoje određeni zahtevi koje je potrebno obraditi u što kraćem vremenskom periodu, potrebno je to i naglasiti prilikom traženja usluge. U tom slučaju služba će blagovremeno rangirati tražene usluge i pružiti odgovor u što kraćem vremenskom roku."
        },
        {
            id: 3,
            pitanje: "Da li zahtevane usluge ostaju autorizovane isključivo za potrebe sajta ili će biti dostupne široj javnosti?",
            odgovor: "Svi vaši zahtevi biće obrađeni i dostupni isključivo u okviru našeg sajta e-uprave. Vaš nalog i registracija služe isključivo radi lakšeg evidentiranja zahtevanih usluga i davanja adekvatnih odgovora."
        },
        {
            id: 4,
            pitanje: "Kako izvršiti elektronski potpis?",
            odgovor: "Postavljeni zahtev možete izvršiti putem posebne aplikacije za elektronski potpis. Na samoj aplikaciji imate kratko uputstvo u kome su definisani jasni koraci koji će vam dati mogućnost da napravite lični identifikacioni potpis."
        },
        ];
    return (
        <>
            <Container>
                <div className="App-header">
                    <h1>FAQ</h1>
                    <p>
                        odgovori na najčešća pitanja
                    </p>
                </div>
                <Row>
                    <Accordion defaultActiveKey="0">
                        {
                            faq.map((item) => {
                                return (
                                    <Accordion.Item eventKey={item.id} key={item.id}>
                                        <Accordion.Header>{item.pitanje}</Accordion.Header>
                                        <Accordion.Body>
                                            {item.odgovor}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                </Row>
            </Container>
        </>
    );
};

export default Faq;