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
  creator: {
    type: DataTypes.INTEGER,
    references: {
      model: 'app_user',
      key: 'user_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  privacy: {
    type: DataTypes.ENUM('public', 'private'),
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