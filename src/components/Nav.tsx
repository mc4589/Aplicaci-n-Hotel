import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/Habitaciones">Habitaciones</Link>
        </li>
        <li>
          <Link to="/Reservas">Reservas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
