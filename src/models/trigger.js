const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Trigger extends Model {}

Trigger.init({
  trigger_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
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
  modelName: 'Trigger',
  tableName: 'trigger',
  timestamps: false,
  underscored: true,
});

module.exports = Trigger;