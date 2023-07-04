const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el middleware body-parser para obtener datos del cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('database.db');

// Crear la tabla de usuarios si no existe
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
)`);

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error de servidor' });
    } else if (!row) {
      res.status(401).json({ error: 'Usuario no encontrado' });
    } else if (row.password !== password) {
      res.status(401).json({ error: 'Contraseña incorrecta' });
    } else {
      res.json({ message: 'Inicio de sesión exitoso' });
    }
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
