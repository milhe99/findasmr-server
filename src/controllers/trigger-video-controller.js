const TriggerVideo = require('../models/trigger_video');

exports.getAllTriggerVideos = async (req, res) => {
    try {
        const triggerVideos = await TriggerVideo.findAll();
        res.json(triggerVideos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTriggerVideoById = async (req, res) => {
    try {
        const { triggerId, videoId } = req.params;
        const triggerVideo = await TriggerVideo.findOne({
            where: {
                trigger_id: triggerId,
                video_id: videoId
            }
        });

        if (triggerVideo) {
            res.status(200).json(triggerVideo);
        } else {
            res.status(404).json({ error: 'Trigger video not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTriggerVideo = async (req, res) => {
    try {
        const triggerVideo = await TriggerVideo.create(req.body);
        res.json(triggerVideo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTriggerVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await TriggerVideo.update({ name }, {
        where: { trigger_video_id: id }
      });
      if (updated) {
        const updatedTriggerVideo = await TriggerVideo.findByPk(id);
        res.status(200).json(updatedTriggerVideo);
      } else {
        res.status(404).json({ error: 'Trigger video not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteTriggerVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await TriggerVideo.destroy({
        where: { trigger_video_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Trigger video deleted' });
      } else {
        res.status(404).json({ error: 'Trigger video not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};