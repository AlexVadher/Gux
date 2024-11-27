-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS parqueadero_db;
USE parqueadero_db;

-- Tabla para roles
CREATE TABLE rol (
    id_rol INT PRIMARY KEY AUTO_INCREMENT,
    nombre_rol VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla para usuarios (clientes y administradores unificados)
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(50),
    documento VARCHAR(20) UNIQUE,
    telefono VARCHAR(20),
    usuario VARCHAR(50) UNIQUE NOT NULL,
    clave VARCHAR(100) NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- Tabla para tipos de vehículos
CREATE TABLE tipo_vehiculo (
    id_tipovehiculo INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL
);

-- Tabla para parqueaderos
CREATE TABLE parqueadero (
    id_parqueadero INT PRIMARY KEY AUTO_INCREMENT,
    nombre_parqueadero VARCHAR(100) NOT NULL,
    ubicacion_geografica VARCHAR(255),
    direccion VARCHAR(255),
    capacidad INT NOT NULL,
    horario VARCHAR(50),
    tarifa DECIMAL(10, 2) NOT NULL,
    id_administrador INT,
    FOREIGN KEY (id_administrador) REFERENCES usuario(id_usuario)
);

-- Tabla para vehículos
CREATE TABLE vehiculo (
    id_vehiculo INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(20) NOT NULL UNIQUE,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50),
    id_tipovehiculo INT,
    id_usuario INT,
    FOREIGN KEY (id_tipovehiculo) REFERENCES tipo_vehiculo(id_tipovehiculo),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Tabla para reservas
CREATE TABLE reserva (
    id_reserva INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_parqueadero INT,
    fecha_reserva DATE,
    hora_entrada TIME,
    hora_salida TIME,
    estado_reserva ENUM('activa', 'cancelada', 'finalizada') NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_parqueadero) REFERENCES parqueadero(id_parqueadero)
);

INSERT INTO rol (nombre_rol) VALUES 
('cliente'),
('administrador'),
('supervisor'),
('soporte');
