const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQL_HOST, // A porta do MySQL, se não for a padrão (3306)
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

const User = sequelize.define('cliente', {
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  Sexo: {
    type: DataTypes.STRING(2),
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  salario: {
    type: DataTypes.DECIMAL(16,2),
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false,
  }
}, {
  tableName: 'cliente',
  timestamps: false,
});

module.exports = {User};

