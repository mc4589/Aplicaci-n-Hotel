import React, { useState } from 'react';
import { Cliente, Habitacion, Reserva } from '../types';

interface ListaReservasProps {
  reservas: Reserva[];
  clientes: Cliente[];
  habitaciones: Habitacion[];
  onDeleteReserva: (id: number) => void;
  onUpdateReserva: (updatedReserva: Reserva) => void;
}

const ListaReservas: React.FC<ListaReservasProps> = ({ reservas, clientes, habitaciones, onDeleteReserva, onUpdateReserva }) => {
  const [editingReservaId, setEditingReservaId] = useState<number | null>(null);
  const [cliente, setCliente] = useState<string>('');
  const [habitacion, setHabitacion] = useState<string>('');
  const [fechaInicio, setFechaInicio] = useState<string>('');
  const [fechaFin, setFechaFin] = useState<string>('');

  const startEditing = (reserva: Reserva) => {
    setEditingReservaId(reserva.id);
    setCliente(reserva.cliente.toString());
    setHabitacion(reserva.habitacion.toString());
    setFechaInicio(reserva.fechaInicio);
    setFechaFin(reserva.fechaFin);
  };

  const handleUpdate = () => {
    const isRoomOccupied = reservas.some((reserva) =>
      reserva.habitacion === parseInt(habitacion, 10) &&
      reserva.id !== editingReservaId && // Excluir la reserva que estamos editando
      ((new Date(fechaInicio) >= new Date(reserva.fechaInicio) && new Date(fechaInicio) <= new Date(reserva.fechaFin)) ||
       (new Date(fechaFin) >= new Date(reserva.fechaInicio) && new Date(fechaFin) <= new Date(reserva.fechaFin)) ||
       (new Date(fechaInicio) <= new Date(reserva.fechaInicio) && new Date(fechaFin) >= new Date(reserva.fechaFin)))
    );

    if (isRoomOccupied) {
      alert(`La habitación con ID ${habitacion} ya está ocupada en las fechas seleccionadas. Por favor, elija otra habitación o ajuste las fechas.`);
      return;
    }

    const updatedReserva: Reserva = {
      id: editingReservaId!,
      cliente: parseInt(cliente, 10),
      habitacion: parseInt(habitacion, 10),
      fechaInicio,
      fechaFin,
    };
    onUpdateReserva(updatedReserva);
    setEditingReservaId(null);
  };

  const getClienteInfo = (clienteId: number) => {
    const cliente = clientes.find(c => c.id === clienteId);
    return cliente ? `ID: ${cliente.id} - ${cliente.nombreCompleto}` : '';
  };

  const getHabitacionInfo = (habitacionId: number) => {
    const habitacion = habitaciones.find(h => h.id === habitacionId);
    return habitacion ? `ID: ${habitacion.id} - ${habitacion.tipo} - $${habitacion.precio}` : '';
  };

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>ID_reserva</th>
            <th>Cliente</th>
            <th>Habitación</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, index) => (
            <tr key={reserva.id}>
              {editingReservaId === reserva.id ? (
                <>
                  <td>{index + 1}</td>
                  <td>
                    <select value={cliente} onChange={(e) => setCliente(e.target.value)} required>
                      <option value="" disabled>Seleccione un Cliente</option>
                      {clientes.map((cliente) => (
                        <option key={cliente.id} value={cliente.id.toString()}>
                          {cliente.nombreCompleto}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select value={habitacion} onChange={(e) => setHabitacion(e.target.value)} required>
                      <option value="" disabled>Seleccione una Habitación</option>
                      {habitaciones.map((habitacion) => (
                        <option key={habitacion.id} value={habitacion.id.toString()}>
                          {getHabitacionInfo(habitacion.id)}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="date"
                      value={fechaInicio}
                      onChange={(e) => setFechaInicio(e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={fechaFin}
                      onChange={(e) => setFechaFin(e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Actualizar</button>
                    <button onClick={() => setEditingReservaId(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{index + 1}</td>
                  <td>{getClienteInfo(reserva.cliente)}</td>
                  <td>{getHabitacionInfo(reserva.habitacion)}</td>
                  <td>{reserva.fechaInicio}</td>
                  <td>{reserva.fechaFin}</td>
                  <td>
                    <button onClick={() => onDeleteReserva(reserva.id)} className="button-delete">Eliminar</button>
                    <button onClick={() => startEditing(reserva)} className="button-edit">Editar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaReservas;
