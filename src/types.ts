export interface Cliente {
  id: number;
  nombreCompleto: string;
  email: string;
}

export interface Habitacion {
  id: number;
  tipo: string;
  precio: number;
}

export interface Reserva {
  id: number;
  cliente: number;  
  habitacion: number;  
  fechaInicio: string;
  fechaFin: string;
}
