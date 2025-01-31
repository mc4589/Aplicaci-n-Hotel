import React, { useState } from 'react';

interface ClienteFormProps {
  onAddCliente: (cliente: any) => void;
}

const ClienteForm: React.FC<ClienteFormProps> = ({ onAddCliente }) => {
  const [nombreCompleto, setNombreCompleto] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Obtener el último ID utilizado o comenzar desde 1
    let lastId = parseInt(localStorage.getItem('lastClienteId') || '0', 10);
    const newCliente = {
      id: lastId + 1,
      nombreCompleto,
      email
    };
    
    const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(newCliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    // Actualizar el último ID utilizado
    localStorage.setItem('lastClienteId', (lastId + 1).toString());

    onAddCliente(newCliente); // Llamar al callback para actualizar la lista de clientes

    // Restablecer los campos del formulario
    setNombreCompleto('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre Completo:
        <input type="text" value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Agregar Cliente</button>
    </form>
  );
};

export default ClienteForm;
