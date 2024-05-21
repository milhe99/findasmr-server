const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Asmrist extends Model {}

Asmrist.init({
  asmrist_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'app_user',
      key: 'user_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(255),
    unique: true,
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
  modelName: 'Asmrist',
  tableName: 'asmrist',
  timestamps: false,
  underscored: true,
});

module.exports = Asmrist;