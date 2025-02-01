# APLICATIVO HOTEL

## INTEGRANTES

- Alex Patricio Quishpe Salgado
- Marco Antonio Chacón Yépez

## INTRODUCCION
Este proyecto es una aplicación web para la gestión de clientes, habitaciones y reservas en un hotel, por medio del uso de frameworks como React.js, Vite y el lenguaje typescript.

## Instrucciones para Clonar, Instalar Dependencias y Ejecutar la Aplicación

### Clonar el Repositorio
Ejecutamos el siguiente comando:
git clone https://github.com/mc4589/cliente_habitaciones_hotel.git
cd enrutamiento

## Instalar Dependencias
Con cmd o Powershell ejecutamos el comando de instalación de dependencias:
- **npm install

## Ejecutar la aplicación
Desde la terminal de la carpeta "enrutamiento" en Visual Studio Code ejecutamos el siguiente comando:
-** npm run dev
Ejecutamos la página en el navegador con localhost y puerto 5173


### Descripción de Carpetas y Archivos

- **public/**: Contiene archivos estáticos que se sirven directamente. El archivo principal es `index.html`.
- **src/**: Contiene el código fuente de la aplicación.
  - **assets/**: Carpeta para recursos estáticos como imágenes, fuentes, etc.
  - **components/**: Contiene componentes reutilizables de React.
    - `ClienteForm.tsx`: Formulario para agregar y editar clientes.
    - `HabitacionForm.tsx`: Formulario para agregar y editar habitaciones.
    - `ReservaForm.tsx`: Formulario para agregar y editar reservas.
    - `ListaClientes.tsx`: Lista de clientes.
    - `ListaHabitaciones.tsx`: Lista de habitaciones.
    - `ListaReservas.tsx`: Lista de reservas.
  - **pages/**: Contiene las páginas principales de la aplicación.
    - `Clientes.tsx`: Página de gestión de clientes.
    - `Reservas.tsx`: Página de gestión de reservas.
    - `Habitaciones.tsx`: Página de gestión de habitaciones.
    - `Home.tsx`: Página de inicio.
  - `App.css`: Archivo de estilos globales de la aplicación.
  - `App.tsx`: Componente principal de la aplicación.
  - `main.tsx`: Punto de entrada de la aplicación.
  - `types.ts`: Definiciones de tipos TypeScript para la aplicación.
- **.gitignore**: Archivos y directorios a excluir del repositorio Git.
- **package.json**: Información del proyecto y dependencias.
- **README.md**: Documentación del proyecto.
- **tsconfig.json**: Configuración de TypeScript.
- **vite.config.ts**: Configuración de Vite.


## Descripción de Funcionalidades

### Clientes

- **Agregar Clientes**: Formulario para agregar clientes con los siguientes campos: primer nombre, segundo nombre, primer apellido, segundo apellido y correo electrónico. Se implementó el componente ClientesForm
- **Listar Clientes**: Tabla que muestra una lista de clientes con un identificador autoincremental, nombres completos y correo electrónico. Se implementó el componente ListaClientes.
- **Editar Clientes**: Botón de editar para cada cliente que abre un formulario emergente para actualizar la información del cliente.
- **Eliminar Clientes**: Botón de eliminar para cada cliente que permite eliminar el registro del cliente.

### Habitaciones

- **Agregar Habitaciones**: Formulario para agregar habitaciones con los siguientes campos: tipo de habitación (individual, doble, suite) y precio por noche en USD. Se implementó el componente HabitacionesForm.
- **Listar Habitaciones**: Tabla que muestra una lista de habitaciones con un identificador autoincremental, tipo de habitación y precio por noche en USD. e implementó el componente ListaHabitaciones.
- **Editar Habitaciones**: Botón de editar para cada habitación que abre un formulario emergente para actualizar la información de la habitación.
- **Eliminar Habitaciones**: Botón de eliminar para cada habitación que permite eliminar el registro de la habitación.

### Reservas

- **Agregar Reservas**: Formulario para agregar reservas con los siguientes campos: selección de cliente, selección de habitaciones, fecha de inicio y fecha de fin. Se implementó el componente ReservasForm.
- **Listar Reservas**: Tabla que muestra una lista de reservas con un identificador autoincremental, cliente, habitaciones reservadas, fecha de inicio y fecha de fin.e implementó el componente ListaReservas.
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

- **Este proyecto sirve de base para implementar sistemas informáticos más avanzados de gestión hotelera. También es posible integrar más framewors para que la aplicación sea más funcional.
