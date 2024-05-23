const UserVideo = require('../models/user_video');

exports.getAllUserVideos = async (req, res) => {
    try {
        const userVideos = await UserVideo.findAll();
        res.json(userVideos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserVideoById = async (req, res) => {
    try {
        const { userId, videoId } = req.params;
        const userVideo = await UserVideo.findOne({
            where: {
                user_id: userId,
                video_id: videoId
            }
        });

        if (userVideo) {
            res.status(200).json(userVideo);
        } else {
            res.status(404).json({ error: 'user video not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUserVideo = async (req, res) => {
    try {
        const userVideo = await UserVideo.create({ user_id: req.body.userId, video_id: req.body.videoId });
        res.json(userVideo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await UserVideo.update({ name }, {
        where: { user_video_id: id }
      });
      if (updated) {
        const updateduserVideo = await UserVideo.findByPk(id);
        res.status(200).json(updateduserVideo);
      } else {
        res.status(404).json({ error: 'user video not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteUserVideo = async (req, res) => {
    try {
      const deleted = await UserVideo.destroy({
        where: { user_id: req.params.userId, video_id: req.params.videoId}
      });
      if (deleted) {
        res.status(204).json({ message: 'user video deleted' });
      } else {
        res.status(404).json({ error: 'user video not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};