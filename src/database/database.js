import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'perros', // Nombre de la base.
  'postgres', // Nombre de usuario.
  'chapito12', // Password.
  {
    host: 'localhost', // Servidor.
    port: '5432', // Puerto.
    dialect: 'postgres' // Dialecto. Aquí se puede usar cualquier tipo de base de datos. Sequelize se encarga de todo el rollo.
  }
)
