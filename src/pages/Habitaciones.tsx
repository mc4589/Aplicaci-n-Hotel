import React, { useState, useEffect } from 'react';
import ListaHabitaciones from '../components/ListaHabitaciones';
import HabitacionForm from '../components/HabitacionForm';
import { Habitacion } from '../types';

const Habitaciones: React.FC = () => {
  const [habitaciones, setHabitaciones] = useState<Habitacion[]>([]);

  useEffect(() => {
    const storedHabitaciones = JSON.parse(localStorage.getItem('habitaciones') || '[]');
    setHabitaciones(storedHabitaciones);
  }, []);

  const addHabitacion = (habitacion: Habitacion) => {
    const updatedHabitaciones = [...habitaciones, habitacion];
    setHabitaciones(updatedHabitaciones);
    localStorage.setItem('habitaciones', JSON.stringify(updatedHabitaciones));
  };

  const handleDelete = (id: number) => {
    const updatedHabitaciones = habitaciones.filter(habitacion => habitacion.id !== id);
    setHabitaciones(updatedHabitaciones);
    localStorage.setItem('habitaciones', JSON.stringify(updatedHabitaciones));
  };

  const handleUpdate = (updatedHabitacion: Habitacion) => {
    const updatedHabitaciones = habitaciones.map(habitacion =>
      habitacion.id === updatedHabitacion.id ? updatedHabitacion : habitacion
    );
    setHabitaciones(updatedHabitaciones);
    localStorage.setItem('habitaciones', JSON.stringify(updatedHabitaciones));
  };

  return (
    <div className="container">
      <h1>Gestión de Habitaciones</h1>
      <HabitacionForm onAddHabitacion={addHabitacion} totalHabitaciones={habitaciones.length} />
      <ListaHabitaciones 
        habitaciones={habitaciones} 
        onDeleteHabitacion={handleDelete} 
        onUpdateHabitacion={handleUpdate} 
      />
    </div>
  );
};

export default Habitaciones;
