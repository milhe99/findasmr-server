const Trigger = require('../models/trigger');

exports.getAllTriggers = async (req, res) => {
    try {
        const triggers = await Trigger.findAll();
        res.json(triggers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTriggerById = async (req, res) => {
    try {
      const { id } = req.params;
      const trigger = await Trigger.findByPk(id);
      if (trigger) {
        res.status(200).json(trigger);
      } else {
        res.status(404).json({ error: 'Trigger not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createTrigger = async (req, res) => {
    try {
        const trigger = await Trigger.create(req.body);
        res.json(trigger);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTrigger = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Trigger.update({ name }, {
        where: { trigger_id: id }
      });
      if (updated) {
        const updatedTrigger = await Trigger.findByPk(id);
        res.status(200).json(updatedTrigger);
      } else {
        res.status(404).json({ error: 'Trigger not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteTrigger = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Trigger.destroy({
        where: { trigger_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Trigger deleted' });
      } else {
        res.status(404).json({ error: 'Trigger not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};