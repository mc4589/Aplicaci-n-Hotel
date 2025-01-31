import React, { useState, useEffect } from 'react';
import ListaClientes from '../components/ListaClientes';
import ClienteForm from '../components/ClienteForm';
import { Cliente } from '../types';

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const storedClientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    setClientes(storedClientes);
  }, []);

  const addCliente = (cliente: Cliente) => {
    const updatedClientes = [...clientes, cliente];
    setClientes(updatedClientes);
    localStorage.setItem('clientes', JSON.stringify(updatedClientes));
  };

  const handleDelete = (id: number) => {
    const updatedClientes = clientes.filter(cliente => cliente.id !== id);
    setClientes(updatedClientes);
    localStorage.setItem('clientes', JSON.stringify(updatedClientes));
  };

  const handleUpdate = (updatedCliente: Cliente) => {
    const updatedClientes = clientes.map(cliente =>
      cliente.id === updatedCliente.id ? updatedCliente : cliente
    );
    setClientes(updatedClientes);
    localStorage.setItem('clientes', JSON.stringify(updatedClientes));
  };

  return (
    <div className="container">
      <h1>Gestión de Clientes</h1>
      <ClienteForm onAddCliente={addCliente} />
      <ListaClientes 
        clientes={clientes} 
        onDeleteCliente={handleDelete} 
        onUpdateCliente={handleUpdate} 
      />
    </div>
  );
};

export default Clientes;
