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
  video_thumbnail: {
    type: DataTypes.STRING(255),
  },
  asmrist: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Asmrist',
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
  hooks: {
    beforeCreate: (video) => {
      video.created_at = new Date();
      video.updated_at = new Date();

      const url = this.getDataValue('url');
      const videoId = url.split('v=')[1];
      if (videoId) {
        video.video_thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      }
    },
    beforeUpdate: (video) => {
      video.updated_at = new Date();

      const url = this.getDataValue('url');
      const videoId = url.split('v=')[1];
      if (videoId) {
        video.video_thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      }
    }
  }
});

module.exports = Video;