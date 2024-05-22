const CategoryVideo = require('../models/category_video');

exports.getAllCategoryVideos = async (req, res) => {
    try {
        const categoryVideos = await CategoryVideo.findAll();
        res.json(categoryVideos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategoryVideoById = async (req, res) => {
    try {
        const { categoryId, videoId } = req.params;
        const categoryVideo = await CategoryVideo.findOne({
            where: {
                category_id: categoryId,
                video_id: videoId
            }
        });

        if (categoryVideo) {
            res.status(200).json(categoryVideo);
        } else {
            res.status(404).json({ error: 'Category video not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCategoryVideo = async (req, res) => {
    try {
        const categoryVideo = await CategoryVideo.create(req.body);
        res.json(categoryVideo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCategoryVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await CategoryVideo.update({ name }, {
        where: { category_video_id: id }
      });
      if (updated) {
        const updatedCategoryVideo = await CategoryVideo.findByPk(id);
        res.status(200).json(updatedCategoryVideo);
      } else {
        res.status(404).json({ error: 'Category video not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteCategoryVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await CategoryVideo.destroy({
        where: { category_video_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Category video deleted' });
      } else {
        res.status(404).json({ error: 'Category video not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};