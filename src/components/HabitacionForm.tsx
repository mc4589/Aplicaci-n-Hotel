import React, { useState } from 'react';
import { Habitacion } from '../types';

interface HabitacionFormProps {
  onAddHabitacion: (habitacion: Habitacion) => void;
  totalHabitaciones: number;
}

const HabitacionForm: React.FC<HabitacionFormProps> = ({ onAddHabitacion, totalHabitaciones }) => {
  const [tipo, setTipo] = useState<string>('individual');
  const [precio, setPrecio] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHabitacion: Habitacion = { id: totalHabitaciones + 1, tipo, precio: parseFloat(precio) };
    onAddHabitacion(newHabitacion);
    setTipo('individual');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo de Habitación:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="individual">Individual</option>
          <option value="doble">Doble</option>
          <option value="suite">Suite</option>
        </select>
      </label>
      <label>
        Precio por Noche en USD:
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
      </label>
      <button type="submit">Agregar Habitación</button>
    </form>
  );
};

export default HabitacionForm;
