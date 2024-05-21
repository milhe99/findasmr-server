const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Category = require('./category');
const Video = require('./video');

const CategoryVideo = sequelize.define('CategoryVideo', {
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'category_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  video_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Video,
      key: 'video_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
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
  tableName: 'category_video',
  timestamps: false,
  underscored: true,
});

Category.belongsToMany(Video, { through: CategoryVideo, foreignKey: 'category_id' });
Video.belongsToMany(Category, { through: CategoryVideo, foreignKey: 'video_id' });

module.exports = CategoryVideo;
