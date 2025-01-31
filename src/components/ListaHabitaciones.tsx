import React, { useState } from 'react';
import { Habitacion } from '../types';

interface ListaHabitacionesProps {
  habitaciones: Habitacion[];
  onDeleteHabitacion: (id: number) => void;
  onUpdateHabitacion: (updatedHabitacion: Habitacion) => void;
}

const ListaHabitaciones: React.FC<ListaHabitacionesProps> = ({ habitaciones, onDeleteHabitacion, onUpdateHabitacion }) => {
  const [editingHabitacionId, setEditingHabitacionId] = useState<number | null>(null);
  const [tipo, setTipo] = useState<string>('');
  const [precio, setPrecio] = useState<number>(0);

  const startEditing = (habitacion: Habitacion) => {
    setEditingHabitacionId(habitacion.id);
    setTipo(habitacion.tipo);
    setPrecio(habitacion.precio);
  };

  const handleUpdate = () => {
    const updatedHabitacion: Habitacion = {
      id: editingHabitacionId!,
      tipo,
      precio,
    };
    onUpdateHabitacion(updatedHabitacion);
    setEditingHabitacionId(null);
  };

  return (
    <div>
      <h2>Lista de Habitaciones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Precio por Noche en USD</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((habitacion) => (
            <tr key={habitacion.id}>
              {editingHabitacionId === habitacion.id ? (
                <>
                  <td>{habitacion.id}</td>
                  <td>
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                      <option value="individual">Individual</option>
                      <option value="doble">Doble</option>
                      <option value="suite">Suite</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={precio}
                      onChange={(e) => setPrecio(parseFloat(e.target.value))}
                      required
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Actualizar</button>
                    <button onClick={() => setEditingHabitacionId(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{habitacion.id}</td>
                  <td>{habitacion.tipo}</td>
                  <td>${habitacion.precio}</td>
                  <td>
                    <button onClick={() => onDeleteHabitacion(habitacion.id)} className="button-delete">Eliminar</button>
                    <button onClick={() => startEditing(habitacion)} className="button-edit">Editar</button>
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

export default ListaHabitaciones;
