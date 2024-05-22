const TagVideo = require('../models/tag_video');

exports.getAllTagVideos = async (req, res) => {
    try {
        const tagVideos = await TagVideo.findAll();
        res.json(tagVideos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTagVideoById = async (req, res) => {
    try {
        const { tagId, videoId } = req.params;
        const tagVideo = await TagVideo.findOne({
            where: {
                tag_id: tagId,
                video_id: videoId
            }
        });

        if (tagVideo) {
            res.status(200).json(tagVideo);
        } else {
            res.status(404).json({ error: 'Tag video not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTagVideo = async (req, res) => {
    try {
        const tagVideo = await TagVideo.create(req.body);
        res.json(tagVideo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTagVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await TagVideo.update({ name }, {
        where: { tag_video_id: id }
      });
      if (updated) {
        const updatedTagVideo = await TagVideo.findByPk(id);
        res.status(200).json(updatedTagVideo);
      } else {
        res.status(404).json({ error: 'Tag video not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteTagVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await TagVideo.destroy({
        where: { tag_video_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Tag video deleted' });
      } else {
        res.status(404).json({ error: 'Tag video not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};