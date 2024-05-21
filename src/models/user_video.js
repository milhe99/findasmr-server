const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db');

const User = require('./user');
const Video = require('./video');

const UserVideo = sequelize.define('UserVideo', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
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
    tableName: 'user_video',
    timestamps: false,
    underscored: true,
});

User.belongsToMany(Video, { through: UserVideo, foreignKey: 'user_id' });
Video.belongsToMany(User, { through: UserVideo, foreignKey: 'video_id' });

module.exports = UserVideo;