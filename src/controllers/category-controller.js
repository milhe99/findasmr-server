const Category = require('../models/category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Category.update({ name }, {
        where: { category_id: id }
      });
      if (updated) {
        const updatedCategory = await Category.findByPk(id);
        res.status(200).json(updatedCategory);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Category.destroy({
        where: { category_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Category deleted' });
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};