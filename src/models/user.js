const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class AppUser extends Model {}

AppUser.init({
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  passwordHash: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'passwordhash',
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM('regular', 'admin', 'asmrist'),
    allowNull: false,
    defaultValue: 'regular',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  sequelize,
  modelName: 'AppUser',
  tableName: 'app_user',
  timestamps: false,
  underscored: true,
});

module.exports = AppUser;