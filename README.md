# APLICATIVO HOTEL

## INTEGRANTES

- Alex Patricio Quishpe Salgado
- Marco Antonio Chacón Yépez

## Introducción
Este proyecto es una aplicación web para la gestión de clientes, habitaciones y reservas en un hotel, por medio del uso de frameworks como React.js, Vite y el lenguaje typescript.

## Instrucciones para Clonar, Instalar Dependencias y Ejecutar la Aplicación

### Clonar el Repositorio
Usamos el comando en git:

git clone https://github.com/tu_usuario/aplicativo-hotel.git
cd aplicativo-hotel

## Instalar Dependencias
Ejecutamos el siguiene comando en cmd o Powershell
- **npm install

## Ejecutar la aplicación
Desde la terminal del proyecto, carpeta "enrutamiento" en VS Code ejecutamos el siguiente comando:
-** npm run dev

## Descripción de Funcionalidades

### Gestión de Clientes

- **Agregar Clientes**: Se empieza utilizando un componente de formulario para agregar clientes con los siguientes campos: primer nombre, segundo nombre, primer apellido, segundo apellido y correo electrónico.
- **Listar Clientes**: Tabla que muestra una lista de clientes con un identificador autoincremental, nombres completos y correo electrónico.
- **Editar Clientes**: Botón de editar para cada cliente que abre un formulario emergente para actualizar la información del cliente.
- **Eliminar Clientes**: Botón de eliminar para cada cliente que permite eliminar el registro del cliente.

### Habitaciones

- **Agregar Habitaciones**: Formulario para agregar habitaciones con los siguientes campos: tipo de habitación (individual, doble, suite) y precio por noche en USD.
- **Listar Habitaciones**: Tabla que muestra una lista de habitaciones con un identificador autoincremental, tipo de habitación y precio por noche en USD.
- **Editar Habitaciones**: Botón de editar para cada habitación que abre un formulario emergente para actualizar la información de la habitación.
- **Eliminar Habitaciones**: Botón de eliminar para cada habitación que permite eliminar el registro de la habitación.

### Reservas

- **Agregar Reservas**: Formulario para agregar reservas con los siguientes campos: selección de cliente, selección de una o más habitaciones disponibles, fecha de inicio y fecha de fin.
- **Listar Reservas**: Tabla que muestra una lista de reservas con un identificador autoincremental, cliente, habitaciones reservadas, fecha de inicio y fecha de fin.
- **Editar Reservas**: Botón de editar para cada reserva que abre un formulario emergente para actualizar la información de la reserva.
- **Eliminar Reservas**: Botón de eliminar para cada reserva que permite eliminar el registro de la reserva.
- **Validación**: Se asegura que una habitación no se asigne a dos o más reservas simultáneamente y que no haya solapamiento de fechas en las reservas.

### Estilos y Diseño

- **Barra de Navegación**: Header con opciones de navegación para Clientes, Habitaciones y Reservas.
- **Footer**: Footer con el texto "Desarrollo Web" en todas las páginas.
- **Diseño Responsivo**: Divs que ocupan todo el ancho de la pantalla y tablas con bordes estilizados.

## Tecnologías Utilizadas

- React
- TypeScript
- react-router-dom
- CSS

## Contribuciones

- Este proyecto sirve de base para implementar sistemas informáticos más avanzados de gestión hotelera. También es posible integrar más framewors para que la aplicación sea más funcional.
