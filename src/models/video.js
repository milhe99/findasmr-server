const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Video extends Model {}

Video.init({
  video_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
  },
  length: {
    type: DataTypes.TIME,
  },
  url: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  asmrist: {
    type: DataTypes.INTEGER,
    references: {
      model: 'asmrist',
      key: 'asmrist_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
  modelName: 'Video',
  tableName: 'video',
  timestamps: false,
  underscored: true,
});

module.exports = Video;