const Asmrist = require('../models/asmrist');

exports.getAllAsmrists = async (req, res) => {
    try {
        const asmrists = await Asmrist.findAll();
        res.json(asmrists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAsmristById = async (req, res) => {
    try {
      const { id } = req.params;
      const asmrist = await Asmrist.findByPk(id);
      if (asmrist) {
        res.status(200).json(asmrist);
      } else {
        res.status(404).json({ error: 'Asmrist not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createAsmrist = async (req, res) => {
    try {
        const asmrist = await Asmrist.create(req.body);
        res.json(asmrist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAsmrist = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Asmrist.update({ name }, {
        where: { asmrist_id: id }
      });
      if (updated) {
        const updatedAsmrist = await Asmrist.findByPk(id);
        res.status(200).json(updatedAsmrist);
      } else {
        res.status(404).json({ error: 'Asmrist not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

exports.deleteAsmrist = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Asmrist.destroy({
        where: { asmrist_id: id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Asmrist deleted' });
      } else {
        res.status(404).json({ error: 'Asmrist not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};