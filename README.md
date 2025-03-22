# DeceptiMail

**DeceptiMail** es una aplicación educativa diseñada para enseñar a los usuarios a identificar correos de phishing mediante simulaciones interactivas. Con un diseño profesional y un tema oscuro, la aplicación simula una bandeja de entrada realista donde los usuarios pueden analizar correos electrónicos y decidir si son legítimos o intentos de phishing.

## Características
- **Bandeja de entrada simulada**: Interfaz inspirada en Gmail con vista de lista y detalle de correos.
- **Correos variados**: Incluye 25 correos realistas, tanto legítimos como de phishing, con detalles sutiles para desafiar al usuario.
- **Feedback inmediato**: Proporciona explicaciones detalladas sobre por qué un correo es phishing o no después de cada decisión.
- **Puntuación final**: Muestra los resultados con una puntuación y consejos para mejorar.
- **Diseño atractivo**: Tema oscuro y estilos modernos para una experiencia visual profesional.

## Tecnologías usadas
### Backend
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para construir la API REST.
- **CORS**: Middleware para permitir la comunicación entre el backend y el frontend.

### Frontend
- **React.js**: Biblioteca para construir la interfaz de usuario.
- **React Router**: Manejo de la navegación entre páginas.
- **Fetch API**: Realización de solicitudes HTTP al backend.
- **CSS**: Estilos personalizados para el tema oscuro y el diseño profesional.

## Instalación y configuración
### Requisitos previos
- **Node.js** (versión 14 o superior).
- **npm** (incluido con Node.js).

### Clonar el repositorio
```bash
git clone https://github.com/tuusuario/DeceptiMail.git
cd DeceptiMail
```

### Configurar el backend
Navega a la carpeta backend:
```bash
cd backend
```
Instala las dependencias:
```bash
npm install
```
Inicia el servidor:
```bash
node app.js
```
El backend estará disponible en [http://localhost:5000](http://localhost:5000).

### Configurar el frontend
Abre una nueva terminal y navega a la carpeta frontend:
```bash
cd frontend
```
Instala las dependencias:
```bash
npm install
```
Inicia la aplicación:
```bash
npm start
```
El frontend estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto
```
DeceptiMail/
├── backend/         # Código del servidor
│   ├── app.js       # Archivo principal del backend
│   └── package.json # Dependencias del backend
├── frontend/        # Código de la interfaz de usuario
│   ├── src/         # Código fuente de React
│   └── package.json # Dependencias del frontend
├── .gitignore       # Archivos ignorados por Git
└── README.md        # Documentación del proyecto
