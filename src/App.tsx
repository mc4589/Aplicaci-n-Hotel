import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Habitaciones from './pages/Habitaciones';
import Reservas from './pages/Reservas';
import Header from './components/Header';
import Nav from './components/Nav';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
