const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        req.body.password = hashedPassword;
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await User.update({ name }, {
        where: { user_id: id }
      });
      if (updated) {
        const updatedUser = await User.findByPk(id);
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({
        where: { user_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};