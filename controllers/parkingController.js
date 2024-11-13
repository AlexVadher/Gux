// src/controllers/parkingController.js
const pool = require('../config/dbConfig');

// Obtener todos los parqueaderos
exports.obtenerParqueaderos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM parqueadero');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los parqueaderos' });
  }
};

// Obtener parqueadero por ID
exports.obtenerParqueaderoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM parqueadero WHERE id_parqueadero = ?', [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'Parqueadero no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener el parqueadero' });
  }
};

// Crear un nuevo parqueadero
exports.crearParqueadero = async (req, res) => {
  const { nombre_parqueadero, ubicacion_geografica, direccion, capacidad, horario, tarifa, id_administrador } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO parqueadero (nombre_parqueadero, ubicacion_geografica, direccion, capacidad, horario, tarifa, id_administrador) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nombre_parqueadero, ubicacion_geografica, direccion, capacidad, horario, tarifa, id_administrador]
    );
    res.status(201).json({ id_parqueadero: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al crear el parqueadero' });
  }
};

// Actualizar un parqueadero
exports.actualizarParqueadero = async (req, res) => {
  const { id } = req.params;
  const { nombre_parqueadero, ubicacion_geografica, direccion, capacidad, horario, tarifa, id_administrador } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE parqueadero SET nombre_parqueadero = ?, ubicacion_geografica = ?, direccion = ?, capacidad = ?, horario = ?, tarifa = ?, id_administrador = ? WHERE id_parqueadero = ?',
      [nombre_parqueadero, ubicacion_geografica, direccion, capacidad, horario, tarifa, id_administrador, id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Parqueadero actualizado correctamente' });
    } else {
      res.status(404).json({ message: 'Parqueadero no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al actualizar el parqueadero' });
  }
};

// Eliminar un parqueadero
exports.eliminarParqueadero = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM parqueadero WHERE id_parqueadero = ?', [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Parqueadero eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Parqueadero no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al eliminar el parqueadero' });
  }
};
