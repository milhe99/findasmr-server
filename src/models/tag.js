const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Tag extends Model {}

Tag.init({
  tag_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(55),
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
  modelName: 'Tag',
  tableName: 'tag',
  timestamps: false,
  underscored: true,
});

module.exports = Tag;