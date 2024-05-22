const Video = require('../models/video');
const Asmrist = require('../models/asmrist');
const { Op } = require('sequelize');

exports.search = async (req, res) => {
    try {
        const { query } = req.query;

        const videos = await Video.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.iLike]: `%${query}%` } },
                    { '$Asmrist.name$': { [Op.iLike]: `%${query}%` } }
                ]
            },
            include: [{
                model: Asmrist,
                attributes: ['name'],
                as: 'Asmrist'
            }]
        });

        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};