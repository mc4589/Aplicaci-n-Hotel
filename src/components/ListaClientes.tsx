import React, { useState } from 'react';
import { Cliente } from '../types';

interface ListaClientesProps {
  clientes: Cliente[];
  onDeleteCliente: (id: number) => void;
  onUpdateCliente: (updatedCliente: Cliente) => void;
}

const ListaClientes: React.FC<ListaClientesProps> = ({ clientes, onDeleteCliente, onUpdateCliente }) => {
  const [editingClienteId, setEditingClienteId] = useState<number | null>(null);
  const [nombreCompleto, setNombreCompleto] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const startEditing = (cliente: Cliente) => {
    setEditingClienteId(cliente.id);
    setNombreCompleto(cliente.nombreCompleto);
    setEmail(cliente.email);
  };

  const handleUpdate = () => {
    const updatedCliente: Cliente = {
      id: editingClienteId!,
      nombreCompleto,
      email,
    };
    onUpdateCliente(updatedCliente);
    setEditingClienteId(null);
  };

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              {editingClienteId === cliente.id ? (
                <>
                  <td>{cliente.id}</td>
                  <td>
                    <input
                      type="text"
                      value={nombreCompleto}
                      onChange={(e) => setNombreCompleto(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Actualizar</button>
                    <button onClick={() => setEditingClienteId(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{cliente.id}</td>
                  <td>{cliente.nombreCompleto}</td>
                  <td>{cliente.email}</td>
                  <td>
                    <button onClick={() => onDeleteCliente(cliente.id)} className="button-delete">Eliminar</button>
                    <button onClick={() => startEditing(cliente)} className="button-edit">Editar</button>
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

export default ListaClientes;
