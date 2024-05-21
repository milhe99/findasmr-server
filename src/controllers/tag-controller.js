const Tag = require('../models/tag');

exports.getAllTags = async (req, res) => {
    try {
        const tags = await Tag.findAll();
        res.json(tags);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTagById = async (req, res) => {
    try {
      const { id } = req.params;
      const tag = await Tag.findByPk(id);
      if (tag) {
        res.status(200).json(tag);
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createTag = async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.json(tag);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTag = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Tag.update({ name }, {
        where: { tag_id: id }
      });
      if (updated) {
        const updatedTag = await Tag.findByPk(id);
        res.status(200).json(updatedTag);
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteTag = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Tag.destroy({
        where: { tag_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Tag deleted' });
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};