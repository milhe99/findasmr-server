const Video = require('../models/video');
const moment = require('moment');

exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.findAll();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getVideoById = async (req, res) => {
    try {
      const { id } = req.params;
      const video = await Video.findByPk(id);
      if (video) {
        res.status(200).json(video);
      } else {
        res.status(404).json({ error: 'Video not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createVideo = async (req, res) => {
    try {
        const video = await Video.create(req.body);
        res.json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Video.update({ name }, {
        where: { video_id: id }
      });
      if (updated) {
        const updatedVideo = await Video.findByPk(id);
        res.status(200).json(updatedVideo);
      } else {
        res.status(404).json({ error: 'Video not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Video.destroy({
        where: { video_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Video deleted' });
      } else {
        res.status(404).json({ error: 'Video not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};