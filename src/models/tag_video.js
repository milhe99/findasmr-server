const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Tag = require('./tag');
const Video = require('./video');

const TagVideo = sequelize.define('TagVideo', {
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Tag,
            key: 'tag_id',
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
    tableName: 'tag_video',
    timestamps: false,
    underscored: true,
});

Tag.belongsToMany(Video, { through: TagVideo, foreignKey: 'tag_id' });
Video.belongsToMany(Tag, { through: TagVideo, foreignKey: 'video_id' });

module.exports = TagVideo;