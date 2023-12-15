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


const Product = sequelize.define('produto', {
  idproduto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
  },
  preco: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    unique: true,
  },
  desconto: {
    type: DataTypes.DECIMAL(3,2),
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING(30),
    allowNull: false,
  }
}, {
  tableName: 'produto',
  timestamps: false,
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
  tableName: 'produto',
  timestamps: false,
});

module.exports = {User,Product};

