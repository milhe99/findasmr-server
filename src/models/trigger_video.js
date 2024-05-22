const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Trigger = require('./trigger');
const Video = require('./video');

const TriggerVideo = sequelize.define('TriggerVideo', {
    trigger_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Trigger,
            key: 'trigger_id',
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
    trigger_percentage: {
        type: DataTypes.INTEGER,
        check: {
            trigger_percentage: {
                [Sequelize.Op.gte]: 0,
                [Sequelize.Op.lte]: 100,
            },
        },
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
    tableName: 'trigger_video',
    timestamps: false,
    underscored: true,
});

Trigger.belongsToMany(Video, { through: TriggerVideo, foreignKey: 'trigger_id' });
Video.belongsToMany(Trigger, { through: TriggerVideo, foreignKey: 'video_id' });

module.exports = TriggerVideo;