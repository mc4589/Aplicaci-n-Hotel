import React, { useState } from 'react';
import { Cliente, Habitacion, Reserva } from '../types';

interface ReservaFormProps {
  onAddReserva: (reserva: Reserva) => void;
}

const ReservaForm: React.FC<ReservaFormProps> = ({ onAddReserva }) => {
  const [cliente, setCliente] = useState<string>('');
  const [habitacion, setHabitacion] = useState<string>('');
  const [fechaInicio, setFechaInicio] = useState<string>('');
  const [fechaFin, setFechaFin] = useState<string>('');

  const clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes') || '[]');
  const habitaciones: Habitacion[] = JSON.parse(localStorage.getItem('habitaciones') || '[]');
  const reservas: Reserva[] = JSON.parse(localStorage.getItem('reservas') || '[]');

  const habitacionesDisponibles = habitaciones.filter((habitacion) => {
    return !reservas.some((reserva) =>
      reserva.habitacion === habitacion.id &&
      ((new Date(fechaInicio) >= new Date(reserva.fechaInicio) && new Date(fechaInicio) <= new Date(reserva.fechaFin)) ||
       (new Date(fechaFin) >= new Date(reserva.fechaInicio) && new Date(fechaFin) <= new Date(reserva.fechaFin)) ||
       (new Date(fechaInicio) <= new Date(reserva.fechaInicio) && new Date(fechaFin) >= new Date(reserva.fechaFin)))
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isRoomOccupied = reservas.some((reserva) =>
      reserva.habitacion === parseInt(habitacion, 10) &&
      ((new Date(fechaInicio) >= new Date(reserva.fechaInicio) && new Date(fechaInicio) <= new Date(reserva.fechaFin)) ||
       (new Date(fechaFin) >= new Date(reserva.fechaInicio) && new Date(fechaFin) <= new Date(reserva.fechaFin)) ||
       (new Date(fechaInicio) <= new Date(reserva.fechaInicio) && new Date(fechaFin) >= new Date(reserva.fechaFin)))
    );

    if (isRoomOccupied) {
      alert(`La habitación con ID ${habitacion} ya está ocupada en las fechas seleccionadas. Por favor, elija otra habitación.`);
      return;
    }

    const newReserva: Reserva = {
      id: Date.now(),
      cliente: parseInt(cliente, 10),
      habitacion: parseInt(habitacion, 10),
      fechaInicio,
      fechaFin
    };
    onAddReserva(newReserva);
    setCliente('');
    setHabitacion('');
    setFechaInicio('');
    setFechaFin('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cliente:
        <select value={cliente} onChange={(e) => setCliente(e.target.value)} required>
          <option value="" disabled>Seleccione un Cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id.toString()}>
              {cliente.nombreCompleto}
            </option>
          ))}
        </select>
      </label>
      <label>
        Habitación Disponible:
        <select value={habitacion} onChange={(e) => setHabitacion(e.target.value)} required>
          <option value="" disabled>Seleccione una Habitación</option>
          {habitacionesDisponibles.map((habitacion) => (
            <option key={habitacion.id} value={habitacion.id.toString()}>
              ID: {habitacion.id} - {habitacion.tipo} - ${habitacion.precio}
            </option>
          ))}
        </select>
      </label>
      <label>
        Fecha de Inicio:
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required />
      </label>
      <label>
        Fecha de Fin:
        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required />
      </label>
      <button type="submit">Agregar Reserva</button>
    </form>
  );
};

export default ReservaForm;
