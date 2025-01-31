import React, { useState, useEffect } from 'react';
import ReservaForm from '../components/ReservaForm';
import ListaReservas from '../components/ListaReservas';
import { Reserva, Cliente, Habitacion } from '../types';

const Reservas: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [habitaciones, setHabitaciones] = useState<Habitacion[]>([]);

  useEffect(() => {
    const storedReservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    const storedClientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const storedHabitaciones = JSON.parse(localStorage.getItem('habitaciones') || '[]');
    setReservas(storedReservas);
    setClientes(storedClientes);
    setHabitaciones(storedHabitaciones);
  }, []);

  const addReserva = (reserva: Reserva) => {
    const updatedReservas = [...reservas, reserva];
    setReservas(updatedReservas);
    localStorage.setItem('reservas', JSON.stringify(updatedReservas));
  };

  const handleDelete = (id: number) => {
    const updatedReservas = reservas.filter(reserva => reserva.id !== id);
    setReservas(updatedReservas);
    localStorage.setItem('reservas', JSON.stringify(updatedReservas));
  };

  const handleUpdate = (updatedReserva: Reserva) => {
    const updatedReservas = reservas.map(reserva =>
      reserva.id === updatedReserva.id ? updatedReserva : reserva
    );
    setReservas(updatedReservas);
    localStorage.setItem('reservas', JSON.stringify(updatedReservas));
  };

  return (
    <div className="container">
      <h1>Gestión de Reservas</h1>
      <ReservaForm onAddReserva={addReserva} />
      <ListaReservas
        reservas={reservas}
        clientes={clientes}
        habitaciones={habitaciones}
        onDeleteReserva={handleDelete}
        onUpdateReserva={handleUpdate}
      />
    </div>
  );
};

export default Reservas;
