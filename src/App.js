import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meni from "./komponente/Meni";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pocetna from "./stranice/Pocetna";
import Faq from "./stranice/Faq";
import ONama from "./stranice/ONama";
import Usluge from "./stranice/Usluge";
import Kontakt from "./stranice/Kontakt";
import Login from "./stranice/Login";
import { Container } from 'react-bootstrap';
import Footer from "./komponente/Footer";
import Prijavi from "./stranice/Prijavi";
import Zakazi from "./stranice/Zakazi";
import Saradnici from './stranice/Saradnici';
import Admin from './stranice/Admin';

function App() {
  return (
    <>
    
    <BrowserRouter>
            <Meni/>
            <Container className="glavniKontejner"> 
            <Routes>
                <Route path="/" element={<Pocetna/>}/>
                <Route path="/onama" element={<ONama />}/>
                <Route path="/usluge" element={<Usluge />}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/kontakt" element={<Kontakt />}/>
                <Route path="/prijavi" element={<Prijavi />}/>
                <Route path="/zakazi" element={<Zakazi />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/saradnici" element={<Saradnici />}/>
                <Route path="/admin" element={<Admin />}/>

            </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
       
    </>
  );
}

export default App;
